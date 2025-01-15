import React from "react";

function SearchBar({ city, setCity, handleSearch }) {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search Location"
        className="p-2 rounded-md border border-gray-300 focus:outline-none border-r-0 focus:ring-2 bg-transparent focus:ring-blue-600"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
