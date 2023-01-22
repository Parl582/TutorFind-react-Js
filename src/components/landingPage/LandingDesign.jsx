import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingDesign = () => {
  // const [subject, setSubject] = useState("");
  // const [location, setLocation] = useState("");

  const [filters, setFilter] = useState({});

  let navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  const handleClick = () => {
    navigate("/teacher", { state: filters });
  };
  return (
    <>
      <div className="h-[calc(100vh-80px)] ">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col w-[90%] items-center mt-[-100px]">
            <h1 className="text-[40px] text-center">
              Direct Contact with Professional Tutor
            </h1>
            <h2 className="text-[40px] text-center pt-0 mt-0 leading-tight">
              Near You and Schedule Your Time.
            </h2>
            <div className="flex items-center py-3 rounded-full md:w-2/3 justify-between border-[1px] overflow-hidden shadow-md h-[50px] mt-[70px] px-1">
              <input
                type="text"
                className="w-1/3 px-5 outline-none "
                placeholder="Subject"
                name="subject"
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                className="w-1/3 px-5 outline-none"
                placeholder="Location"
                name="location"
                onChange={(e) => handleChange(e)}
              />

              <button
                className="w-1/4 text-center border-2 py-2 rounded-full bg-green-400 text-[#fff]"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingDesign;
