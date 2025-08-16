// hooks/useProductFilter.ts
import { useQuery } from "@tanstack/react-query";
import { getProductFilter } from "../services/getProductFilter";
import type { ProductFilters } from "../types/interfaces";

const PAGE_SIZE = 12;

export default function useProductFilter(page: number, filters: ProductFilters) {
  return useQuery({
    queryKey: ["products", page, filters],
    queryFn: () => getProductFilter(page, filters, PAGE_SIZE),
    staleTime: 60 * 1000,
  });
}
