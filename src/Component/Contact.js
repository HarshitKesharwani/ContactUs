import "./Contact.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
  });

  const [errors, setErrors] = useState({});
  //validating forms
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!formData.Name.trim()) {
      newErrors.Name = "Username is required";
    }
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      newErrors.Email = "Invalid email format";
    }

    // Set errors if any
    setErrors(newErrors);

    // Proceed with form submission if there are no errors
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log("Form submitted:", formData);
    }
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
            <form className="form space-y-2" onSubmit={(e) => Submit(e)}>
              {" "}
              <div className="mx-8">
                <label className="mx-10 font-bold"> Name </label>
                <br />
                <input
                  className="mx-10 w-56 h-8 md:w-96 h-11 placeholder:p-2"
                  placeholder="Your Name"
                  name="Name"
                  type="text"
                  value={formData.Name}
                  onChange={handleChange}
                />
                {errors.username && <span>{errors.username}</span>}
              </div>
              <br />
              <div className="mx-8">
                <label className="mx-10 font-bold"> Email </label>
                <br />
                <input
                  className="mx-10 w-56 h-8 md:w-96 h-11 placeholder:p-2"
                  placeholder="Your Email"
                  name="Email"
                  type="text"
                  value={formData.Email}
                  onChange={handleChange}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <br />
              <div className="mx-8">
                <label className="mx-10 font-bold"> Phone :</label>
                <br />
                <input
                  className="mx-10 w-56 h-8 md:w-96 h-11 placeholder:p-2"
                  placeholder="Your Phone"
                  name="Phone"
                  type="text"
                />
              </div>
              <br />
              <div className="mx-8">
                <label className=" mx-10 font-bold">Message:</label>
                <br />
                <textarea
                  className="mx-10 w-56 h-8 md:w-96 h-11 placeholder:p-2"
                  placeholder="Your Message"
                  id="message"
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
