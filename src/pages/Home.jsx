import React from "react";
import HomeCarousel from "../components/home/HomeCarousel";
import HomeQueryForm from "../components/home/HomeQueryForm";
import HomeTopStudyDestinations from "../components/home/HomeTopStudyDestionations";
import HomeWhyChooseSAS from "../components/home/HomeWhyChooseSAS";
import HomeCountriesSupport from "../components/home/HomeCountriesSupporting";
import HomeOutstandingImigration from "../components/home/HomeOutstandingImigration";
import HomeCounting from "../components/home/HomeCounting";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <HomeQueryForm />
      <HomeTopStudyDestinations />
      <HomeWhyChooseSAS />
      <HomeCountriesSupport />
      <HomeOutstandingImigration />
      <HomeCounting />
    </>
  );
};

export default Home;
