import React from "react";

export default function About() {
  return (
    <div className="about bg-teal-500 flex items-center">
      <div className=" text-white flex-wrap flex justify-center items-center py-16">
        <div className="text-center pt-4">
          {/* Title Section */}
          <h2 className="text-4xl font-extrabold mb-3 text-uppercase">
            ABOURT COMPONENT
          </h2>

          {/* Line and Star */}
          <div className="flex items-center justify-center mb-3">
            <div className="line bg-white w-16 h-1 mx-3"></div>
            <i className="fa-solid fa-star text-2xl"></i>
            <div className="line bg-white w-16 h-1 mx-3"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container content mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            {/* Left Column */}
            <div className="w-full  md:w-1/2 px-4 mb-8 md:mb-0">
              <p>
                Freelancer is a free Bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 px-4">
              <p>
                Freelancer is a free Bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
