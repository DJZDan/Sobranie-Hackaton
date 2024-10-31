import React from 'react';

const ContinueSearch = ({ searchText, setSearchText, filters, handleSearch }) => {
  const handleClear = () => setSearchText('');

  const filterLabels = Object.entries(filters).map(([key, value]) => {
    if (key === 'yearRange') {
      return {
        label: value[0] && value[1] ? `${value[0]}-${value[1]}` : '',
        key,
      };
    }
    return { label: value, key };
  }).filter(filter => filter.label);

  return (
    <div className="flex flex-col space-y-4 w-full">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-300 rounded-xl">
        <input
          type="text"
          placeholder="Пребарај закон"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="flex-grow p-2 bg-gray-300 rounded-l-xl outline-none placeholder-gray-600 text-gray-900"
        />
        <button
          onClick={handleClear}
          className="px-4 text-gray-600 hover:text-gray-800 border-l-2 border-black"
        >
          Избриши
        </button>
        <button
          onClick={handleSearch}
          className="bg-red-800 text-white px-4 py-2 rounded-r-xl hover:bg-red-700"
        >
          Пребарај
        </button>
      </div>

      {/* Selected Filters */}
      <div className="flex space-x-2">
        {filterLabels.map((filter) => (
          <div
            key={filter.key}
            className="flex items-center px-3 py-2 bg-red-800 border border-gray-400 rounded-full text-white text-sm"
          >
            {filter.label}
            <button
              onClick={() => handleClearFilter(filter.key)}
              className="ml-2 hover:text-gray-800 focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueSearch;
