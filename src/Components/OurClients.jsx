import React from "react";

const OurClients = () => {
  return (
    <div className="p-20 max-[600px]:p-4 flex flex-col gap-10 items-center">
      <div className="text-center text-[#083a5e] text-base font-medium">
        professionals & teams choose Distill Audio
      </div>
      <div className="flex flex-wrap items-center justify-around gap-6 w-full">
        <img src="/01.png" alt="" />
        <img src="/02.png" alt="" />
        <img src="/03.png" alt="" />
        <img src="/04.png" alt="" />
        <img src="/05.png" alt="" />
        <img src="/06.png" alt="" />
      </div>
      <div className="text-center text-[#083a5e] text-5xl max-[600px]:text-3xl font-bold mt-10">
        Unlock the Power of <br />
        Audio Content
      </div>
      <div className="text-center text-[#497696]">
        Transform the way you interact with and extract <br /> knowledge from
        podcasts and audio files.
      </div>
    </div>
  );
};

export default OurClients;
