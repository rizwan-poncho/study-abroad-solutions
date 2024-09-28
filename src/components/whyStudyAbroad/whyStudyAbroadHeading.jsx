import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

const WhyStudyAbroadHeading = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (id) => {
    if (id === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(id);
    }
  };

  const accordionData = [
    {
      heading: "Global Exposure",
      des: "Des1",
      id: "001",
    },
    {
      heading: "High-Quality Education",
      des: "Des2",
      id: "002",
    },
    {
      heading: "Enhance Your Career Prospects",
      des: "Des3",
      id: "003",
    },
    {
      heading: "Personal Growth and Independence",
      des: "Des4",
      id: "004",
    },
    {
      heading: "Networking Opportunities",
      des: "Des5",
      id: "005",
    },
    {
      heading: "Learn a New Language",
      des: "Des5",
      id: "006",
    },
    {
      heading: "Experience a Different Education System",
      des: "Des5",
      id: "007",
    },
    {
      heading: "Cultural Immersion and Travel",
      des: "Des5",
      id: "008",
    },
    {
      heading: "Scholarships and Financial Aid",
      des: "Des5",
      id: "009",
    },
    {
      heading: "Gain a Global Perspective",
      des: "Des5",
      id: "010",
    },
  ];

  return (
    <>
      {/* Heading  */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500">
              Why Study Abroad?
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Studying abroad unlocks a vast world of opportunities that extend
              far beyond the traditional classroom experience. It is a
              transformative journey, offering unparalleled personal and
              professional growth that can reshape your future in profound ways.
              By stepping into a new culture, immersing yourself in diverse
              learning environments, and engaging with global communities, you
              will cultivate a unique set of skills and perspectives that are
              essential in today’s interconnected world. From expanding your
              academic knowledge to forging international networks, studying
              abroad empowers you to think globally, act confidently, and build
              a foundation for lasting success. Below are some compelling
              reasons why studying abroad could be the most enriching decision
              you’ll ever make:
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section  */}
      {accordionData.map((accData) => {
        return (
          <div key={accData.id} className="px-28" id="accordionExample">
            <div className="rounded-t-lg border border-neutral-200 bg-white ">
              <h2 className="mb-0" id="headingOne">
                <button
                  className={`${
                    activeElement === accData.id &&
                    `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
                  } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
                  type="button"
                  onClick={() => handleClick(accData.id)}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {accData.heading}
                  <span
                    className={`${
                      activeElement === accData.id
                        ? `rotate-[-180deg] -mr-1`
                        : `rotate-0 fill-[#f26600]  dark:fill-white`
                    } ml-auto h-5 w-5 shrink-0 fill-[#f26600] transition-transform duration-200 ease-in-out motion-reduce:transition-none `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              <TECollapse
                show={activeElement === accData.id}
                className="!mt-0 !rounded-b-none !shadow-none"
              >
                <div className="px-5 py-4">{accData.des}</div>
              </TECollapse>
            </div>
          </div>
        );
      })}
      {/* <div className="px-28" id="accordionExample">
        <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`${
                activeElement === "element1" &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]  dark:fill-white`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4">
              <strong>This is the first item's accordion body.</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu
              rhoncus purus, vitae tincidunt nibh. Vivamus elementum egestas
              ligula in varius. Proin ac erat pretium, ultricies leo at, cursus
              ante. Pellentesque at odio euismod, mattis urna ac, accumsan
              metus. Nam nisi leo, malesuada vitae pretium et, laoreet at lorem.
              Curabitur non sollicitudin neque.
            </div>
          </TECollapse>
        </div>
      </div> */}
    </>
  );
};

export default WhyStudyAbroadHeading;
