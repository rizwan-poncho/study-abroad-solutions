import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Import Swiper core and required modules (if needed)

import cData from "../../Data/countryCarousel.json";
import axios from "axios";

const HomeCountriesSupport = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(cData);
  }, []);

  return (
    <div className="px-28">
      <div className="flex justify-center">
        <div>
          <p className="sm:text-3xl text-2xl font-medium text-center title-font text-black mb-4">
            Countries we are supporting <br /> for the{" "}
            <span className="text-orange-500">immigration</span>
          </p>
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="!py-10 "
      >
        {countries.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="w-full flex justify-center">
                <div className="">
                  <img
                    src={e.img}
                    className="h-20 w-20 object-contain"
                    alt=""
                  />
                  <p className="text-center text-xl pt-3 font-bold text-orange-500">
                    {e.country}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeCountriesSupport;
