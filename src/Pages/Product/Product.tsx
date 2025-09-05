// pages/Product/index.tsx
import { useState } from "react";
import Filteration from "../../Components/ProductPage/Filteration";
import ProductResult from "../../Components/ProductPage/ProductResult";
import useProductFilter from "../../hooks/useProductFilter";
import type { ProductFilters } from "../../types/interfaces";

const Product = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<ProductFilters>({});

  const { data, isLoading, error } = useProductFilter(page, filters);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="border border-gray-200 p-4 rounded-lg col-span-2">
        <Filteration
          value={filters}
          onChange={(patch) => {
            setFilters((prev) => ({ ...prev, ...patch }));
            setPage(1);
          }}
          onClear={() => {
            setFilters({});
            setPage(1);
          }}
        />
      </div>

      <div className="col-span-3">
        <ProductResult
          products={data?.items || []}
          isLoading={isLoading}
          error={error}
          page={page}
          hasNext={!!data?.hasNext}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default Product;
