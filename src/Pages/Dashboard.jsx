import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import FileUpload from "../Components/FileUpload";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const App = () => {
  const navigate = useNavigate();
  const [isUploadVoice, setIsUploadVoice] = useState(true);
  const [chats, setChats] = useState([
    { name: "Chat with John" },
    { name: "Project Discussion" },
    { name: "AI Bot Conversation" },
    { name: "Customer Support" },
  ]);
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0); // State for upload progress
  const [uploadedFileName, setUploadedFileName] = useState("audio.mp3"); // State for file name

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    setUploadedFileName(uploadedFile.name);
    const url = URL.createObjectURL(uploadedFile);
    localStorage.setItem("audio-url", url);
  };

  const handleAudioGenerate = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    console.log(file);
    // localStorage.setItem('voice',file);

    try {
      const response = await axios.post(
        "http://51.20.108.234/audio_transcript",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentage = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentage);
          },
        }
      );
      localStorage.setItem("transcript", response.data.transcript_text);
      navigate("/results");
      // console.log("Transcript:", response.data);
    } catch (error) {
      console.error("Error generating transcription:", error);
      alert("An error occurred while generating the transcription.");
    }
  };

  const handleVideoGenerate = async () => {
    if (!url) {
      alert("Please paste a URL first.");
      return;
    }

    const formData = new FormData();
    formData.append("video_url", url); // Assuming your backend expects a field named 'url'

    try {
      const response = await axios.post(
        "http://51.20.108.234/transcript", // Update the URL if needed
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
console.log(response.data);
      // Store the response data (like transcript text) if needed
      localStorage.setItem("transcript", response.data.transcript_text);
      navigate("/results");
    } catch (error) {
      console.error("Error generating transcript:", error);
      alert("An error occurred while generating the transcript.");
    }
  };

  const handleSelectChat = (index) => {
    console.log(`Selected chat: ${chats[index].name}`);
  };

  const handleNewChat = () => {
    const newChat = { name: `New Chat ${chats.length + 1}` };
    setChats([...chats, newChat]);
  };

  const handleDeleteChat = (index) => {
    const updatedChats = chats.filter((_, i) => i !== index);
    setChats(updatedChats);
  };

  const handleToggle = () => {
    setIsUploadVoice(!isUploadVoice);
  };

  return (
    <div>
      <Navbar />
      <main className="flex">
        <Sidebar
          chats={chats}
          onSelectChat={handleSelectChat}
          onNewChat={handleNewChat}
          onDeleteChat={handleDeleteChat}
        />

        <main className="w-full mx-auto p-4 flex flex-col gap-4 font-space">
          <div className="flex flex-col bg-[#3F3EED] p-4 gap-4 rounded-lg">
            <div className="text-white text-4xl font-bold">
              Welcome to Distill Audio
            </div>
            <div className="text-white text-base font-normal">
              Upload your audio, get transcripts, and unlock key insights
              effortlessly.
            </div>
            <button className="py-2 bg-white rounded border border-[#9796e9]/10 backdrop-blur-[25px] justify-center items-center inline-flex w-[150px] text-[#3F3EED] font-semibold">
              Get Started
            </button>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="flex mb-4 p-2 font-semibold shadow-lg rounded-full">
              <button
                onClick={handleToggle}
                className={`px-4 py-2 rounded-full flex gap-2 items-center ${
                  isUploadVoice
                    ? "bg-[#3F3EED] text-white"
                    : "bg-white text-[#3F3EED]"
                }`}
              >
                {isUploadVoice ? (
                  <img src="/magic.svg" alt="" />
                ) : (
                  <img src="/magicB.svg" alt="" />
                )}
                Upload Voice
              </button>
              <button
                onClick={handleToggle}
                className={`px-4 py-2 w-[127.40px] rounded-full flex gap-2 items-center justify-center ${
                  !isUploadVoice
                    ? "bg-[#3F3EED] text-white"
                    : "bg-white text-[#3F3EED]"
                }`}
              >
                {!isUploadVoice ? (
                  <img src="/urlW.svg" alt="" />
                ) : (
                  <img src="/url.svg" alt="" />
                )}
                URL
              </button>
            </div>
          </div>

          {isUploadVoice ? (
            <div className="w-[80%] mx-auto flex flex-col gap-4">
              <FileUpload onFileUpload={handleFileUpload} />
              <div className="bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6">
                <div className="text-black text-base">
                  Automatic language detection
                </div>
                <img src="/dropdownarrow.svg" alt="▽" />
              </div>

              {/* Display file name and progress bar */}
              <div className="bg-gray-100 rounded-lg ">
                <div className="flex items-center justify-between py-2 px-6">
                  <div className="flex items-center gap-4">
                    <img src="/voice.svg" alt="V" />
                    <div className="text-black text-base">
                      {uploadedFileName}
                    </div>
                  </div>
                  <img src="/close.svg" alt="x" onClick={() => setFile(null)} />
                </div>
                {/* {file && ( */}
                <div className="w-[95%] bg-gray-200 rounded-full h-2.5 my-2 mx-auto relative">
                  <div
                    className="bg-[#3F3EED] h-2.5 rounded-full absolute z-10"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                {/* )} */}
              </div>

              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => {
                    window.location.reload();
                    localStorage.removeItem("transcript");
                    localStorage.removeItem("audio-url");
                  }}
                  className="bg-gray-200 text-[#667091] border border-[#e2e2fd] px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAudioGenerate}
                  className="bg-[#3F3EED] text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <img src="/magic.svg" alt="m" />
                  Generate
                </button>
              </div>
            </div>
          ) : (
            // <div className="w-[80%] mx-auto flex flex-col gap-4">
            //   <div className="bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6">
            //     <div className="text-black text-base">
            //       Automatic language detection
            //     </div>
            //     <img src="/dropdownarrow.svg" alt="▽" />
            //   </div>
            //   <div className="flex flex-wrap w-full gap-4">
            //     <input
            //       type="text"
            //       placeholder="Paste your URL here.."
            //       className="border rounded-lg p-2 flex-1"
            //     />
            //     <button
            //       onClick={() => navigate("/results")}
            //       className="bg-[#3F3EED] text-white px-4 py-2 rounded-lg flex items-center gap-2"
            //     >
            //       <img src="/magic.svg" alt="m" />
            //       Generate
            //     </button>
            //   </div>
            // </div>
            <div className="w-[80%] mx-auto flex flex-col gap-4">
            <div className="bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6">
              <div className="text-black text-base">
                Automatic language detection
              </div>
              <img src="/dropdownarrow.svg" alt="▽" />
            </div>
            <div className="flex flex-wrap w-full gap-4">
              <input
                type="text"
                placeholder="Paste your URL here.."
                className="border rounded-lg p-2 flex-1"
                value={url} // Bind input value to state
                onChange={(e) => setUrl(e.target.value)} // Update state on change
              />
              <button
                onClick={handleVideoGenerate} // Call your new function on button click
                className="bg-[#3F3EED] text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <img src="/magic.svg" alt="m" />
                Generate
              </button>
            </div>
          </div>
          )}
        </main>
      </main>
    </div>
  );
};

export default App;
