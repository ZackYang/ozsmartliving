'use client';

import CurtainTypeSelector from "../../components/CurtainTypeSelector";
import { use, useEffect, useState } from "react";
import { LineItem } from "@/lib/types/LineItem";
import { ProductTypeName } from "@/lib/types/ProductType";
import Summary from "./Summary";
import VariantSelector from "../../components/VariantSelector";
import { PiNumberCircleOneDuotone } from "react-icons/pi";
import SelectorHeader from "@/app/components/SelectorHeader";

export default function DesignerCurtainBuilder() {
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
        <SelectorHeader order={1} label='Choose your curtain type' />
        <CurtainTypeSelector updateAttribute={updateAttribute} />
        {
          firstProductType &&
          <SelectorHeader order={2} label={`Choose your ${firstProductType && secondProductType ? "fabrics" : "fabric"}`} />
        }
        {
          firstProductType &&
          <VariantSelector
            onSelected={() => { }}
            productType={firstProductType}
          />
        }
        {
          secondProductType &&
          <VariantSelector
            onSelected={() => { }}
            productType={secondProductType}
          />
        }
      </div>
      <div className='col-span-5 md:col-span-2 xl:col-span-1 mini-h-[100dvh]'>
        <Summary lineItem={lineItem} />
      </div>
    </div>
  );
}
