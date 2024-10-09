import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/navbar';
import FileUpload from '../Components/FileUpload';

const App = () => {
  const [isUploadVoice, setIsUploadVoice] = useState(true);
  const [chats, setChats] = useState([
    { name: 'Chat with John' },
    { name: 'Project Discussion' },
    { name: 'AI Bot Conversation' },
    { name: 'Customer Support' },
  ]);

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
{/* Main Content */}
<div className="">
  <Navbar />

  {/* Content Section */}
  <main className=" flex">
<aside>
<Sidebar
        chats={chats}
        onSelectChat={handleSelectChat}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
      />
</aside>
<main className='w-full mx-auto p-4 flex flex-col gap-4 font-space'>
    <div className='flex flex-col bg-[#3F3EED] p-4 gap-4 rounded-lg'>
    <div className="text-white text-4xl font-bold">Welcome to Distill Audio</div>
    <div className="text-white text-base font-normal">Upload your audio, get transcripts, and unlock key insights effortlessly.</div>
    <button className="py-2 bg-white rounded border border-[#9796e9]/10 backdrop-blur-[25px] justify-center items-center inline-flex w-[15%] text-[#3F3EED] font-semibold">
   Get Started
    </button>
    </div>
    <div className="flex flex-col items-center p-4">
      {/* Toggle Button */}
      <div className="flex mb-4 p-2 font-semibold shadow-lg rounded-full">
        <button
          onClick={handleToggle}
          className={`px-4 py-2 rounded-full flex gap-2 items-center ${isUploadVoice ? 'bg-[#3F3EED] text-white' : 'bg-white text-[#3F3EED]'}`}
        >
         { isUploadVoice ? (

           <img src="/magic.svg" alt="" />
         ):(
          <img src="/magicB.svg" alt="" />

         )} 
          Upload Voice
        </button>
        <button
          onClick={handleToggle}
          className={`px-4 py-2 w-[127.40px] rounded-full flex gap-2 items-center justify-center ${!isUploadVoice ? 'bg-[#3F3EED] text-white' : 'bg-white text-[#3F3EED]'}`}
        >
        { !isUploadVoice ? (
          <img src="/urlW.svg" alt="" />
          ):(
          <img src="/url.svg" alt="" />
          )} 
          URL
        </button>
      </div>

    {/* Conditional Input Fields */}
    </div>
{ isUploadVoice ? (<div className='w-[80%] mx-auto flex flex-col gap-4'>
<FileUpload />  
    <div className='bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6'>
      <div className="text-black text-base">Automatic language detection</div>
      <img src="/dropdownarrow.svg" alt="▽" />
    </div>
    <div className='bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6'>
      <div className='flex items-center gap-4'>
        <img src="/voice.svg" alt="V" />
        <div className="text-black text-base">audio.mp3</div>
      </div>
      <img src="/close.svg" alt="x" />

    </div>
    <div className="flex items-center justify-end space-x-4">
      <button className="bg-gray-200 text-[#667091] border border-[#e2e2fd] px-4 py-2 rounded-lg">Cancel</button>
      <button className="bg-[#3F3EED] text-white px-4 py-2 rounded-lg flex items-center gap-2"><img src="/magic.svg" alt="m" />
        Generate</button>
    </div>
</div>  ):(
<div className='w-[80%] mx-auto flex flex-col gap-4'>
  <div className='bg-gray-100 rounded-lg flex items-center justify-between py-2 px-6'>
      <div className="text-black text-base">Automatic language detection</div>
      <img src="/dropdownarrow.svg" alt="▽" />
  </div>
  <div className='flex w-full gap-4'>
    <input type="text" placeholder='Paste your Url here..' className='border rounded-lg p-2 flex-1'/>
  <button className="bg-[#3F3EED] text-white px-4 py-2 rounded-lg flex items-center gap-2"><img src="/magic.svg" alt="m" />
  Generate</button>
  </div>
</div>
)} 
</main>
  </main>
</div>
    </div>
  );
};

export default App;