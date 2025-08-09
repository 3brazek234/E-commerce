import { useQuery } from "@tanstack/react-query"
import getSingleProduct from "../services/getSingleProduct"

const useSingleProduct = (id: string) => {
    const {data, isLoading, error} = useQuery({
        queryKey: ['single-product', id],
        queryFn: () => getSingleProduct(id),
    })
    return {data, isLoading, error}
}
export default useSingleProduct