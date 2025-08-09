import axios from "axios"

export const getCategory = async () => {
    const response = await axios.get('https://fakestoreapi.in/api/products/category')
    console.log(response.data)
    return response.data
}