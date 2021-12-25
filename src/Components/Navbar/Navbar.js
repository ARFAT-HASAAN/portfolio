import React from "react";
import Banner from "../../Components/Banner/Banner";

const Navbar = () => {
  return (
    <div>
      <div className="relative min-h-screen md:flex">
        {/* mobile manu bar */}
        <div className="bg-green-900 flex justify-between text-white py-2  px-2 md:hidden">
          {/* logo  */}
          <a
            href="#"
            className="flex items-center space-x-2 text-white font-bold"
          >
            {/* <p>A</p> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg> */}
            {/* <span className="text-2xl font-bold md:hidden">Web Developer</span> */}
          </a>

          {/* mobile manu button  */}
          <button
            onClick={() => {
              const sidebar = document.getElementById("sidebar");
              sidebar.classList.toggle("-translate-x-full");
            }}
            id="mobileManu"
            className=" mobileManup-2 hover:bg-green-700 rounded "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:bg-green-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          id="sidebar"
          className="bg-green-900 text-white md:w-54 space-y-6 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
        >
          <a href="#" className="block text-center">
            <p className="font-extrabold text-red-500 text-7xl">A</p>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto my-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg> */}
            <span className="font-normal  ">Web Developer</span>
          </a>
          <nav>
            <a
              href="#home"
              className="py-2.5 px-4 smooth block hover:bg-green-700 text-center  rounded transition duration-700 ease-out"
            >
              Home
            </a>
            <a
              href="#project"
              className="py-2.5 px-4 smooth block hover:bg-green-700 text-center  rounded transition duration-700 ease-out"
            >
              Project
            </a>
            <a
              href="#blog"
              className="py-2.5 px-4 smooth block hover:bg-green-700 text-center  rounded transition duration-700 ease-out"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="py-2.5 px-4 smooth block hover:bg-green-700 text-center  rounded transition duration-700 ease-out"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* content */}
        <Banner></Banner>

        {/* <div className="flex-1 p-10 font-bold text-2xl">content text here</div> */}
      </div>
    </div>
  );
};

export default Navbar;
