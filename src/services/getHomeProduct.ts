import { api } from "../utls/axiosConfig"
import type { ApiResponse } from "../types/interfaces"

const getHomeProduct = async (): Promise<ApiResponse>=>{
    const response = await api.get('/products?limit=20')
    return response.data
}
export default getHomeProduct