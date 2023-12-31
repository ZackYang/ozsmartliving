
import { PiCheckCircleFill, PiNumberCircleOneDuotone } from "react-icons/pi";
import { PiDotFill } from "react-icons/pi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from 'next/image';
import { useState } from 'react';
import { ProductType, productTypeList } from '@/lib/types/ProductType';
import CurtainTypePanel from "./CurtainTypePanel";

export default function CurtainTypeSelector({
  updateAttribute
}: {
  updateAttribute: (attribute: string, value: any) => void
}) {

  const [selectedProductType, setSelectedProductType] = useState<ProductType | null>(null)

  const renderProductTypes = () => {
    return productTypeList.map((productType) => {
      return (
        <CurtainTypePanel
          key={productType.type}
          productType={productType}
          selectedProductType={selectedProductType}
          setSelectedProductType={setSelectedProductType}
          updateAttribute={updateAttribute} />
      )
    })
  }

  return (
    <>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <div className="inline text-2xl sm:text-5xl text-teal-500">
            <PiNumberCircleOneDuotone />
          </div>
          <span className='text-sm sm:text-3xl inline'>
            Choose Curtain Type
          </span>
        </h5>
      </div >
      <div className='hidden lg:grid gap-1 lg:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-4'>
        {
          renderProductTypes()
        }
      </div>
      <div className="lg:hidden">
        <Carousel
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 2,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2,

            },
            tablet: {
              breakpoint: { max: 1024, min: 640 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 640, min: 0 },
              items: 2,
            },
          }}
          showDots={true}
          ssr={true}
          removeArrowOnDeviceType={["mobile"]}
          autoPlay={false}>
          {
            renderProductTypes()
          }
        </Carousel>
      </div>
    </>
  )
}