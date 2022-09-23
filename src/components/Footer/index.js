import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <ItemsContainer />
      <div
        className="grid flex items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>
          © 2022 *Business Name* All rights reserved <br />
          Rome, GA |{" "}
          <a
            className="linkHoverFooter no-underline text-gray-400 hover:no-underline"
            href="tel:7062325012"
          >
            706-232-5012
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