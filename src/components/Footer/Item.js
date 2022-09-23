import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold text-2xl md:text-4xl">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="linkHoverFooter text-gray-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;