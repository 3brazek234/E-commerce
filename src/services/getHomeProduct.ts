import { api } from "../utls/axiosConfig"

const getHomeProduct = async ()=>{
    const response = await api.get('/products?offset=0&limit=20')
    return response.data
}
export default getHomeProduct
// https://api.escuelajs.co/api/v1/products?offset=0&limit=10