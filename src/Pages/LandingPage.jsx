import React from "react";
// import ImageCard from "../Components/ImageCard1";
import ImageCard2 from "../Components/ImageCard2";
import ImageCard1 from "../Components/ImageCard1";
import ImageCard3 from "../Components/ImageCard3";
import AudioContentUnlock from "../Components/AudioContentUnlock";
import FAQs from "../Components/FAQ's";
import HeroSection from "../Components/HeroSection";
import OurClients from "../Components/OurClients";

const LandingPage = () => {
  return (
    <div className="font-space">
      <HeroSection />
      <OurClients />
      <ImageCard1 />
      <ImageCard2 />
      <ImageCard3 />
      <AudioContentUnlock />
      <FAQs />
    </div>
  );
};

export default LandingPage;
