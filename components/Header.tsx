import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 h-[212px] w-full max-w-[1440px] flex">
      <ul className="list-none flex space-x-4 mx-auto justify-evenly">
        <li>about</li>
        <li>services</li>
        <li>work</li>
        <li>logo</li>
        <li>leadership</li>
        <li>blog</li>
        <li>apply</li>
      </ul>
    </div>
  );
};

export default Header;
