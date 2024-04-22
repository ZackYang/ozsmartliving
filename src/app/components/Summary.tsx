import { LineItem } from "@/lib/types/LineItem";
import CurtainTypePanel from "./CurtainTypePanel";
import OzSmartImage from "./OzSmartImage";
import _ from 'lodash';
import { useEffect, useState } from "react";
import { Product } from "@/lib/types/Product";
import { Variant } from "@/lib/types/Variant";
import DividingLine from "./sharedComponents/DividingLine";

function VariantDisplay({
  productName,
  lineItem,
  product,
  variant,
}: {
  productName?: string,
  lineItem?: LineItem | null,
  product?: Product | null,
  variant?: Variant | null
}) {
  return (
    lineItem && product && variant &&
    <div className="flex flex-col">
      <DividingLine />
      <div>
        <span className="text-md font-bold">
          {productName}
        </span>
      </div>
      <div className="w-full flex justify-between">
        <OzSmartImage src={variant.coverImage} alt={variant.name || ""} width={60} height={60} crop='scale' className='rounded-md' />
        <div className="basis-4/5 flex flex-col">
          <div className="flex justify-end">
            <span>
              {_.startCase(product.type)}
            </span>
          </div>
          <div className="flex justify-end">
            <span className="font-bold text-sm">{product.name}</span> / <span className="text-gray-700 text-sm">{_.startCase(variant.name)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Summary(
  {
    lineItem
  }: {
    lineItem: LineItem
  }

) {
  const [scrolledTop, setScrolledTop] = useState(false)

  // bind the scroll event to the window
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        setScrolledTop(true)
      } else {
        setScrolledTop(false)
      }
    })
  }, [])

  return (
    <div className={`sticky top-0 flex flex-row px-12 py-3 bg-white shadow-md h-dvh`}>
      <div className="w-full">
        {
          lineItem.productType &&
          <div className="flex flex-col">
            <div className="flex text-xl p-1 justify-center mt-0 mb-0 font-semibold text-gray-600">
              {_.upperCase(lineItem.productType?.name)}
            </div>
          </div>
        }

        <VariantDisplay
          productName={`Product One`}
          lineItem={lineItem}
          product={lineItem.productOne}
          variant={lineItem.variantOne}
        />

        {
          lineItem.variantTwo && lineItem.productTwo && (
            <VariantDisplay
              productName={`Product Two`}
              lineItem={lineItem}
              product={lineItem.productTwo}
              variant={lineItem.variantTwo}
            />
          )
        }
        {
          lineItem.roomName &&
          <div className="flex flex-col">
            <DividingLine />
            <div className="flex flex-row text-sm justify-between">
              <div className="font-semibold">ROOM: </div>
              <div>{lineItem.roomName}</div>
            </div>
          </div>
        }
        <DividingLine />
        {
          <div className="flex flex-col">

            <div className="flex flex-row text-sm justify-between">
              <div>WIDTH: </div>
              <div>{lineItem.width} mm</div>
            </div>
            <DividingLine />
          </div>
        }
        {
          <div className="flex flex-col">

            <div className="flex flex-row text-sm justify-between">
              <div>HEIGHT: </div>
              <div>{lineItem.height} mm</div>
            </div>
            <DividingLine />
          </div>
        }
        {
          lineItem.curtainStackType &&
          <div className="flex flex-col">
            <div className="flex flex-row text-sm justify-between">
              <div className="font-semibold">STACK:</div>
              <div>{_.startCase(lineItem.curtainStackType?.name)}</div>
            </div>
            <DividingLine />
          </div>
        }
        {
          lineItem.curtainFittingType &&
          <div className="flex flex-col">
            <div className="flex flex-row text-sm justify-between">
              <div className="font-semibold">FITTING:</div>
              <div>{_.startCase(lineItem.curtainFittingType?.name)}</div>
            </div>
            <DividingLine />
          </div>
        }
        {
          lineItem.curtainHeadType &&
          <div className="flex flex-col">
            <div className="flex flex-row text-sm justify-between">
              <div className="font-semibold">HEAD:</div>
              <div>{_.startCase(lineItem.curtainHeadType?.name)}</div>
            </div>
            <DividingLine />
          </div>
        }
        {
          lineItem.curtainFinishType &&
          <div className="flex flex-col">
            <div className="flex flex-row text-sm justify-between">
              <div className="font-semibold">FINISH:</div>
              <div>{_.startCase(lineItem.curtainFinishType?.name)}</div>
            </div>
            <DividingLine />
          </div>
        }
        {
          lineItem.curtainTrackType &&
          <div className="flex flex-col">
            <div className="flex flex-row text-sm justify-between">
              <div className="font-semibold">TRACK:</div>
              <div>{_.startCase(lineItem.curtainTrackType?.name)}</div>
            </div>
            <DividingLine />
          </div>
        }
        {
          lineItem.curtainHem &&
          <div className="flex flex-col">
            <div className="flex flex-row text-sm justify-between">
              <div className="font-semibold">HEM:</div>
              <div>{_.startCase(lineItem.curtainHem)}</div>
            </div>
            <DividingLine />
          </div>
        }
        {
          lineItem.quantity &&
          <div className="flex flex-col">
            <div className="">
              Quantity: {lineItem.quantity}
            </div>
          </div>
        }
        {
          lineItem.price &&
          <div className="flex flex-col">
            <div className="">
              Price: ${lineItem.price}
            </div>
          </div>
        }
        {
          lineItem.totalPrice &&
          <div className="flex flex-col">
            <div className="">
              Total Price: ${lineItem.totalPrice}
            </div>
          </div>
        }
      </div>

    </div>
  )
}