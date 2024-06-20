export interface Product {
  name: string;
  stock: boolean;
  price: string;
  category: string;
}

// Define the props interface
export interface ProductRowProps {
  product: Product;
}

function ProductRow({ product }: ProductRowProps) {
  const style = product.stock
    ? "odd:bg-white even:bg-gray-50"
    : "odd:bg-red-50 even:bg-red-50";
  return (
    <tr className={style}>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-700">
        {product.name}
      </td>
      <td className="px-6 py-4 border-b border-gray-200 text-sm leading-5 text-gray-700">
        {product.price}
      </td>
    </tr>
  );
}

export default ProductRow;
