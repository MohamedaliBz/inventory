import OverallInventory from "./OverallInventory";
import ProductTable from "./ProductTable";

type Props = {};

export default function Inventory() {
  return (
    <div className='flex  items-center'>
      <OverallInventory />
    </div>
  );
}
