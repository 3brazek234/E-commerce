import { useMemo, useState } from "react";
import Filteration from "../../Components/ProductPage/Filteration";
import ProductResult from "../../Components/ProductPage/ProductResult";
import useProductPagination from "../../hooks/useProductPagination";
import type { Filters } from "../../types/interfaces";
import type { Product } from "../../types/interfaces";

const Product = () => {
  const [filters, setFilters] = useState<Filters>({
    minPrice: null,
    maxPrice: null,
    categories: [],
  });
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useProductPagination(page);
  const products = data?.products;
  const filteredProducts = useMemo(() => {
    return products?.filter((p: Product) => {
      if (filters.minPrice != null && p.price < filters.minPrice) return false;
      if (filters.maxPrice != null && p.price > filters.maxPrice) return false;
      if (
        filters.categories.length > 0 &&
        !filters.categories.includes(p.category)
      )
        return false;
      return true;
    });
  }, [data?.products, filters]);

  const handleFilterChange = (patch: Partial<Filters>) => {
    setFilters((prev) => ({ ...prev, ...patch }));
    setPage(1);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="border border-gray-200 p-4 rounded-lg col-span-2">
        <Filteration filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="col-span-3">
        <ProductResult
          onPageChange={setPage}
          products={filteredProducts || products || []}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Product;
