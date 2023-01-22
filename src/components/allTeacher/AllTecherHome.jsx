import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TeacherData } from "../../data/TeacherData";
import ViewAllTeacher from "./ViewAllTeacher";

const AllTecherHome = () => {
  const locations = useLocation();
  const filters = locations.state;

  const [allTeacher, setAllteacher] = useState(TeacherData);
  const [filteredTeacher, setFilteredTeacher] = useState([]);
  const [pageFilter, setPageFilter] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setPageFilter({
      ...pageFilter,
      [e.target.name]: value,
    });
  };
  const handleclick = (e) => {
    setFilteredTeacher(
      allTeacher.filter((item) =>
        Object.entries(pageFilter).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
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
    <div className="bg-[whitesmoke]">
      <div className="w-full h-[70px] flex items-center justify-center space-x-3 top-[80px] sticky bg-[#fff] z-20 px-3">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={handleChange}
          className="outline-none border-[1px] rounded-full md:w-1/5 w-2/5 md:py-2 py-1 px-5"
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          onChange={handleChange}
          className="outline-none border-[1px] rounded-full md:w-1/5 w-2/5 md:py-2 py-1 px-5"
        />
        <button
          onClick={handleclick}
          className="md:py-2 md:px-9  rounded-full flex items-center md:bg-[#52a9eb] md:text-[#fff] space-x-1"
        >
          <span class="material-symbols-outlined ">person_search</span>
          <span className="md:block hidden " >Search</span>
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
