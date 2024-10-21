// import React, { useState } from 'react';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <div className="">
//       <h2 className="text-xl font-semibold mb-4">Add new files</h2>
//       <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg mb-4 text-center">
//         <input type="file" onChange={handleFileChange} className="hidden" id="fileUpload" />
//         <label htmlFor="fileUpload" className="cursor-pointer">
//           {file ? <span>{file.name}</span> :
//           // <div className='font-semibold'>Drag & Drop or Choose file to upload</div>
//           <div className="flex-col justify-start items-center gap-4 flex p-4">
//             <img src="/PaperUpload.svg" alt="UP" />
//           <div className="text-[#11142d] text-sm font-bold">
//             Drag & Drop or choose file to upload
//           </div>
//           <div className="text-[#557593] text-sm font-normal">
//             Select zip, image, pdf, or ms.word
//           </div>
//         </div>
//           }
//         </label>
//       </div>
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState } from "react";

const FileUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    onFileUpload(uploadedFile); // Pass the file to the parent component
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Add new files</h2>
      <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg mb-4 text-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="fileUpload"
        />
        <label htmlFor="fileUpload" className="cursor-pointer">
          {file ? (
            <span>{file.name}</span>
          ) : (
            <div className="flex-col justify-start items-center gap-4 flex p-4">
              <img src="/PaperUpload.svg" alt="UP" />
              <div className="text-[#11142d] text-sm font-bold">
                Drag & Drop or choose file to upload
              </div>
              <div className="text-[#557593] text-sm font-normal">
                Select zip, image, pdf, or ms.word
              </div>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
