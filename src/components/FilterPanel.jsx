import React from 'react';

const FilterPanel = ({ filters, updateFilter, startYear, endYear, setStartYear, setEndYear }) => {
  const statusOptions = ['Предложено', 'Во очекување', 'Помнати', 'Одбиени', 'Во процедура'];
  const yearOptions = ['2021', '2022', '2023'];
  const jurisdictionOptions = ['Федерален закон', 'Државниот закон', 'Општински закон'];
  const timeFrameOptions = ['Најново', 'Во тренд денес', 'Оваа недела', 'Овој месец', 'Оваа година'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-64">
      <h2 className="text-xl font-bold mb-4">Филтрирај</h2>
      <div className='w-full m-auto border-[1px] border-black my-8'></div>
      {/* Status Filter */}
      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Законодавниот статус</label>
        {statusOptions.map((option) => (
          <button
            key={option}
            onClick={() => updateFilter('status', option)}
            className={`block text-left w-full px-4 py-2 ${
              filters.status === option ? 'bg-red-800 text-white' : 'text-gray-800'
            } hover:bg-red-600 rounded-md`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className='w-full m-auto border-[1px] border-black my-8'></div>
      {/* Year Range Filter */}
      <div className="mb-4">
        <h3 className="text-black font-medium mb-2">Филтрирај по година</h3>
        <div className="flex space-x-2">
          <select
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            className="p-2 text-sm bg-red-800 text-white rounded-md focus:outline-none"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <span className="text-sm flex items-center">до</span>
          <select
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            className="p-2 text-sm bg-red-800 text-white rounded-md focus:outline-none"
          >
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='w-full m-auto border-[1px] border-black my-8'></div>
      {/* Jurisdiction Filter */}
      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Надлежност</label>
        {jurisdictionOptions.map((option) => (
          <button
            key={option}
            onClick={() => updateFilter('jurisdiction', option)}
            className={`block text-left w-full px-4 py-2 ${
              filters.jurisdiction === option ? 'bg-red-800 text-white' : 'text-gray-800'
            } hover:bg-red-600 rounded-md`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className='w-full m-auto border-[1px] border-black my-8'></div>
      {/* Time Frame Filter */}
      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Временска рамка</label>
        {timeFrameOptions.map((option) => (
          <button
            key={option}
            onClick={() => updateFilter('timeFrame', option)}
            className={`block text-left w-full px-4 py-2 ${
              filters.timeFrame === option ? 'bg-red-800 text-white' : 'text-gray-800'
            } hover:bg-red-600 rounded-md`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
