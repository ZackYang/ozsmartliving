import { ProductType, ProductTypeName, productTypeMap } from "@/lib/types/ProductType";
import { PiCheckCircleFill, PiDotFill } from "react-icons/pi";
import OzSmartImage from "./OzSmartImage";
import { useContext } from "react";
import lineItemContext from "./contexts/LineItemContext";

export default function CurtainTypePanel(
  {
    productType
  }: {
    productType: ProductType
  }
) {
  const { lineItem, setLineItem } = useContext(lineItemContext)

  const setProductTypes = (productType: ProductType) => {
    setLineItem((prev) => {
      return {
        ...prev,
        productType: productType,
      }
    })
  }

  const cardClassName = `basis-full m-1 bg-white rounded border-2 transition duration-200 ease-in-out group p-3 hover:border-teal-500 hover:cursor-pointer`

  return (
    <div key={productType.typeName} className=''>
      <div
        className={`${lineItem.productType?.typeName === productType.typeName ? 'border-teal-500' : 'border-white'} ${cardClassName}`}
        onClick={() => {
          setProductTypes(productType)
        }}
      >
        <div className='flex flex-row w-full justify-center'>
          <OzSmartImage src={productType.src} alt={productType.name} className="grayscale-[75%] rounded inline-block w-full max-w-xs" width={500} height={500} />
        </div>
        <h5 className="text-center text-base md:text-xl font-bold tracking-tight py-4">
          {productType.name}
          {
            <div className="text-sm text-gray-700 dark:text-gray-400">
              from $ <span className="text-teal-600">{productType.priceFrom}</span>
            </div>
          }
        </h5>

        <>
          <div className="flex flex-row w-full justify-center">
            <ul className="font-normal text-gray-700 dark:text-gray-400">
              {
                (productType.description as string[]).map((feature) => {
                  return (
                    <li className="text-[0.75rem] md:text-[0.85rem] flex items-center py-0 pl-2" key={feature}>
                      <div className="inline-block mr-1 text-teal-600">
                        <PiDotFill />
                      </div>

                      <span>{feature}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="flex flex-row w-full justify-end -mt-3">
            <div className={`${lineItem.productType?.typeName === productType.typeName ? 'opacity-100' : 'opacity-0'}  drop-shadow-md inline-block -bottom-3 -right-3 text-5xl text-teal-500`} >
              <PiCheckCircleFill />
            </div>
          </div>
        </>
      </div>
    </div >
  )
}