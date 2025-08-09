import { useQuery } from "@tanstack/react-query";
import getHomeProduct from "../services/getHomeProduct";
import type { ApiResponse } from "../types/interfaces";

const useHomeProduct = () => {
  const { data, isLoading, error } = useQuery<ApiResponse>({
    queryKey: ['home-product'],
    queryFn: getHomeProduct,
  });

  return { data, isLoading, error };
};

export default useHomeProduct;
