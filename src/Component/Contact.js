import "./Contact.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Contact() {
  const initialValues = { Name: "", Email: "", Phone: "", Message: " " };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Submit();
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Name) {
      errors.Name = " *Username is required!";
    }
    if (!values.Email) {
      errors.Email = "*Email is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "*This is not a valid email format!";
    }
    if (!values.Phone) {
      errors.Phone = "*Phone number is required!";
    }

    return errors;
  };
  //Data collection using google sheet
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbz_6wD5dtfHNWLCExSxxE1wI5NUCmqMySOz1FqkKUi9WbNj_hN2yd7qjuFi9QDqnp-XZw/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className=" flex justify-center back">
        <h2 className="hidden md:block text-4xl relative left-52 top-2 font-semibold font font-mono">
          CONTACT US
        </h2>
        <div className="bg-blue-200 h-fit  w-max rounded-md my-8 md:relative left-64 top-16  ">
          <div className="md:hidden mx-11 ">
            <img
              className="size-86 relative top-3 justify-item-center "
              src="./android.jpg"
            />
          </div>
          <h1 className="text-center text-3xl my-6 ">Get in Touch</h1>
          <div className="my-3 justify-center">
            <form className="form space-y-2" onSubmit={handleSubmit}>
              <div className="mx-8">
                <label className="mx-10 font-bold"> Name </label>
                <br />
                <input
                  className="mx-10 w-56 h-8 md:w-96 md:h-11 placeholder:p-2"
                  placeholder="Your Name"
                  name="Name"
                  type="text"
                  value={formValues.Name}
                  onChange={handleChange}
                />
                <p className="text-red-600 mx-10">{formErrors.Name}</p>
              </div>
              <br />
              <div className="mx-8">
                <label className="mx-10 font-bold"> Email </label>
                <br />
                <input
                  className="mx-10 w-56 h-8 md:w-96 md:h-11 placeholder:p-2"
                  placeholder="Your Email"
                  name="Email"
                  type="text"
                  value={formValues.Email}
                  onChange={handleChange}
                />
                <p className="text-red-600 mx-10">{formErrors.Email}</p>
              </div>
              <br />
              <div className="mx-8">
                <label className="mx-10 font-bold"> Phone :</label>
                <br />
                <input
                  className="mx-10 w-56 h-8 md:w-96 md:h-11 placeholder:p-2"
                  placeholder="Your Phone"
                  name="Phone"
                  type="text"
                  value={formValues.Phone}
                  onChange={handleChange}
                />
                <p className="text-red-600 mx-10">{formErrors.Phone}</p>
              </div>
              <br />
              <div className="mx-8">
                <label className=" mx-10 font-bold">Message:</label>
                <br />
                <textarea
                  className="mx-10 w-56 h-8 md:w-96 md:h-11 placeholder:p-2"
                  placeholder="Your Message"
                  id="Message"
                  rows="4"
                  columns="10"
                  name="Message"
                ></textarea>
              </div>
              <div className="mx-30 relative top-7">
                <input
                  className="mx-36  bg-white w-24 h-9 rounded-md md:relative left-12 md:w-36 hover:bg-slate-200"
                  name="Name"
                  type="submit"
                />
              </div>
              <br />
            </form>

            <div className=" h-14 w-3/2 relative left-15 top-8 rounded-md my-8 flex space-x-5 place-content-center text-3xl  md:block">
              <div className="flex space-x-8 my-1 mx-0 md:relative left-32">
                <a href="#">
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaWhatsapp />
                </a>
                <a href="#">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
