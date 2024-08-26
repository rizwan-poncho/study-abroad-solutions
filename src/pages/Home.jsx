import React from "react";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeQueryForm from "../components/home/HomeQueryForm";
import HomeTopStudyDestinations from "../components/home/HomeTopStudyDestionations";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <HomeQueryForm />
      <HomeTopStudyDestinations />
    </>
  );
};

export default Home;
