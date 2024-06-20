interface CategoryRowInterface {
  name: string;
}

export function ProductCategoryRow({ name }: CategoryRowInterface) {
  return (
    <tr className="font-bold odd:bg-blue-700 text-white text-center w-full rounded-sm  even:bg-blue-700">
      <td colSpan={2} className=" w-full p-2">
        {name}
      </td>
    </tr>
  );
}
