import { useQuery } from "@tanstack/react-query";
import { getProductPagination } from "../services/getProductPagination";

const useProductPagination = (page: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["product-pagination", page],
    queryFn: () => getProductPagination({page, limit: 10}),
  });
  return { data, isLoading, error };
};
export default useProductPagination;
