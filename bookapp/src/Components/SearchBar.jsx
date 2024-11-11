import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) onSearch(query);
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <input
        type="text"
        placeholder="Search by book title..."
        className="p-2 border border-gray-300 rounded-md focus:outline-none w-80 mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
