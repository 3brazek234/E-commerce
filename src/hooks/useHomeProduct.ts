import { useQuery } from "@tanstack/react-query";
import getHomeProduct from "../services/getHomeProduct";

const useHomeProduct = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['home-product'],
    queryFn: getHomeProduct,
  });

  return { data, isLoading, isError };
};

export default useHomeProduct;
