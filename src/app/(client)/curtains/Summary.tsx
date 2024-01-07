import { LineItem } from "@/lib/types/LineItem";
import CurtainTypePanel from "../../components/CurtainTypePanel";
import OzSmartImage from "../../components/OzSmartImage";

function renderProductType(
  lineItem: LineItem
) {
  return lineItem.productType && (
    <OzSmartImage
      src={lineItem.productType.src}
      alt={lineItem.productType.type}
      width={200}
      height={200}
      crop='scale'
      className='object-contain' />
  )
}

export default function Summary(
  {
    lineItem
  }: {
    lineItem: LineItem
  }

) {
  return (
    <div className="md:fixed p-2 ">
      {renderProductType(lineItem)}
    </div>
  )
}