import type { ApiResponse, Product } from "../types/interfaces";
import { api } from "../utls/axiosConfig";

const getRelatedProducts = async (category: number): Promise<Product[]> => {
  const response = await api.get(`/products/?categoryId=${category}`);
  console.log(response.data);
  return response.data;
};
export default getRelatedProducts;
