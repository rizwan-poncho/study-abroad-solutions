import React from "react";
import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import d3 from "../../assets/d3.png";
import d4 from "../../assets/d4.png";
import d5 from "../../assets/d5.png";
import d6 from "../../assets/d6.png";

const HomeTopStudyDestinations = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-28 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl  text-orange-500 text-2xl font-medium title-font mb-4 ">
              Top Study Destinations
            </h1>
            <p className="lg:w-2/3 text-sm mx-auto leading-relaxed ">
              Discover top study destinations offering world-class education,
              diverse cultures, and unmatched opportunities for personal and
              academic growth. Perfect for your journey to success.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Destination 01  */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute  z-0 w-full h-64  object-cover object-center"
                  src={d1}
                />
                <div className=" px-5 transition duration-300 py-5 relative cursor-pointer z-10 w-full h-64  bg-slate-50 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-semibold text-orange-500 mb-1">
                    AUSTRALIA
                  </h2>

                  <p className="leading-relaxed text-sm text-justify">
                    Australia boasts top-ranked universities, a multicultural
                    society, and a relaxed lifestyle, attracting students with
                    its high academic standards and diverse study opportunities.
                  </p>

                  <button className="text-white rounded-md bg-orange-500 text-sm py-1 px-3 mt-5">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Destination 02  */}

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute z-0  inset-0 w-full h-64 object-cover object-center"
                  src={d2}
                />
                <div className="px-5 py-5 cursor-pointer relative h-64 z-10 w-full border-4 border-slate-50 bg-slate-50 transition duration-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-semibold text-orange-500 mb-1">
                    CANADA
                  </h2>

                  <p className="leading-relaxed text-sm text-justify">
                    Canada provides high-quality education with a focus on
                    research and innovation, coupled with a welcoming
                    environment and diverse cultural experiences, making it
                    ideal for international students.
                  </p>
                  <button className="text-white rounded-md bg-orange-500 text-sm py-1 px-3 mt-5">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Destination 03  */}

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 z-0 object-cover object-center"
                  src={d3}
                />
                <div className="px-5 py-5 cursor-pointer h-64 relative  z-10 w-full border-4 border-slate-50 bg-slate-50 transition duration-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-semibold text-orange-500 mb-1">
                    IRELAND
                  </h2>

                  <p className="leading-relaxed text-sm text-justify">
                    Ireland is known for its excellent education system, strong
                    research opportunities, and rich cultural heritage, offering
                    students a unique and enriching academic experience in a
                    friendly setting.
                  </p>
                  <button className="text-white rounded-md bg-orange-500 text-sm py-1 px-3 mt-5">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Destination 04  */}

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 z-0 object-cover object-center"
                  src={d4}
                />
                <div className="px-5 cursor-pointer py-5 relative z-10 h-64 w-full border-4 border-gray-200 bg-slate-50 transition duration-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-semibold text-orange-500 mb-1">
                    NEW ZEALAND
                  </h2>

                  <p className="leading-relaxed text-sm text-justify">
                    New Zealand offers world-class education, stunning natural
                    landscapes, and a supportive learning environment, making it
                    a perfect destination for students seeking adventure and
                    academic growth.
                  </p>

                  <button className="text-white rounded-md bg-orange-500 text-sm py-1 px-3 mt-5">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Destination 05  */}

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 z-0 object-cover object-center"
                  src={d5}
                />
                <div className="px-5 py-5 relative h-64 z-10 w-full border-4 border-gray-200 bg-slate-50 opacity-0 transition duration-300 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-semibold text-orange-500 mb-1">
                    UNITED KINGDOM
                  </h2>

                  <p className="leading-relaxed text-sm text-justify">
                    The UK is home to prestigious universities and a rich
                    academic tradition, providing students with access to
                    cutting-edge research, diverse cultures, and a globally
                    recognized education system.
                  </p>

                  <button className="text-white rounded-md bg-orange-500 text-sm py-1 px-3 mt-5">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            {/* Destination 06  */}

            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-64 z-0 object-cover object-center"
                  src={d6}
                />
                <div className="px-5 py-5 cursor-pointer relative z-10 w-full h-64 border-4 border-gray-200 bg-white transition duration-300 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-semibold text-orange-500 mb-1">
                    UNITED STATES
                  </h2>

                  <p className="leading-relaxed text-sm text-justify">
                    The USA offers world-renowned universities, diverse academic
                    programs, and vibrant campus life, making it a top choice
                    for international students seeking a comprehensive education
                    and cultural experience
                  </p>

                  <button className="text-white rounded-md bg-orange-500 text-sm py-1 px-3 mt-5">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeTopStudyDestinations;
