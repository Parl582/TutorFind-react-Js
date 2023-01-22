import React from "react";
let teacherImage =
  "https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149620.jpg?w=2000";

const ViewAllTeacher = ({ elm }) => {
  return (
    <>
      <div className="w-full flex items-center justify-center py-5 bg-[whitesmoke] py-3">
        <div className="md:w-[80%] w-[90%]  ">
          <div className="w-full flex md:flex-none flex-wrap rounded-lg px-4 bg-[#fff] justify-between md:min-h-[250px] auto">
            <div className="md:w-[25%] sm:w-full p-1 overflow-hidden flex items-center justify-center">
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={teacherImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-[75%] w-full p-2   flex justify-between mainDetails_container">
              <div className="w-2/3  p-2 container_one">
                <h1 className="font-semibold text-[#555] text-[1.2rem]">
                  John Parl
                </h1>
                <div className="flex items-center space-x-2 text-[0.9rem]">
                  <span className="material-symbols-outlined">school</span>
                  <span className="text-[#3e6b5d] font-medium">English</span>
                </div>

                <div className="flex items-center space-x-1 text-[0.9rem] mt-2">
                  <span className="material-symbols-outlined text-[20px] text-[#626262]">
                    add_location_alt
                  </span>
                  <span className="text-[#0a0a0a] font-medium">
                    <span className="underline">{elm.location} </span> 16 No
                    Tiniali
                  </span>
                </div>

                <div className="flex items-center space-x-1 text-[0.9rem] mt-2">
                  <span className="material-symbols-outlined text-[20px] text-[#626262]">
                    person_filled
                  </span>
                  <span className="text-[#636363] font-medium">
                    52 Active Students
                    <sup>
                      <span className="material-symbols-outlined text-[14px] text-[green]">
                        hdr_strong
                      </span>
                    </sup>
                  </span>
                </div>

                {/* Details */}
                <div className=" space-x-2 text-[0.9rem] font-medium flex items-center flex-wrap">
                  <div className="flex items-center text-[#3e6b5d] ">
                    <span className="material-symbols-outlined text-[1.1rem]">
                      settings_voice
                    </span>
                    <span>Language Speaks :</span>
                  </div>
                  <div className=" space-y-1">
                    <span className="ml-1 space-x-1 bg-[#52a9eb] px-3 rounded-md text-white">
                      Assamese
                    </span>
                    <span className="ml-1 space-x-1 bg-[#52a9eb] px-3 rounded-md text-white">
                      English
                    </span>
                    <span className="ml-1 space-x-1 bg-[#52a9eb] px-3 rounded-md text-white">
                      Hindi
                    </span>
                  </div>
                </div>
                {/* about  */}
                <div className="my-3 w-full ">
                  <p className="text-[#000000] font-medium text-[0.8rem] leading-6 tracking-wide">
                    Qualifications : B.Tech In Computer Science, And Experience
                    React JS Developer, Knowledge of CSS, HTML, Redux, Scss,
                    Styled Components, Tailwind Css
                  </p>

                  <div className="flex flex-col space-y-2 py-4 w-full mobile__show_button">
                    <button className="w-full  py-3 rounded-md bg-[#52a9eb] font-semibold text-[#fff]">
                      Book
                    </button>
                    <button className="w-full bg-[#e0e0e0] py-3 rounded-md font-semibold text-[#2b2b2b]">
                      Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-1/3 right__container">
                <div className="">
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-[#f4d83d]">
                      star_rate
                    </span>
                    <h4 className="text-[30px] font-light ">{elm.rating} </h4>
                    <p className="mt-2 px-3  leading-5 text-[13px] font-thin  text-[#313030]">
                      (231 reviews)
                    </p>
                  </div>
                  <div className="">
                    <div className="flex items-center">
                      <span className="material-symbols-outlined">
                        currency_rupee
                      </span>
                      <h4 className="text-[1.2rem] font-medium">
                        3000 /<span className="text-[#24afd9] font-thin text-[18px]">months </span>
                      </h4>
                    </div>
                    <p className="px-3 font-medium text-[13px] text-[#8b8b8b] mt-[-3]">
                      60-min Lesson (Mon - Fri)
                    </p>
                  </div>
                  {/* button  */}
                  <div className="flex flex-col space-y-2 py-4 w-full mobile__hide_button">
                    <button className="w-full  py-3 rounded-md bg-[#52a9eb] font-semibold text-[#fff]">
                      Book
                    </button>
                    <button className="w-full bg-[#e0e0e0] py-3 rounded-md font-semibold text-[#2b2b2b]">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAllTeacher;
