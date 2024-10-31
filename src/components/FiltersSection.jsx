import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FilterSearch from '@/components/FilterSearch';
import LawCard from "./LawCard";
const FiltersSection = () => {
  const router = useRouter();
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchTerm = router.query.query || "";

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/search?query=${searchTerm}&page=${page}`);
        if (!response.ok) {
          throw new Error("Failed to fetch results.");
        }
        const data = await response.json();
        setResults(data.results);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm, page]);

  const handleSearch = (newSearchTerm) => {
    router.push(`/search?query=${encodeURIComponent(newSearchTerm)}`);
    setPage(1);
  };

  return (
    <div>
      <h1 className="text-4xl text-center mb-10 mt-16">
        Резултати за "{searchTerm}"
      </h1>
      <div className="w-[90%] m-auto">
        <FilterSearch searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default FiltersSection;
