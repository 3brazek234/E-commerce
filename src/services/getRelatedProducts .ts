import type { ApiResponse } from "../types/interfaces";
import { api } from "../utls/axiosConfig";

const getRelatedProducts = async (category: string): Promise<ApiResponse[]> => {
  const response = await api.get(`/products/category?type=${category}`);
  console.log(response.data);
  return response.data;
};
export default getRelatedProducts;
