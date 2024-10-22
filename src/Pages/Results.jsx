import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import AudioPlayer from "../Components/AudioPlayer";
import axios from "axios";

const Results = () => {
  const [isSummary, setIsSummary] = useState(true);
  const [summarization, setSummarization] = useState("");
  const [dropdownStates, setDropdownStates] = useState({
    summary: false,
    highlights: false,
    headings: false,
    keyPoints: false,
    notes: false,
  });
  const [chats, setChats] = useState([
    { name: "Chat with John" },
    { name: "Project Discussion" },
    { name: "AI Bot Conversation" },
    { name: "Customer Support" },
  ]);
  // const audioFile = "/file_example_MP3_700KB.mp3";
  const audioFile = localStorage.getItem("audio-url");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.post("http://16.171.144.18/summarization", {
        transcript_text: localStorage.getItem("transcript"),
      });
      setSummarization(response.data);
      // console.log("Summarization", response.data);
    }
    fetchData();
  }, []);

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
    setIsSummary(!isSummary);
  };
  const handleDropdownToggle = (section) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      {/* Main Content */}
      <div className="">
        <Navbar />
        {/* Content Section */}
        <main className="flex">
          <Sidebar
            chats={chats}
            onSelectChat={handleSelectChat}
            onNewChat={handleNewChat}
            onDeleteChat={handleDeleteChat}
          />
          <main className="w-full mx-auto p-4 flex flex-col gap-4 font-space">
            <div className="flex flex-col items-center p-4">
              {/* Toggle Button */}
              <div className="flex mb-4 p-2 shadow-lg rounded-full">
                <button
                  onClick={handleToggle}
                  className={`px-4 py-2 rounded-full flex gap-2 items-center ${
                    isSummary
                      ? "bg-[#3F3EED] text-white"
                      : "bg-white text-[#3F3EED]"
                  }`}
                >
                  Summary
                </button>
                <button
                  onClick={handleToggle}
                  className={`px-4 py-2 w-[127.40px] rounded-full flex gap-2 items-center justify-center ${
                    !isSummary
                      ? "bg-[#3F3EED] text-white"
                      : "bg-white text-[#3F3EED]"
                  }`}
                >
                  Transcript
                </button>
              </div>
              <div className="w-[75%]">
                <AudioPlayer audioSrc={audioFile} />
              </div>
              {/* Conditional Input Fields */}
            </div>

            {isSummary ? (
              <div className="w-[85%] mx-auto text-sm">
                {/* Summary Dropdown */}
                <div
                  className="bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6 cursor-pointer"
                  onClick={() => handleDropdownToggle("summary")}
                >
                  <div className="text-[#3f3eed] text-base font-semibold">
                    Summary
                  </div>
                  <img
                    src="/dropdownarrow.svg"
                    alt="▽"
                    className={`transform select-none transition-transform ${
                      dropdownStates.summary ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {dropdownStates.summary && (
                  <div className="mt-4 px-6">
                    <div className="text-black text-base font-normal">
                      {summarization ? (
<>
<strong>{summarization?.Topic}</strong>
<p>{summarization?.Summarize}</p>
</>                      ) : (
                        <>
                          <strong>Martin Luther</strong>
                          <p>
                            Hey, everyone. Gary. Simon. Of course. So today
                            we're going to continue on with the theme that I've
                            been keeping up in the channel the last week or so
                            with UI design and prototyping tools overviews. All
                            right. So just last week we did Gravit designer and
                            also lunacy. And today we're going to take a look at
                            Figma. And I have to say Figma is the one tool that
                            I think most of you have requested more than any
                            other tool. So that's for good reason. It's 100%
                            free for an individual, and also it's 100% web
                            based. It also has prototyping in it, and it also
                            has a desktop version that you can use on multiple
                            operating systems, which is made possible through
                            electron. So I'm going to go ahead and walk you guys
                            through a quick kind of like a mobile UI design,
                            just to show as many features as possible, like in a
                            30 minute video so you can get a well-rounded
                            understanding of how this tool operates. And I have
                            to say, it's very similar to Adobe XD, except it's
                            free and even web based, so that's pretty freaking
                            awesome.
                          </p>
                          <strong>Dreams of American Nero</strong>
                          <p>
                            Hey, everyone. Gary. Simon. Of course. So today
                            we're going to continue on with the theme that I've
                            been keeping up in the channel the last week or so
                            with UI design and prototyping tools overviews. All
                            right. So just last week we did Gravit designer and
                            also lunacy. And today we're going to take a look at
                            Figma. And I have to say Figma is the one tool that
                            I think most of you have requested more than any
                            other tool. So that's for good reason. It's 100%
                            free for an individual, and also it's 100% web
                            based.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}
                {/* Highlights Dropdown */}
                <div
                  className="bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6 cursor-pointer mt-4"
                  onClick={() => handleDropdownToggle("highlights")}
                >
                  <div className="text-[#3f3eed] text-base font-semibold">
                    Highlights
                  </div>
                  <img
                    src="/dropdownarrow.svg"
                    alt="▽"
                    className={`transform transition-transform ${
                      dropdownStates.highlights ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {dropdownStates.highlights && (
                  <div className="mt-4 px-6">
                    <div className="text-black text-base font-normal">
                      <p>Highlight content goes here...</p>
                    </div>
                  </div>
                )}

                {/* Headings Dropdown */}
                <div
                  className="bg-gray-100 rounded-lg flex items-center justify-between py-2 cursor-pointer mt-4 px-6"
                  onClick={() => handleDropdownToggle("headings")}
                >
                  <div className="text-[#3f3eed] text-base font-semibold">
                    Headings
                  </div>
                  <img
                    src="/dropdownarrow.svg"
                    alt="▽"
                    className={`transform transition-transform ${
                      dropdownStates.headings ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {dropdownStates.headings && (
                  <div className="mt-4 px-6">
                    <div className="text-black text-base font-normal">
                      <p>Heading content goes here...</p>
                    </div>
                  </div>
                )}

                {/* Key Points Dropdown */}
                <div
                  className="bg-gray-100 rounded-lg flex items-center justify-between py-2 cursor-pointer mt-4 px-6"
                  onClick={() => handleDropdownToggle("keyPoints")}
                >
                  <div className="text-[#3f3eed] text-base font-semibold">
                    Key points
                  </div>
                  <img
                    src="/dropdownarrow.svg"
                    alt="▽"
                    className={`transform transition-transform ${
                      dropdownStates.keyPoints ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {dropdownStates.keyPoints && (
                  <div className="mt-4 px-6">
                    <div className="text-black text-base font-normal">
                      <p>Key points content goes here...</p>
                    </div>
                  </div>
                )}

                {/* Notes Dropdown */}
                <div
                  className="bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6 cursor-pointer mt-4 "
                  onClick={() => handleDropdownToggle("notes")}
                >
                  <div className="text-[#3f3eed] text-base font-semibold">
                    Notes
                  </div>
                  <img
                    src="/dropdownarrow.svg"
                    alt="▽"
                    className={`transform transition-transform ${
                      dropdownStates.notes ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {dropdownStates.notes && (
                  <div className="mt-4 px-6">
                    <div className="text-black text-base font-normal">
                      <p>Notes content goes here...</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-[85%] mx-auto flex flex-col items-center gap-2">
                {/* Content for Transcript */}
                {summarization ? (
                  <>
                    {/* <strong>{summarization?.Topic}</strong> */}
                    <p>{localStorage.getItem("transcript")}</p>
                  </>
                ) : (
                  <>
                    <div>
                      <strong>Martin Luther</strong>
                      <p>
                        Hey, everyone. Gary. Simon. Of course. So today we're
                        going to continue on with the theme that I've been
                        keeping up in the channel the last week or so with UI
                        design and prototyping tools overviews. All right. So
                        just last week we did Gravit designer and also lunacy.
                        And today we're going to take a look at Figma. And I
                        have to say Figma is the one tool that I think most of
                        you have requested more than any other tool. So that's
                        for good reason. It's 100% free for an individual, and
                        also it's 100% web based. It also has prototyping in it,
                        and it also has a desktop version that you can use on
                        multiple operating systems, which is made possible
                        through electron. So I'm going to go ahead and walk you
                        guys through a quick kind of like a mobile UI design,
                        just to show as many features as possible, like in a 30
                        minute video so you can get a well-rounded understanding
                        of how this tool operates. And I have to say, it's very
                        similar to Adobe XD, except it's free and even web
                        based, so that's pretty freaking awesome.
                      </p>
                    </div>
                    <div>
                      <strong>Dreams of American Nero</strong>
                      <p>
                        Hey, everyone. Gary. Simon. Of course. So today we're
                        going to continue on with the theme that I've been
                        keeping up in the channel the last week or so with UI
                        design and prototyping tools overviews. All right. So
                        just last week we did Gravit designer and also lunacy.
                        And today we're going to take a look at Figma. And I
                        have to say Figma is the one tool that I think most of
                        you have requested more than any other tool. So that's
                        for good reason. It's 100% free for an individual, and
                        also it's 100% web based.
                      </p>
                    </div>
                    <div>
                      <strong>Dreams of American Nero</strong>
                      <p>
                        Hey, everyone. Gary. Simon. Of course. So today we're
                        going to continue on with the theme that I've been
                        keeping up in the channel the last week or so with UI
                        design and prototyping tools overviews. All right. So
                        just last week we did Gravit designer and also lunacy.
                        And today we're going to take a look at Figma. And I
                        have to say Figma is the one tool that I think most of
                        you have requested more than any other tool. So that's
                        for good reason. It's 100% free for an individual, and
                        also it's 100% web based.
                      </p>
                    </div>
                    <div>
                      <strong>Dreams of American Nero</strong>
                      <p>
                        Hey, everyone. Gary. Simon. Of course. So today we're
                        going to continue on with the theme that I've been
                        keeping up in the channel the last week or so with UI
                        design and prototyping tools overviews. All right. So
                        just last week we did Gravit designer and also lunacy.
                        And today we're going to take a look at Figma. And I
                        have to say Figma is the one tool that I think most of
                        you have requested more than any other tool. So that's
                        for good reason. It's 100% free for an individual, and
                        also it's 100% web based.
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </main>
        </main>
      </div>
    </>
  );
};

export default Results;
