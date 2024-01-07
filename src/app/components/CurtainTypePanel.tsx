import { ProductType } from "@/lib/types/ProductType";
import Image from "next/image";
import { PiCheckCircleFill, PiDotFill } from "react-icons/pi";
import OzSmartImage from "./OzSmartImage";

export default function CurtainTypePanel(
  {
    productType,
    selectedProductType,
    setSelectedProductType,
    updateAttribute
  }: {
    productType: ProductType,
    selectedProductType?: ProductType | null,
    setSelectedProductType?: (productType: ProductType) => void,
    updateAttribute?: (attribute: string, value: any) => void
  }
): JSX.Element {
  function canBeSelected() {
    return !!updateAttribute
  }

  const cardClassName = `basis-full m-1 bg-white rounded border-2 transition duration-200 ease-in-out group p-3 ${canBeSelected() && 'hover:border-teal-500 hover:cursor-pointer'}`

  return (
    <div key={productType.type} className=''>
      <div
        className={`${selectedProductType?.type === productType.type ? 'border-teal-500' : 'border-white'} ${cardClassName}`}
        onClick={() => { setSelectedProductType && setSelectedProductType(productType); updateAttribute && updateAttribute('productType', productType) }}
      >
        <div className='flex flex-row w-full justify-center'>
          <OzSmartImage src={productType.src} alt={productType.name} className="grayscale-[75%] rounded inline-block w-full max-w-xs" width={500} height={500} />
        </div>
        <h5 className="text-center text-base md:text-xl font-bold tracking-tight py-4">
          {productType.name}
          {canBeSelected() &&
            <div className="text-sm text-gray-700 dark:text-gray-400">
              from $ <span className="text-teal-600">{productType.priceFrom}</span>
            </div>
          }
        </h5>
        {canBeSelected() &&
          <>
            <div className="flex flex-row w-full justify-center">
              <ul className="font-normal text-gray-700 dark:text-gray-400">
                {
                  (productType.description as string[]).map((feature) => {
                    return (
                      <li className="text-[0.5rem] md:text-[0.75rem] flex items-center py-0 pl-2" key={feature}>
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

            <div className="flex flex-row w-full justify-end">
              <div className={`${selectedProductType?.type === productType.type ? 'opacity-100' : 'opacity-0'}  drop-shadow-md inline-block -bottom-3 -right-3 text-5xl text-teal-500`} >
                <PiCheckCircleFill />
              </div>
            </div>
          </>
        }
      </div>
    </div >
  )
}