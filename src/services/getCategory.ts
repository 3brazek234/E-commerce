import type { Category } from "../types/interfaces";
import { api } from "../utls/axiosConfig";

export const getCategory = async (): Promise<Category[]> => {
  const response = await api.get("categories");
  console.log(response.data);
  return response.data;
};
 