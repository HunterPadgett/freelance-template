
import React from "react";

const SocialIcons = () => {
  return (
    <div>
      <div className="pb-1">
        <span className="pb-2 text-gray-100 font-semibold text-2xl md:text-xl">
          Follow Us
        </span>
      </div>
      <div className="">
        <a className="p-2 cursor-pointer inline-flex items-center
          rounded-full mx-1.5 text-3xl text-gray-500 hover:text-gray-100 bg-teal-500
          duration-300"
            href="https://"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a className="p-2 cursor-pointer inline-flex items-center
          rounded-full mx-1.5 text-3xl text-gray-500 hover:text-gray-100 bg-teal-500
          duration-300"
            href="https://"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
      </div>
    </div>
  );
};

export default SocialIcons;