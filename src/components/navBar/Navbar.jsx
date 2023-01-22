import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../images/logo.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between h-[80px] border-b-2 z-20 bg-[#fff] w-full top-0 sticky px-3 md:px-7">
        <div className="md:w-[150px] w-[100px] h-[90%]">
          <Link to="/">
            <img
              className="font-bold w-full h-full object-contain"
              src={mainLogo}
            ></img>
          </Link>
        </div>
        <div className=" items-center list-none space-x-7 md:flex hidden">
          <Link to="/">
            <li>Tutor Login</li>
          </Link>
          <Link to="/">
            <li>Student/Parent Login</li>
          </Link>
          <Link to="/">
            <li>About Us</li>
          </Link>
        </div>
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? (
            <span className="material-symbols-outlined">close</span>
          ) : (
            <span className="material-symbols-outlined">menu</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
