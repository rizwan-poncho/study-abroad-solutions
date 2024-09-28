import React, { useEffect, useState } from "react";
import service1 from "/assets/service1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import homeServiceData from "../../Data/homeServiceData.json";

const HomeOutstandingImigration = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    setService(homeServiceData);
  }, []);

  return (
    <div className="px-28 w-full py-14 bg-slate-50">
      <div className="grid grid-cols-2 gap-10 w-full">
        {/* Text Grid  */}
        <div className=" w-full">
          <p className="text-sm tracking-widest uppercase text-slate-500">
            what do we offer
          </p>
          <p className="text-4xl font-semibold pt-3">
            Outstanding immigration visa{" "}
            <span className="text-orange-500">services</span>
          </p>
          <p className="text-sm pt-3 text-slate-600 text-justify">
            Expert visa services that ensure a smooth and hassle-free
            immigration process, handled with precision and personalized care
            every step of the way.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 gap-10">
          {service.slice(0, 2).map((serviceItem1) => {
            return (
              <div key={serviceItem1.topic} className="w-60 h-60  group ">
                <div className="w-full relative">
                  <img
                    src={service1}
                    className="w-60 h-60 object-cover "
                    alt=""
                  />
                  <div className="absolute w-60 h-60 custom-background top-0 left-0">
                    <div className="w-full h-full flex justify-center items-center">
                      <div className="w-full h-full">
                        <div className="px-10 pt-20 flex justify-center ">
                          <div className="h-14 w-14 rounded-full bg-white flex justify-center items-center">
                            <FontAwesomeIcon
                              className="text-3xl"
                              icon={faUserGraduate}
                              style={{ color: "#f26600" }}
                            />
                          </div>
                        </div>
                        <div className="px-5 py-5  flex justify-center">
                          <p className="py-2 px-5 text-lg text-center text-white  font-semibold">
                            {serviceItem1.topic}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-full h-full opacity-0 top-0 left-0 transition duration-300 group-hover:opacity-100">
                    <div className="w-full h-full flex justify-center !items-center">
                      <div className="w-52 h-52 bg-white rounded px-3 py-3">
                        <p className="text-orange-500 text-lg font-semibold">
                          {serviceItem1.topic}
                        </p>
                        <p className="text-xs text-slate-700 mt-5 text-justify">
                          {serviceItem1.des}
                        </p>
                        <button className="rounded-sm mt-10 py-1 px-4 bg-orange-500 text-white text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-10 mt-10">
        {service.slice(2).map((serviceItem2) => {
          return (
            <div key={serviceItem2.topic} className="w-60 h-60  group ">
              <div className="w-full relative">
                <img
                  src={service1}
                  className="w-60 h-60 object-cover "
                  alt=""
                />
                <div className="absolute w-60 h-60 custom-background top-0 left-0">
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full h-full">
                      <div className="px-10 pt-20 flex justify-center ">
                        <div className="h-14 w-14 rounded-full bg-white flex justify-center items-center">
                          <FontAwesomeIcon
                            className="text-3xl"
                            icon={faUserGraduate}
                            style={{ color: "#f26600" }}
                          />
                        </div>
                      </div>
                      <div className="px-5 py-5  flex justify-center">
                        <p className="py-2 px-5 text-center text-lg text-white  font-semibold">
                          {serviceItem2.topic}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full opacity-0 top-0 left-0 transition duration-300 group-hover:opacity-100">
                  <div className="w-full h-full flex justify-center !items-center">
                    <div className="w-52 h-52 bg-white rounded px-3 py-3">
                      <p className="text-orange-500 text-lg font-semibold">
                        {serviceItem2.topic}
                      </p>
                      <p className="text-xs text-slate-700 mt-5 text-justify">
                        {serviceItem2.des}
                      </p>
                      <button className="rounded-sm mt-10 py-1 px-4 bg-orange-500 text-white text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeOutstandingImigration;
