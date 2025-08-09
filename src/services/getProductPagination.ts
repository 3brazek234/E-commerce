import { api } from "../utls/axiosConfig"

export const getProductPagination = async ({page = 1, limit = 10}: {page: number, limit: number }) => {
const response = await api.get(`/products?page=${page}&limit=${limit}`)
    return response.data
}