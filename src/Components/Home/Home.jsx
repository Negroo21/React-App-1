import React from "react";
import avatarImage from "../../images/avatar.svg";

export default function Home() {
  return (
    <div className="home bg-teal-500 text-white flex justify-center items-center h-screen">
      <div className="text-center">
        {/* Image */}
        <img src={avatarImage} alt="Avatar" className="mb-3 mx-auto" />

        {/* Star Section */}
        <div className="text-center pt-4">
          <h2 className="text-4xl font-extrabold mb-3 text-uppercase">
            START FRAMWORK
          </h2>
          <div className="flex items-center justify-center mb-3">
            <div className="line bg-white w-16 h-1 mx-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="line bg-white w-16 h-1 mx-3"></div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-xl">
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </div>
  );
}
