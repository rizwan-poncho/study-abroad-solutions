import React, { useEffect } from "react";
import { Carousel, initTWE } from "tw-elements";
const HomeCarousel = () => {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
        data-twe-interval="4000"
      >
        {/* <!--Carousel items--> */}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}

          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-active
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="block w-full h-96"
              alt="..."
            />
            <div className="absolute top-0 bottom-0 w-full hidden py-5 text-center text-white md:block">
              <div className="px-28 grid grid-cols-2 items-center justify-start  h-full">
                <div className="w-full h-full flex items-center">
                  <div>
                    <div className=" w-full h-full">
                      <h1 className="text-3xl font-medium text-left">
                        Last Call For Feb 2025 Intake
                      </h1>
                      <h1 className="text-xl text-left">
                        Study oppurtunities in Ireland, Scotland, & Denmark!!
                      </h1>
                    </div>
                    <div className="flex justify-start py-4">
                      <button className="bg-orange-500 rounded-md transition duration-300 hover:scale-105 text-base text-white px-4 py-2">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Second item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="block w-full h-96"
              alt="..."
            />
            <div className="absolute top-0 bottom-0 w-full hidden py-5 text-center text-white md:block">
              <div className="px-28 grid grid-cols-2 items-center justify-start  h-full">
                <div className="w-full h-full flex items-center">
                  <div>
                    <div className=" w-full h-full">
                      <h1 className="text-3xl font-medium text-left">
                        Last Call For Feb 2025 Intake
                      </h1>
                      <h1 className="text-xl text-left">
                        Study oppurtunities in Ireland, Scotland, & Denmark!!
                      </h1>
                    </div>
                    <div className="flex justify-start py-4">
                      <button className="bg-orange-500 rounded-md transition duration-300 hover:scale-105 text-base text-white px-4 py-2">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Third item--> */}
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-twe-carousel-item
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              className="block w-full h-96"
              alt="..."
            />
            <div className="absolute top-0 bottom-0 w-full hidden py-5 text-center text-white md:block">
              <div className="px-28 grid grid-cols-2 items-center justify-start  h-full">
                <div className="w-full h-full flex items-center">
                  <div>
                    <div className=" w-full h-full">
                      <h1 className="text-3xl font-medium text-left">
                        Last Call For Feb 2025 Intake
                      </h1>
                      <h1 className="text-xl text-left">
                        Study oppurtunities in Ireland, Scotland, & Denmark!!
                      </h1>
                    </div>
                    <div className="flex justify-start py-4">
                      <button className="bg-orange-500 rounded-md transition duration-300 hover:scale-105 text-base text-white px-4 py-2">
                        Inquire Now
                      </button>
                    </div>
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

export default HomeCarousel;
