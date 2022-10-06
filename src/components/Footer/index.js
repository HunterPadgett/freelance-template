import React from "react";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="grid text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <ul>
          <h1 className="mb-1 font-semibold text-xl md:text-2xl">
            PRACTICE AREAS
          </h1>

          <li>
            <Link
              className="linkHoverFooter text-gray-400 duration-300
          text-sm cursor-pointer leading-6"
              to="/practice-areas"
            >
              View All Areas
            </Link>
          </li>
        </ul>
        <ul>
          <h1 className="mb-1 font-semibold text-xl md:text-2xl">ATTORNEYS</h1>

          <li>
            <Link
              className="linkHoverFooter text-gray-400 duration-300
          text-sm cursor-pointer leading-6"
              to="/attorneys"
            >
              Our Team
            </Link>
          </li>
        </ul>
        <ul>
          <h1 className="mb-1 font-semibold text-xl md:text-2xl">HISTORY</h1>

          <li>
            <Link
              className="linkHoverFooter text-gray-400 duration-300
          text-sm cursor-pointer leading-6"
              to="/history"
            >
              Our History
            </Link>
          </li>
        </ul>
        <ul>
          <h1 className="mb-1 font-semibold text-xl md:text-2xl">CONTACT</h1>

          <li>
            <Link
              className="linkHoverFooter text-gray-400 duration-300
          text-sm cursor-pointer leading-6"
              to="/contact"
            >
              Email Us
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="grid flex items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12
      text-center text-gray-200 text-sm pb-8"
      >
        <span>
          © 2022 MAHONEY COLE & COURSEY All rights reserved <br />
          Savannah, GA |{" "}
          <a
            className="linkHoverFooter no-underline text-gray-400 hover:no-underline"
            href="tel:7062325012"
          >
            912-233-7272
          </a>{" "}
          |{" "}
          <a
            className="linkHoverFooter no-underline text-gray-400 hover:no-underline"
            href="mailto: abc@example.com"
          >
            email@email.com
          </a>
        </span>
        <span>Terms · Privacy Policy </span>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
