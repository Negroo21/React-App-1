import React from "react";

export default function Contact() {
  return (
    <div className="my-20">
      <div className="pt-5 text-center">
        <h2 className="text-4xl font-extrabold my-10 text-[#2c3e50] text-uppercase">
          CONTACT COMPONENT
        </h2>
        <div className="flex items-center justify-center mb-3">
          <div className="line bg-[#2c3e50] w-16 h-1 mx-3"></div>
          <i className="fa-solid fa-star text-2xl text-[#2c3e50]"></i>
          <div className="line bg-[#2c3e50] w-16 h-1 mx-3"></div>
        </div>
      </div>

      <form
        className="w-1/2 p-6 mx-auto mt-10 bg-white rounded-lg shadow-md"
        noValidate
      >
        {/* UserName Input */}
        <div className="mb-4">
          <label
            htmlFor="userName"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            UserName:
          </label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your username"
            name="userName"
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 rounded-md"
          />
        </div>

        {/* UserAge Input */}
        <div className="mb-4">
          <label
            htmlFor="userAge"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            UserAge:
          </label>
          <input
            id="userAge"
            type="text"
            placeholder="Enter your age"
            name="userAge"
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 rounded-md"
          />
        </div>

        {/* UserEmail Input */}
        <div className="mb-4">
          <label
            htmlFor="userEmail"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            UserEmail:
          </label>
          <input
            id="userEmail"
            type="email"
            placeholder="Enter your email"
            name="userEmail"
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 rounded-md"
          />
        </div>

        {/* UserPassword Input */}
        <div className="mb-6">
          <label
            htmlFor="userPassword"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            UserPassword:
          </label>
          <input
            id="userPassword"
            type="password"
            placeholder="Enter your password"
            name="userPassword"
            className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className=" p-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
