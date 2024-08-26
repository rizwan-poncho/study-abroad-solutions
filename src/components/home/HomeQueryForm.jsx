import React, { useEffect } from "react";
import { Ripple, Input, initTWE } from "tw-elements";
import { TESelect } from "tw-elements-react";
import { TEInput } from "tw-elements-react";
import TextField from "@mui/material/TextField";
import p1 from "../../assets/p1.png";

const HomeQueryForm = () => {
  const country = [
    { text: "Select", value: 0 },
    { text: "Australia", value: 1 },
    { text: "Canada", value: 2 },
    { text: "Ireland", value: 3 },
    { text: "Scotland", value: 4 },
    { text: "Denmark", value: 5 },
    { text: "China", value: 6 },
    { text: "UAE", value: 7 },
    { text: "Malaysia", value: 8 },
  ];
  const intake = [
    { text: "Select", value: 0 },
    { text: "September - 2024", value: 1 },
    { text: "February - 2025", value: 2 },
  ];
  const educationFunding = [
    { text: "Select", value: 0 },
    { text: "Self-Funded", value: 1 },
    { text: "Parents", value: 2 },
    { text: "Seeking Scholarship", value: 3 },
    { text: "Bank Loan", value: 4 },
  ];
  const studyLevel = [
    { text: "Select", value: 0 },
    { text: "Bachelor/Undergrad ", value: 1 },
    { text: "Masters/Post Grad", value: 2 },
    { text: "Ph.D", value: 3 },
  ];

  useEffect(() => {
    initTWE({ Ripple, Input });
  }, []);

  return (
    <>
      <div className="gap-10 w-full h-full grid grid-cols-2 py-10 px-28">
        <div className="">
          <h1 className="font-medium py-3 text-3xl ">
            Help SAS get in touch with you
          </h1>

          <p className="text-xs text-justify pb-2">
            Enter your details and one of our expert counsellors will reach out
            to you so we can connect you to the right course, country,
            university, and even scholarships!
          </p>

          {/* Name Input  */}
          <div className="pt-3">
            <TEInput type="text" label="Name"></TEInput>
          </div>

          {/* Email Input  */}
          <div className="pt-3">
            <TEInput type="text" label="Email"></TEInput>
          </div>
          {/* Mobile Input  */}
          <div className="pt-3  w-full">
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <TEInput
                  disabled
                  value={"+880"}
                  type="text"
                  className=""
                ></TEInput>
              </div>
              <div className="col-span-3">
                <TEInput type="text" className="" label="Mobile"></TEInput>
              </div>
            </div>
          </div>

          {/* Study Destination & Intake  */}
          <div className="relative mb-3 grid grid-cols-2  pt-5">
            <TESelect
              label="Study Destination"
              className="pr-2"
              data={country}
            />
            <TESelect label="Intake" data={intake} />
          </div>
          {/* Funding & Preferred Study Level  */}
          <div className="relative mb-3 grid grid-cols-2  pt-3">
            <TESelect
              label="Funding"
              className="pr-2"
              data={educationFunding}
            />
            <TESelect label="Preffered Study Level" data={studyLevel} />
          </div>

          {/* Button  */}
          <div className="w-full">
            <button className="py-2 px-4 hover:scale-105 transition duration-300 rounded-md text-white bg-orange-500">
              Submit
            </button>
          </div>
        </div>

        <div className="h-full w-full">
          <img src={p1} className=" !object-cover w-full" alt="" />
        </div>
      </div>
    </>
  );
};

export default HomeQueryForm;
