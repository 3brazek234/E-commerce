import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../services/getCategory"; 

export const useCategory = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory, 
  });

  return { data, isLoading, isError }; 
};