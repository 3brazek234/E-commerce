import { FaChevronDown, FaFilter } from "react-icons/fa";
import { useCategory } from "../../hooks/useCategory";
import { Checkbox, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useState } from "react";
import type { Filters } from "../../types/interfaces";

type Props = {
  filters: Filters;
  onFilterChange: (patch: Partial<Filters>) => void;
};

const Filteration: React.FC<Props> = ({ filters, onFilterChange }) => {
  const { data } = useCategory();

  // مدخلات السعر كـ strings ثم نحول عند Apply
  const [priceRange, setPriceRange] = useState({
    min: filters.minPrice?.toString() ?? "",
    max: filters.maxPrice?.toString() ?? "",
  });

  const toggleCategory = (category: string) => {
    const exists = filters.categories.includes(category);
    const next = exists
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];

    onFilterChange({ categories: next });
  };

  const applyPrice = () => {
    const min =
      priceRange.min.trim() === "" ? null : Number(priceRange.min);
    const max =
      priceRange.max.trim() === "" ? null : Number(priceRange.max);

    // تحقق بسيط: لو min > max بدّلهم أو تجاهل
    if (min != null && max != null && min > max) {
      onFilterChange({ minPrice: max, maxPrice: min });
    } else {
      onFilterChange({ minPrice: min, maxPrice: max });
    }
  };

  const clearAll = () => {
    setPriceRange({ min: "", max: "" });
    onFilterChange({ minPrice: null, maxPrice: null, categories: [] });
  };

  return (
    <div className="flex flex-col gap-6 p-6 h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-y-scroll">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b-2 border-gradient-to-r from-purple-200 to-pink-200">
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Filters
        </h2>
        <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
          <FaFilter className="text-purple-600 text-sm" />
        </div>
      </div>

      {/* Categories */}
      <Accordion elevation={0} sx={{ "&:before": { display: "none" }, borderRadius: "12px !important", border: "1px solid #e5e7eb" }}>
        <AccordionSummary expandIcon={<FaChevronDown className="text-purple-600" />}>
          <Typography component="span" sx={{ fontWeight: 600, color: "#374151", fontSize: "1rem" }}>
            Categories
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "16px 20px" }}>
          <div className="space-y-3">
            {data?.categories?.map((category: string) => (
              <div key={category} className="flex items-center justify-between group hover:bg-purple-50 p-2 rounded-lg transition-all duration-200">
                <label className="flex items-center cursor-pointer flex-1">
                  <Checkbox
                    checked={filters.categories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    sx={{
                      color: "#9333ea",
                      "&.Mui-checked": { color: "#9333ea" },
                      "& .MuiSvgIcon-root": { fontSize: 20 },
                    }}
                  />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-200 ml-2">
                    {category}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Price Range */}
      <Accordion elevation={0} sx={{ "&:before": { display: "none" }, borderRadius: "12px !important", border: "1px solid #e5e7eb" }}>
        <AccordionSummary expandIcon={<FaChevronDown className="text-purple-600" />}>
          <Typography component="span" sx={{ fontWeight: 600, color: "#374151", fontSize: "1rem" }}>
            Price Range
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "16px 20px" }}>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-2">Min Price</label>
                <input
                  type="number"
                  placeholder="$0"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-2">Max Price</label>
                <input
                  type="number"
                  placeholder="$1000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 text-sm"
                />
              </div>
            </div>
            <button
              onClick={applyPrice}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-sm font-medium"
            >
              Apply Price Filter
            </button>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Clear All */}
      <button
        onClick={clearAll}
        className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg transition-all duration-200 text-sm font-medium border border-gray-300"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default Filteration;
