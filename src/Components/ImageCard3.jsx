import React from "react";

const ImageCard3 = () => {
  return (
    <div className="w-full h-full relative py-6 bg-[#f2faff] rounded-[10px] grid grid-cols-2 max-[850px]:grid-cols-1 gap-12 items-start mb-6">
    {/* Left Section: Image */}
    <div className="flex justify-end max-[850px]:justify-center items-center w-full h-full relative">
      <div className="w-[80%] h-[90%] relative z-10">
        <img
          src="Vector2.png"
          alt="Left Section Image"
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="w-[80%] h-[90%] border-2 border-dotted absolute top-1 right-10 max-[1000px]:hidden border-[#BCBCFF]">
      </div>
    </div>

    {/* Right Section: Content */}
    <div className="flex flex-col justify-start items-start max-[850px]:justify-center max-[850px]:items-center gap-[42px] w-[85%] max-[850px]:w-[100%] max-[850px]:px-4">
      {/* Top: Number and Heading */}
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col">
          {/* Number */}
          {/* <div className="text-[#f2faff] text-[100px] font-bold leading-[110px]">
            01
          </div> */}
          {/* <div className="h-[127px] text-black text-[100px] font-bold">01</div> */}
          <div className="text-[#BCBCFF] text-[100px] max-[600px]:text-3xl font-bold text-outline-purpule">03</div>
          {/* Heading */}
          <div className="text-[#083a5e] text-4xl max-[600px]:text-3xl font-bold leading-[44.28px]">
          View & Interact with Transcript
          </div>
        </div>

        {/* Points Section */}
        <div className="flex flex-col gap-2">
          {/* Point 1 */}
          <div className="flex items-start gap-2">
            {/* <div className="w-6 h-6 bg-gray-300 rounded-full"> */}
                <img src="/arrow.svg" alt=">" />
            {/* </div> */}
            <p className="text-[#497696] text-base font-normal leading-relaxed">
            After the transcription is complete, the transcript will appear in a scrollable, interactive text area.
            </p>
          </div>
          {/* Point 2 */}
          <div className="flex items-start gap-2">
            {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
            <img src="/arrow.svg" alt="" />
            <p className="text-[#497696] text-base font-normal leading-relaxed">
            Use the collapsible sections to navigate through the transcript and highlight key points.
            </p>
          </div>
          {/* Point 3 */}
          <div className="flex items-start gap-2">
            {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
            <img src="/arrow.svg" alt="" />
            <p className="text-[#497696] text-base font-normal leading-relaxed">
            Save your highlights, add tags, or generate summaries based on your preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="w-[177px] h-[47px] bg-[#3f3eed] rounded-[25px] flex justify-center items-center">
        <span className="text-white text-base font-medium">Get Started Free</span>
      </div>
    </div>
  </div>
  );
};

export default ImageCard3;
