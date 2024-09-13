"use client"; // Ensure this file is treated as a Client Component

import React, { useState, useCallback } from "react";
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

  // Handle filter change and call onFilter only when a filter is applied or removed
  const handleFilterChange = useCallback(
    (type: FilterType, value: string) => {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
        const currentValues = updatedFilters[type];

        if (currentValues.includes(value)) {
          // Remove the filter value if it's already included
          updatedFilters[type] = currentValues.filter((v) => v !== value);
        } else {
          // Add the filter value if it's not included
          updatedFilters[type] = [...currentValues, value];
        }

        // Call onFilter with the updated filters
        onFilter(updatedFilters);

        return updatedFilters;
      });
    },
    [onFilter]
  );

  return (
    <div className="h-screen overflow-y-auto shadow-xl pb-4 -ml-3.5 pl-8">
      <h2 className="text-xl font-semibold mb-4">Filter Courses</h2>

      {Object.entries(filterOptions).map(([filterType, options]) => (
        <div className="mb-6 ml-8" key={filterType}>
          <h3 className="font-semibold mb-2 capitalize">{filterType}</h3>
          <div className="space-y-2 px-2">
            {options.map((option) => (
              <label className="flex gap-3" key={option.value}>
                <input
                  className="size-4"
                  type="checkbox"
                  checked={filters[filterType as FilterType].includes(
                    option.value
                  )}
                  onChange={() =>
                    handleFilterChange(filterType as FilterType, option.value)
                  }
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseFilters;
