import { useQuery } from "@tanstack/react-query";
import getCountry from "../services/getCountry";

export const useGetCountries = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountry,
  });
  return { data, isLoading, isError };
};
