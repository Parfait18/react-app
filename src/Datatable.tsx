import { useState } from "react";
import "./App.css";
import Checkbox from "./components/forms/Checkbox";
import Input from "./components/forms/Input";
import { ProductCategoryRow } from "./components/product/ProductCategoryRow";
import ProductRow, { Product } from "./components/product/ProductRow";

const products: Product[] = [
  { category: "Fruits", name: "Apple", price: "$1", stock: true },
  { category: "Fruits", name: "Banana", price: "$0.5", stock: true },
  { category: "Fruits", name: "Orange", price: "$1.2", stock: true },
  { category: "Fruits", name: "Mango", price: "$1.5", stock: false },
  { category: "Fruits", name: "Strawberry", price: "$2", stock: true },
  { category: "Vegetables", name: "Carrot", price: "$0.8", stock: true },
  { category: "Vegetables", name: "Broccoli", price: "$1.3", stock: false },
  { category: "Vegetables", name: "Spinach", price: "$1", stock: true },
  { category: "Vegetables", name: "Potato", price: "$0.6", stock: true },
  { category: "Vegetables", name: "Tomato", price: "$1", stock: true },
  { category: "Dairy", name: "Milk", price: "$1.5", stock: true },
  { category: "Dairy", name: "Cheese", price: "$2.5", stock: true },
  { category: "Dairy", name: "Yogurt", price: "$1", stock: false },
  { category: "Dairy", name: "Butter", price: "$3", stock: true },
  { category: "Dairy", name: "Cream", price: "$1.8", stock: true },
  { category: "Bakery", name: "Bread", price: "$1", stock: true },
  { category: "Bakery", name: "Croissant", price: "$1.2", stock: true },
  { category: "Bakery", name: "Muffin", price: "$1.5", stock: false },
  { category: "Bakery", name: "Bagel", price: "$1", stock: true },
  { category: "Bakery", name: "Cake", price: "$3", stock: true },
];
function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");

  const visibleProducts = products.filter((product) => {
    if (search && !product.name.toLowerCase().includes(search)) {
      return false;
    }

    if (showStockedOnly && !product.stock) {
      return false;
    }

    return true;
  });

  return (
    <>
      <div className="p-4 space-y-2 w-96">
        <SearchBar
          search={search}
          onSearchChange={setSearch}
          showStockedOnly={showStockedOnly}
          onShowStockedOnlyChange={setShowStockedOnly}
        />
        <ProductTable products={visibleProducts} />
      </div>
    </>
  );
}
interface SearchBarInterface {
  search: string;
  onSearchChange: (e: string) => void;
  showStockedOnly: boolean;
  onShowStockedOnlyChange: (s: boolean) => void;
}
function SearchBar({
  search,
  onSearchChange,
  showStockedOnly,
  onShowStockedOnlyChange,
}: SearchBarInterface) {
  return (
    <div>
      <Input
        name={"serach"}
        label={"Search"}
        placeholder={"Search"}
        value={search}
        onChange={onSearchChange}
      />
      <Checkbox
        label={"Show only available products"}
        checked={showStockedOnly}
        id={"search"}
        onChange={onShowStockedOnlyChange}
      />
    </div>
  );
}

interface ProductTableInterface {
  products: Product[];
}

function ProductTable({ products }: ProductTableInterface) {
  const rows = [];
  let lastCategory = "";

  products.map((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow key={product.name} product={product} />);
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Product Name
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
              Price
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default App;
