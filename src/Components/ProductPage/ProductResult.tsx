import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import type { Product } from "../../types/interfaces";
import ProductCard from "../Home/Product/ProductCard";
import { ImSpinner2 } from "react-icons/im";

const ProductResult = ({
  onPageChange,
  products = [],
  isLoading,
  error,
}: {
  onPageChange: (page: number) => void;
  products: Product[];
  isLoading: boolean;
  error: any;
}) => {
  console.log(products);
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen gap-2">
          <ImSpinner2 className="animate-spin" />
          <p>Loading Products...</p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-screen">
          Error: {error.message}
        </div>
      ) : (
        <div className="p-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <Stack spacing={2}>
        <Pagination
          count={10}
          shape="rounded"
          onChange={(e, value) => onPageChange(value)}
        />
      </Stack>
    </div>
  );
};

export default ProductResult;
