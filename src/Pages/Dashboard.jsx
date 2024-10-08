import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/navbar';
import FileUpload from '../Components/FileUpload';

const App = () => {
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
<main className='w-full mx-auto p-4'>
    <div className='flex flex-col bg-[#3F3EED] p-4 gap-3 rounded-lg'>
    <div className="text-white text-4xl font-bold">Welcome to Distill Audio</div>
    <div className="text-white text-base font-normal">Upload your audio, get transcripts, and unlock key insights effortlessly.</div>
    <button className="py-2 bg-white rounded border border-[#9796e9]/10 backdrop-blur-[25px] justify-center items-center inline-flex w-[20%]">
   Get Started
    </button>
    </div>
<div className='w-[80%] mx-auto'>
<FileUpload />  
</div>    
</main>
  </main>
</div>
    </div>
  );
};

export default App;