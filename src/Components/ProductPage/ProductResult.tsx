// Components/ProductPage/ProductResult.tsx
import type { Product } from "../../types/interfaces";
import ProductCard from "../Home/Product/ProductCard";

type Props = {
  products: Product[];
  isLoading: boolean;
  error: unknown;
  page: number;
  hasNext: boolean;
  onPageChange: (p: number) => void;
};

const ProductResult: React.FC<Props> = ({
  products,
  isLoading,
  error,
  page,
  hasNext,
  onPageChange,
}) => {
  if (isLoading) return <div>Loading…</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="space-y-6 py-4">
      <div className="p-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
        >
          Prev
        </button>
        <span className="px-2">{page}</span>
        <button
          className="px-2 py-1 border rounded-xl disabled:opacity-50"
          onClick={() => onPageChange(page + 1)}
          disabled={!hasNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductResult;
