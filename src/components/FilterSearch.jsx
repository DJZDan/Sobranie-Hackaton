import React, { useState } from 'react';
import FilterPanel from '@/components/FilterPanel';
import ContinueSearch from '@/components/ContinueSearch';

const FilterSearch = () => {
  const [status, setStatus] = useState('Предложено');
  const [startYear, setStartYear] = useState('2021');
  const [endYear, setEndYear] = useState('2023');
  const [jurisdiction, setJurisdiction] = useState('Федерален закон');
  const [timeFrame, setTimeFrame] = useState('Најново');
  const [searchText, setSearchText] = useState('');

  // Combine the year range into a single string for display
  const yearRange = `${startYear}-${endYear}`;

  const filters = {
    status,
    year: yearRange,
    jurisdiction,
    timeFrame,
  };

  const updateFilter = (key, value) => {
    if (key === 'status') setStatus(value);
    else if (key === 'startYear') setStartYear(value);
    else if (key === 'endYear') setEndYear(value);
    else if (key === 'jurisdiction') setJurisdiction(value);
    else if (key === 'timeFrame') setTimeFrame(value);
  };

  const handleSearch = () => {
    console.log('Searching with:', { searchText, ...filters });
  };

  return (
    <div className="">
      {/* Search Section */}
      <ContinueSearch
        searchText={searchText}
        setSearchText={setSearchText}
        filters={filters}
        handleSearch={handleSearch}
      />
      <div className='w-full m-auto border-[1px] border-black my-8'></div>
      {/* Filter Panel */}
      <div className='w-full mt-12'>
        <FilterPanel 
          filters={filters} 
          updateFilter={updateFilter} 
          startYear={startYear} 
          endYear={endYear} 
          setStartYear={setStartYear} 
          setEndYear={setEndYear} 
        />
      </div>
    </div>
  );
};

export default FilterSearch;
