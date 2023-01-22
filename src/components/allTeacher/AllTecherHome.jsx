import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { TeacherData } from "../../data/TeacherData";
import ViewAllTeacher from "./ViewAllTeacher";

const AllTecherHome = () => {
  const locations = useLocation();
  const filters = locations.state;
  let [loading, setLoading] = useState(false);
  const [allTeacher, setAllteacher] = useState(TeacherData);
  const [filteredTeacher, setFilteredTeacher] = useState([]);
  const [pageFilter, setPageFilter] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setPageFilter({
      ...pageFilter,
      [e.target.name]: value.toLowerCase(),
    });
  };
  const handleclick = (e) => {
    setLoading(true);
    setFilteredTeacher(
      allTeacher.filter((item) =>
        Object.entries(pageFilter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setFilteredTeacher(
      allTeacher.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, []);

  return (
    <>
      {loading && (
        <div className="w-full absolute h-[calc(100vh-80px)] bg-[#fff] flex items-center justify-center z-20">
          <DotLoader
            color="#52a9eb"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="bg-[whitesmoke]">
        <div className="w-full h-[70px] flex items-center justify-center space-x-3 top-[80px] sticky bg-[#fff] z-20 px-3">
          <div className="outline-none border-[1px] rounded-full md:w-1/5 w-2/5 md:py-2 py-1 px-5 flex space-x-2">
            <span className="material-symbols-outlined text-[#757575]">
              auto_stories
            </span>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="outline-none w-full"
            />
          </div>
          <div className="outline-none border-[1px] rounded-full md:w-1/5 w-2/5 md:py-2 py-1 px-5 flex space-x-2">
            <span className="material-symbols-outlined text-[#757575]">
              location_on
            </span>
            <input
              type="text"
              name="location"
              placeholder="location"
              onChange={handleChange}
              className="outline-none w-full"
            />
          </div>
          <button
            onClick={handleclick}
            className="md:py-2 md:px-9  rounded-full flex items-center md:bg-[#52a9eb] md:text-[#fff] space-x-1"
          >
            <span className="material-symbols-outlined ">search</span>
            <span className="md:block hidden ">Search</span>
          </button>
        </div>
        {filteredTeacher.map((elm) => (
          <ViewAllTeacher key={elm.id} elm={elm} />
        ))}
      </div>
    </>
  );
};

export default AllTecherHome;
