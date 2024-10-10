import React from 'react'

const HeroSection = () => {
  const images = ["/ri1.png", "/ri2.png", "/ri3.png", "/ri4.png", "/ri5.png"];
  return (
    <div className="h-[800px] bg-[url('/S1bg.jpg')] bg-cover bg-center flex flex-col gap-8 items-center justify-end text-white text-center relative">
    <div>
      <div className="font-bold  text-6xl max-[600px]:text-3xl">Your Second Brain </div>
      <div className="font-bold  text-6xl max-[600px]:text-3xl">
        For &nbsp;
        <span className="text-[#3f3eed] text-6xl max-[600px]:text-3xl font-bold">Podcasts</span>
      </div>
    </div>
    <div className="text-center text-[#e3e3e3] font-normal">
      Transcribe, Summarise, and Distill Knowledge from Every Audio or
      Podcast.
    </div>
    <div className="flex gap-8 flex-wrap max-[340px]:justify-center">
      <button className="py-2 px-8 bg-[#3f3eed] rounded-[25px] justify-center items-center">
        Get Started
      </button>
      <button className="py-2 px-8 bg-[#d9d9d9]/5 border border-[#9796e9]/20 rounded-[25px] justify-center items-center">
        Learn More
      </button>
    </div>
    <div className="flex gap-10 items-center flex-wrap">
      <div className="text-right text-sm font-bold">
        10,000+ People make by Distill Audio
      </div>
      <div className="flex -space-x-4">
        {images.map((imgSrc, index) => (
          <img
            key={index}
            className="w-[46px] h-[46px] relative rounded-[35px] border-4 border-white/10 backdrop-blur-[5px]"
            src={imgSrc}
            alt={`Image ${index + 1}`}
            style={{ zIndex: images.length - index }}
          />
        ))}
      </div>
    </div>
    <img
      className="w-[55%] max-[1000px]:w-[90%] h-[315.63px] relative rounded-tl-[10px] rounded-tr-[10px] border-l border-r border-t border-[#9796e9]/50 backdrop-blur-[25px]"
      src="/fsbi.png"
    />
    <div className="bg-[#d9d9d9]/5 rounded-[40px] border border-[#9796e9]/20 backdrop-blur-[25px] flex justify-start items-center gap-2 p-1 pr-5 absolute right-[7vw] top-48 max-[900px]:hidden">
<img className="w-[42px] h-[42px] relative rounded-[25px]" src="/ri5.png" />
<div className="text-[#e3e3e3] text-sm font-bold">Transcribe</div>
</div>
<div className="bg-[#d9d9d9]/5 rounded-[40px] border border-[#9796e9]/20 backdrop-blur-[25px] flex justify-start items-center gap-2 p-1 pr-5 absolute left-[7vw] top-72 max-[900px]:hidden">
<img className="w-[42px] h-[42px] relative rounded-[25px]" src="/ri1.png" />
<div className="text-[#e3e3e3] text-sm font-bold">Podcast</div>
</div>
<div className="bg-[#d9d9d9]/5 rounded-[40px] border border-[#9796e9]/20 backdrop-blur-[25px] flex justify-start items-center gap-2 p-1 pr-5 absolute right-[11vw] top-[360px] max-[900px]:hidden">
<img className="w-[42px] h-[42px] relative rounded-[25px]" src="/ri3.png" />
<div className="text-[#e3e3e3] text-sm font-bold">Summarise</div>
</div>
<div className="bg-[#d9d9d9]/5 rounded-[40px] border border-[#9796e9]/20 backdrop-blur-[25px] flex justify-start items-center gap-2 p-1 pr-5 absolute left-[7vw] bottom-72 max-[900px]:hidden">
<img className="w-[42px] h-[42px] relative rounded-[25px]" src="/ri2.png" />
<div className="text-[#e3e3e3] text-sm font-bold">Audio</div>
</div>
  </div>
  )
}

export default HeroSection