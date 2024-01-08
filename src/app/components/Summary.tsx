import { LineItem } from "@/lib/types/LineItem";
import CurtainTypePanel from "./CurtainTypePanel";
import OzSmartImage from "./OzSmartImage";

function renderProductType(
  lineItem: LineItem
) {
  return lineItem.productType && (
    <OzSmartImage
      src={lineItem.productType.src}
      alt={lineItem.productType.name}
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
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text-lg font-bold">
            {lineItem.productType?.name}
          </div>
          <div className="text-lg font-bold">
            {lineItem.productType?.priceFrom}
          </div>
        </div>
        <div className="text-sm">
          {lineItem.productType?.description}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text-lg font-bold">
            {lineItem.productOne?.name}
          </div>
          <div className="text-lg font-bold">
            {lineItem.productOne?.unitPrice}
          </div>
        </div>
        <div className="text-sm">
          {lineItem.productOne?.description}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="text-lg font-bold">
            {lineItem.productTwo?.name}
          </div>
          <div className="text-lg font-bold">
            {lineItem.productTwo?.unitPrice}
          </div>
        </div>
        <div className="text-sm">
          {lineItem.productTwo?.description}
        </div>
      </div>
    </div>
  )
}