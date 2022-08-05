import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const search = () => {
    searchText(text);
  };
  return (
    <div className="flex justify-center items-center my-5">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className=" text-sm py-2 px-4 rounded-md outline-none bg-transparent border border-gray-300"
        placeholder="Search..."
      />
      <button
        type="submit"
        onClick={search}
        className="text-sm py-2 px-4 bg-blue-600  text-white rounded-d outline-none rounded-md ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default ImageSearch;
