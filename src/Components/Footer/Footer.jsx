import React from "react";

export default function Footer() {
  return (
    <footer className=" text-white ">
      <div className="mx-auto">
        <div className="flex flex-wrap justify-between bg-gray-700 p-5">
          {/* Location Card */}
          <div className=" text-white p-6 w-full sm:w-1/4">
            <h3 className="text-xl font-semibold text-center mb-4">LOCATION</h3>
            <p className="text-center">2215 John Daniel Drive</p>
            <p className="text-center">Clark, MO 65243</p>
          </div>

          {/* Around the Web Card */}
          <div className="p-6 w-full sm:w-1/4">
            <h3 className="text-xl font-semibold text-center mb-4">
              AROUND THE WEB
            </h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-teal-500">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-teal-500">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-teal-500">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-teal-500">
                <i className="fa-solid fa-globe"></i>
              </a>
            </div>
          </div>

          {/* About Freelancer Card */}
          <div className=" text-white p-6 w-full sm:w-1/4">
            <h3 className="text-xl font-semibold text-center mb-4">
              ABOUT FREELANCER
            </h3>
            <p className="text-center">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-gray-900 py-5 text-center text-sm">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  );
}
