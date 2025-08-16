// services/getProductPagination.ts
import { api } from "../utls/axiosConfig";
import type { Product, ProductFilters } from "../types/interfaces";

const PAGE_SIZE = 12;

export async function getProductFilter(
  page: number,
  filters: ProductFilters,
  limit: number = PAGE_SIZE
) {
  const params = new URLSearchParams();

  // pagination
  params.set("limit", String(limit));
  params.set("offset", String((page - 1) * limit));

  // optional filters
  if (filters.minPrice != null) params.set("price_min", String(filters.minPrice));
  if (filters.maxPrice != null) params.set("price_max", String(filters.maxPrice));
  if (filters.category != null) params.set("categoryId", String(filters.category));
  if (filters.search && filters.search.trim() !== "") {
    params.set("title", filters.search.trim());
  }

  const url = `products/?${params.toString()}`;
  const res = await api.get<Product[]>(url);

  const items = res.data;
  const hasNext = items.length === limit;

  return { items, hasNext };
}
