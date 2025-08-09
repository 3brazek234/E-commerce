import { api } from "../utls/axiosConfig"

const getSingleProduct = async (id: string) => {
    const response = await api.get(`/products/${id}`)
    return response.data
}
export default getSingleProduct