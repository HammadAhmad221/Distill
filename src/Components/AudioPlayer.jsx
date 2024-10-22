import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Format time helper function
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  // Play/pause functionality
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update the current time of the audio
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Set audio duration when it's loaded
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Seek functionality when clicking on the progress bar
  const handleSeek = (e) => {
    const progressBar = e.target;
    const width = progressBar.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    const newTime = (clickX / width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="w-full px-4 py-3 bg-white rounded-xl border border-[#3f3eed] flex flex-wrap items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <button className="w-5 h-5" onClick={togglePlayPause}>
          {/* Play and Pause Icons */}
          <FontAwesomeIcon
            icon={isPlaying ? faPause : faPlay}
            className="text-[#3f3eed]" // Icon color set to match the border
          />
        </button>
        <div className="text-center text-black text-sm md:text-base font-normal">
          {formatTime(currentTime)}
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="w-full max-w-[60%] h-[0px] flex-col justify-center items-start inline-flex"
        onClick={handleSeek}
      >
        <div className="w-full h-[0px] border border-[#e5e4ff]"></div>
        <div
          className="h-[0px] border-2 border-[#3f3eed]"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>

      <div className="flex items-center gap-[17px]">
        <div className="text-center text-black text-sm md:text-base font-normal">
          {formatTime(duration)}
        </div>
        <button className="w-5 h-5">
          <FontAwesomeIcon
            icon={faVolumeUp}
            className="text-[#3f3eed]" // Icon color set to match the border
          />
        </button>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default AudioPlayer;
