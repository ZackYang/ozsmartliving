import { LineItem } from "@/lib/types/LineItem";
import CurtainTypePanel from "./CurtainTypePanel";
import OzSmartImage from "./OzSmartImage";
import _ from 'lodash';

function renderProductType(
  lineItem: LineItem
) {
  return lineItem.productType && (
    <OzSmartImage
      src={lineItem.productType.src}
      alt={lineItem.productType.name}
      width={100}
      height={100}
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
    <div className="p-12 bg-white shadow-md w-full h-[100vh]">
      {
        lineItem.productType &&
        <div className="flex flex-col">
          <div className="text-2xl text-purple-600 p-2">
            {lineItem.productType?.name}
          </div>
          <hr className="h-px my-0 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

      }
      {
        lineItem.variantOne &&
        <div className="flex flex-col">
          <div className="text-lg">
            {_.startCase(lineItem.productOne?.type)} - <span className="font-bold">{lineItem.productOne?.name}</span> /
            <span className="text-gray-500">{lineItem.variantOne?.name}</span>
          </div>
          <div className="text-lg font-bold justify-center">
            <OzSmartImage src={lineItem.variantOne?.coverImage} alt={lineItem.variantOne?.name || ""} width={100} height={100} crop='scale' className='object-contain' />
          </div>
        </div>
      }
      {
        lineItem.variantTwo &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            {_.startCase(lineItem.productTwo?.type)} - {lineItem.productTwo?.name} /
            <span className="text-gray-500">{lineItem.variantTwo?.name}</span>
          </div>
          <div className="text-lg font-bold">
            <OzSmartImage src={lineItem.variantTwo?.coverImage} alt={lineItem.variantTwo?.name || ""} width={100} height={100} crop='scale' className='object-contain' />
          </div>
        </div>
      }
      {
        lineItem.width &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Width: {lineItem.width}cm
          </div>
        </div>
      }
      {
        lineItem.height &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Height: {lineItem.height}cm
          </div>
        </div>
      }
      {
        lineItem.curtainStackTypeKey &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Stack: {_.startCase(lineItem.curtainStackTypeKey)}
          </div>
        </div>
      }
      {
        lineItem.curtainFittingTypeKey &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Fitting: {_.startCase(lineItem.curtainFittingTypeKey)}
          </div>
        </div>
      }
      {
        lineItem.curtainHeadTypeKey &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Heading: {_.startCase(lineItem.curtainHeadTypeKey)}
          </div>
        </div>
      }
      {
        lineItem.curtainFinishTypeKey &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Finish: {_.startCase(lineItem.curtainFinishTypeKey)}
          </div>
        </div>
      }
      {
        lineItem.curtainTrackTypeKey &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Track: {_.startCase(lineItem.curtainTrackTypeKey)}
          </div>
        </div>
      }
      {
        lineItem.curtainHem &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Hem: {_.startCase(lineItem.curtainHem)}
          </div>
        </div>
      }
      {
        lineItem.quantity &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Quantity: {lineItem.quantity}
          </div>
        </div>
      }
      {
        lineItem.price &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Price: ${lineItem.price}
          </div>
        </div>
      }
      {
        lineItem.totalPrice &&
        <div className="flex flex-col">
          <div className="text-lg font-bold">
            Total Price: ${lineItem.totalPrice}
          </div>
        </div>
      }
    </div>
  )
}