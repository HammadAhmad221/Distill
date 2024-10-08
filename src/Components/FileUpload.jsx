import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add new files</h2>
      <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg mb-4 text-center">
        <input type="file" onChange={handleFileChange} className="hidden" id="fileUpload" />
        <label htmlFor="fileUpload" className="cursor-pointer">
          {file ? <span>{file.name}</span> : <span>Drag & Drop or Choose file to upload</span>}
        </label>
      </div>

      <div className="flex justify-between items-center">
        <select className="border rounded-lg px-4 py-2">
          <option>Automatic language detection</option>
        </select>

        {file && (
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 px-4 py-2 rounded-lg">Cancel</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Generate</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
