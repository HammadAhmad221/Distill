import React from 'react';
import { FaTrash,FaEllipsisH, FaComments, FaUserCircle, FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa';

const ChatSidebar = ({ chats, onSelectChat, onNewChat, onDeleteChat }) => {
  return (
    <aside className="w-96 flex flex-col border-r border-[#e5e4ff] max-[500px]:hidden">
      {/* Navigation Links */}
      <nav className="p-4 space-y-4">
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md bg-[#f7f7ff] border border-[#e5e4ff]">
          <FaHome className="text-lg" />
          <span>Home</span>
        </div>
        <hr className='text-[#e5e4ff]'/>
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <FaComments className="text-lg" />
          <span>AI Chat Bot</span>
        </div>
        </nav>
      {/* Saved Chats */}
      <div className="p-4 overflow-y-auto">
        <h3 className="text-gray-300 mb-2">Today</h3>
        {chats.map((chat, index) => (
          <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="flex items-center space-x-2" onClick={() => onSelectChat(index)}>
              {/* <FaComments /> */}
              <span>{chat.name}</span>
            </div>
            <FaEllipsisH onClick={() => onDeleteChat(index)} className="cursor-pointer" />
          </div>
        ))}
      </div>

        <nav>
        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-4 rounded-md">
          <FaCog className="text-lg" />
          <span>Settings</span>
        </div>
        {/* <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-700 p-2 rounded-md">
          <FaPlus className="text-lg" />
          <span onClick={onNewChat}>New Chat</span>
        </div> */}
      </nav>
      {/* Logout Button */}
      <div className="p-2 ">
        <button className="flex items-center space-x-2 w-full p-2 rounded-md hover:bg-gray-700">
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
      {/* User Section */}
<div className='p-4 flex flex-col items-center rounded-md border border-[#e5e4ff] bg-[#dbdbff] w-[85%] mx-auto gap-4'>
<div className="flex gap-4">
        <FaUserCircle className="text-4xl" />
        <div>
          <h2 className="font-semibold">Mack Gok &nbsp;<span className='bg-[#3F3EED] text-white font-space font-semibold rounded-lg p-1'>Free</span></h2>
          <p className="text-sm">openup@mail.com</p>
        </div>
      </div>
        <div className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md bg-[#f7f7ff] border border-[#e5e4ff] gap-2">
          {/* <FaHome className="text-lg" /> */}
          <img src="/crownblue.svg" alt="c" />
          <span className='text-[#3f3eed] font-space'>Upgrade to Pro</span>
          </div>
</div>
    </aside>
  );
};

export default ChatSidebar;

// import React from 'react';

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-white h-screen p-4 border-r">
//       <div className="text-xl font-bold mb-8">OPENUP</div>
//       <nav className="flex flex-col space-y-4">
//         <a href="#" className="text-blue-500">Home</a>
//         <a href="#" className="text-gray-500">Settings</a>
//         <a href="#" className="text-gray-500">Logout</a>
//       </nav>

//       <div className="flex flex-col items-center w-full">
//         <div className="flex items-center space-x-4">
//           <img src="/path-to-avatar.jpg" alt="User" className="w-10 h-10 rounded-full" />
//           <div>
//             <div className="font-semibold">Mack Gok</div>
//             <div className="text-gray-500 text-sm">Free Member</div>
//           </div>
//         </div>
//         <button className="bg-purple-500 text-white px-4 py-2 rounded mt-4">Upgrade to Pro</button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
