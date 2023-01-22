import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between h-[80px] border-b-2 z-20 bg-[#fff] w-full top-0 sticky px-3 md:px-7">
        <div className="">
          <Link to="/">TuitionMaster</Link>
        </div>
        <div className=" items-center list-none space-x-7 md:flex hidden">
          <li>Home</li>
          <li>Tutor Login</li>
          <li>Student/Parent Login</li>
          <li>About Us</li>
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
