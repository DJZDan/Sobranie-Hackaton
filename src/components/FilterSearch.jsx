import React, { useState, useEffect } from "react";
import FilterPanel from "@/components/FilterPanel";
import ContinueSearch from "@/components/ContinueSearch";
import LawCard from "@/components/LawCard";
const FilterSearch = () => {
  const [status, setStatus] = useState(""); // Initialize as empty
  const [startYear, setStartYear] = useState(""); // Initialize as empty
  const [endYear, setEndYear] = useState(""); // Initialize as empty
  const [jurisdiction, setJurisdiction] = useState(""); // Initialize as empty
  const [timeFrame, setTimeFrame] = useState(""); // Initialize as empty
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState([]); // State for storing results
  const [page, setPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1); // State for total number of pages

  const filters = {
    status,
    year: startYear && endYear ? `${startYear}-${endYear}` : "", // Show year only if both are set
    jurisdiction,
    timeFrame,
  };

  const updateFilter = (key, value) => {
    if (key === "status") setStatus(value);
    else if (key === "startYear") setStartYear(value);
    else if (key === "endYear") setEndYear(value);
    else if (key === "jurisdiction") setJurisdiction(value);
    else if (key === "timeFrame") setTimeFrame(value);
  };

  const handleSearch = async (currentPage = 1) => {
    console.log("Searching with:", {
      searchText,
      ...filters,
      page: currentPage,
    });

    // Fetch results from the API with page parameter
    const response = await fetch(
      `/api/search?query=${encodeURIComponent(searchText)}&page=${currentPage}`
    );
    const data = await response.json();

    setResults(data.results);
    setTotalPages(data.totalPages);
  };

  // Update results when filters, searchText, or page changes
  useEffect(() => {
    handleSearch(page);
  }, [status, startYear, endYear, jurisdiction, timeFrame, searchText, page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div className="">
      {/* Search Section */}
      <ContinueSearch
        searchText={searchText}
        setSearchText={setSearchText}
        filters={filters}
        handleSearch={() => handleSearch(1)} // Reset to page 1 on new search
        updateFilter={updateFilter}
      />
      <div className="w-full m-auto border-[1px] border-black my-8"></div>
      {/* Filter Panel */}
      <div className="mt-12 flex gap-8">
        <FilterPanel
          filters={filters}
          updateFilter={updateFilter}
          startYear={startYear}
          endYear={endYear}
          setStartYear={setStartYear}
          setEndYear={setEndYear}
        />
        <div className="mt-8 w-full">
          {results.length > 0 ? (
            results.map((result, index) => (
              <LawCard
                key={index}
                title={result.title}
                id={result.id}
                description={result.description}
                timePublished={result.timePublished}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4 w-full">
        <button
          disabled={page === 1}
          onClick={handlePreviousPage}
          className="px-4 py-2 bg-gray-200 text-black rounded mr-2"
        >
          Предходна
        </button>
        <span className="px-4 py-2">
          {page} од {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-200 text-black rounded ml-2"
        >
          Следна
        </button>
      </div>
    </div>
  );
};

export default FilterSearch;
