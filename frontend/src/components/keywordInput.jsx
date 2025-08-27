import { SearchIcon } from "lucide-react";
import React from "react";

const KeywordInput = ({keyword, handleKeyword, handleSearch}) => {
  
  return (
    <div
      tabIndex={0}
      className="w-xs md:w-md max-w-2xl mx-auto mb-8 rounded-md bg-white flex items-center gap-2 my-2"
    >
      <input
        value={keyword}
        onChange={handleKeyword}
        placeholder="Enter your seed keyword..."
        type="text"
        className="md:pr-20 md:w-sm px-2 h-12 text-lg outline-none flex-1"
      />
      <button onClick={handleSearch} className="mx-2 bg-blue-500 text-white p-2 rounded-md md:translate-x-1 cursor-pointer active:bgb7">
        <SearchIcon />
      </button>
    </div>
  );
};

export default KeywordInput;
