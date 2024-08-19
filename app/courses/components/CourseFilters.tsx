// /components/CourseFilters.tsx
import React, { useState } from "react";
import { filterOptions } from "@/app/data/filterData";

type FilterType = "level" | "category" | "tags";

type CourseFilterProps = {
  onFilter: (filters: { [key: string]: string[] }) => void;
};

const CourseFilters: React.FC<CourseFilterProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<{ [key in FilterType]: string[] }>({
    level: [],
    category: [],
    tags: [],
  });

  const handleFilterChange = (type: FilterType, value: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[type].includes(value)) {
        updatedFilters[type] = updatedFilters[type].filter((v) => v !== value);
      } else {
        updatedFilters[type].push(value);
      }
      onFilter(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="h-max shadow-xl pb-4 -ml-3.5 pl-8">
      <h2 className="text-xl font-semibold mb-4 ">Filter Courses</h2>

      {Object.entries(filterOptions).map(([filterType, options]) => (
        <div className="mb-6 ml-8" key={filterType}>
          <h3 className="font-semibold mb-2 capitalize ">{filterType}</h3>
          <div className="space-y-2 px-2">
            {options.map((option) => (
              <label className="flex gap-3" key={option}>
                <input
                  className="size-4"
                  type="checkbox"
                  checked={filters[filterType as FilterType].includes(option)}
                  onChange={() =>
                    handleFilterChange(filterType as FilterType, option)
                    
                  }
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseFilters;
