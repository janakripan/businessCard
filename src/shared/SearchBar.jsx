import { useState } from "react";
import { IoClose } from "react-icons/io5";

const SearchBar = ({ onSearch,setNoResults }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  const clearSearch = () => {
    setQuery("");
    onSearch(""); 
  };

  return (
    <div className="relative w-full md:w-6/12 lg:w-4/12 mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
      />
      {query && (
        <button
          onClick={clearSearch}
          
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <IoClose className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
