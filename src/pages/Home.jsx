import React from "react";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeQueryForm from "../components/home/HomeQueryForm";
import HomeTopStudyDestinations from "../components/home/HomeTopStudyDestionations";
import HomeWhyChooseSAS from "../components/home/HomeWhyChooseSAS";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <HomeQueryForm />
      <HomeTopStudyDestinations />
      <HomeWhyChooseSAS />
    </>
  );
};

export default Home;
