import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types/interfaces";
import getRelatedProducts from "../services/getRelatedProducts ";

const useRelatedProducts = (category: number) => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["relatedProducts", category],
    queryFn: () => getRelatedProducts(category),
  });
  return { data, isLoading, error };
};
export default useRelatedProducts;
