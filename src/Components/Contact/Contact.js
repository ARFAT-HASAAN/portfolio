import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendemail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6spn9ii",
        "template_d6ihefg",
        form.current,
        "user_v0FG1Nu2bVttezSqE23MA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="bg-green-900 p-4">
      <div className="container mx-auto">
        <div className=" md:w-6/12 p-4 mx-auto my-4 border rounded-lg bg-white border-gray-800">
          <h2 className="font-bold text-4xl text-center text-green-900 p-3">
            Contact Me
          </h2>
          <form className="text-center " onSubmit={sendemail} ref={form}>
            <input
              type="text"
              placeholder="Full Name"
              required
              name="fname"
              className="border rounded-lg block my-4 px-4 py-2 rounded-sm border-green-900 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              className="border rounded-lg block my-4 px-4 py-2 rounded-sm border-green-900 w-full"
            />
            <textarea
              placeholder="Write someting..."
              name="message"
              className="border rounded-lg block mb-4 px-4 py-2 rounded-sm border-green-900 w-full"
            />
            <input
              type="submit"
              className="bg-green-900 cursor-pointer  md:w-40 w-30 my-y rounded-full md:py-3 py-2 px-4 md:px-6 font-bold text-xl text-white"
              value="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
