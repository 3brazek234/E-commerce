import { useQuery } from "@tanstack/react-query";
import type { ApiResponse } from "../types/interfaces";
import getRelatedProducts from "../services/getRelatedProducts ";

const useRelatedProducts = (category: string) => {
  const { data, isLoading, error } = useQuery<ApiResponse>({
    queryKey: ["relatedProducts", category],
    queryFn: () => getRelatedProducts(category),
  });
  return { data, isLoading, error };
};
export default useRelatedProducts;
