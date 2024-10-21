import React from "react";

const ImageCard1 = () => {
  return (
    <div className="w-full h-full py-6 relative bg-[#f2faff] rounded-[10px] grid grid-cols-2 max-[850px]:grid-cols-1 gap-12 mb-6">
      {/* Left Section: Content */}
      <div className="w-full h-full flex items-center justify-end max-[850px]:justify-center">
        <div className="flex flex-col gap-[42px] w-[80%] max-[850px]:w-full max-[850px]:px-4">
          {/* Top: Number and Heading */}
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col">
              {/* Number */}
              <div className="text-[#FFC6C6] text-[100px] max-[600px]:text-3xl font-bold text-outline-orange">
                02
              </div>
              {/* Heading */}
              <div className="text-[#083a5e] text-4xl max-[600px]:text-3xl font-bold leading-[44.28px]">
                Transcription in Progress
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
                  After uploading your file, you will see a message confirming
                  the upload.
                </p>
              </div>
              {/* Point 2 */}
              <div className="flex items-start gap-2">
                {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
                <img src="/arrow.svg" alt="" />
                <p className="text-[#497696] text-base font-normal leading-relaxed">
                  A progress bar will appear, indicating the transcription
                  status. You can track the completion percentage in real-time.
                </p>
              </div>
              {/* Point 3 */}
              <div className="flex items-start gap-2">
                {/* <div className="w-6 h-6 bg-gray-300 rounded-full"></div> */}
                <img src="/arrow.svg" alt="" />
                <p className="text-[#497696] text-base font-normal leading-relaxed">
                  Feel free to explore the dashboard features or review past
                  transcripts as your current transcription is being processed.
                </p>
              </div>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="w-[177px] h-[47px] bg-[#3f3eed] rounded-[25px] flex justify-center items-center">
            <span className="text-white text-base font-medium">
              Get Started Free
            </span>
          </div>
        </div>
      </div>
      {/* Right Section: Image */}
      <div className="flex justify-center items-center w-full h-full relative">
        <div className="w-[80%] h-[90%] relative z-10">
          <img
            src="Vector1.png"
            alt="Left Section Image"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="w-[80%] h-[90%] border-2 border-dotted absolute border-[#FFC6C6] top-2 left-10 max-[1000px]:hidden"></div>
      </div>
    </div>
  );
};

export default ImageCard1;
