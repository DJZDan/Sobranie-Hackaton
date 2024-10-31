import React from "react";
import FilterSearch from '@/components/FilterSearch'
const FiltersSection = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mb-10 mt-16">
        Резултати за (Внесено во search bar)
      </h1>
      <div className="w-[90%] m-auto">
        <FilterSearch/>
      </div>
    </div>
  );
};

export default FiltersSection;
