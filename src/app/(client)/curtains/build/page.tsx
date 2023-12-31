'use client';

import Prisma from "@/lib/prisma";
import CurtainTypeSelector from "../../components/CurtainTypeSelector";
import FabricSelector from "../../components/VariantSelector";
import { use, useEffect, useState } from "react";
import { LineItem } from "@/lib/types/LineItem";
import CurtainTypePanel from "../../components/CurtainTypePanel";
import { ProductTypeName } from "@/lib/types/ProductType";
import { getProductsByTypeName } from "@/lib/requests/Products";
import Summary from "./Summary";
import VariantSelector from "../../components/VariantSelector";
import { set } from "lodash";

// const getProducts = async () => {
//   const allUsers = await Prisma.product.findMany()
//   console.log(allUsers)
// }

export default function CurtainBuilder() {
  const [lineItem, setLineItem] = useState({} as LineItem)
  const [firstProductType, setFirstProductType] = useState<ProductTypeName | null>(null)
  const [secondProductType, setSecondProductType] = useState<ProductTypeName | null>(null)

  const updateAttribute = (attribute: string, value: any) => {
    setLineItem({ ...lineItem, [attribute]: value })
  }

  useEffect(() => {
    if (lineItem.productType)
      setProducts(lineItem.productType.type)
  }, [lineItem.productType])

  const setProducts = async (
    typeName: ProductTypeName
  ) => {
    setFirstProductType(null)
    setSecondProductType(null)

    if (typeName == ProductTypeName.DOUBLE_CURTAIN) {
      setFirstProductType(ProductTypeName.BLOCKOUT_CURTAIN)
      setSecondProductType(ProductTypeName.SHEER_CURTAIN)
    } else {
      setFirstProductType(typeName)
    }
  }


  return (

    <div className="grid grid-cols-5 justify-center ">
      <div className='col-span-5 md:col-span-3 xl:col-span-4 mini-h-[100dvh]'>
        <CurtainTypeSelector updateAttribute={updateAttribute} />
        {
          firstProductType &&
          <VariantSelector
            onSelected={() => { }}
            productType={firstProductType}
          />
        }
      </div>
      <div className='col-span-5 md:col-span-2 xl:col-span-1 mini-h-[100dvh]'>
        <Summary lineItem={lineItem} />
      </div>
    </div>
  );
}
