import React from "react";
import javascript from "../../images/blogspost/icons8-javascript-logo-500.png";
import react from "../../images/blogspost/icons8-react-512.png";
import mongodb from "../../images/blogspost/icons8-mongodb-480.png";

const Blog = () => {
  return (
    <div id="blog" className="bg-green-900 py-3">
      <div className="container mx-auto  my-4">
        <h2 className="font-bold text-3xl md:text-6xl text-center text-white p-8">
          My Blogs
        </h2>

        <div className="grid p-2  md:grid-cols-3 gap-4">
          <div className="rounded-lg p-1 text-center bg-white shadow-2xl">
            <img src={javascript} width="100%" alt="post" />
            <h3 className="font-bold text-2xl px-4 text-center">
              JavaScript Interview Questions
            </h3>
            <p className="px-4 text-center">
              JavaScript is considered a great language for beginners. It's
              partly because of its wide use on the internet, and partly because
              several of its features
            </p>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://medium.com/@bretcameron/9-javascript-interview-questions-48416366852b">
                Read
              </a>{" "}
            </button>
          </div>

          <div className="rounded-lg p-1 text-center bg-white shadow-2xl">
            <img src={react} width="100%" alt="post" />
            <h3 className="font-bold text-2xl px-4 text-center">
              React/Redux Interview Questions with Answers
            </h3>
            <p className="px-4 text-center">
              I prepared list of react and redux interview question, Few
              question I faced in my journey and few of the question I have
              referred from Google itself 😂
            </p>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://medium.com/geekculture/react-redux-interview-questions-with-answers-2c132dd754a2">
                Read
              </a>{" "}
            </button>
          </div>

          <div className="rounded-lg p-1 text-center bg-white shadow-2xl">
            <img src={mongodb} width="100%" alt="post" />
            <h3 className="font-bold text-2xl px-4 text-center">
              Frequently asked: MongoDB Interview Questions and Answers
            </h3>
            <p className="px-4 text-center">
              MongoDB is the most famous NoSQL open source database management
              system. It is written in C++ language and developed by MongoDB
              Inc.
            </p>
            <button className="bg-green-900 cursor-pointer  md:w-36 w-30 my-3 rounded-full md:py-2 py-2 px-4 md:px-6 font-bold text-xl text-white">
              {" "}
              <a href="https://vigowebs.medium.com/frequently-asked-mongodb-interview-questions-and-answers-1f17c6b0950d">
                Read
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
