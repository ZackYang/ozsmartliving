'use client';

import CurtainTypeSelector from "../../components/CurtainTypeSelector";
import { useEffect, useState } from "react";
import Summary from "../../components/Summary"
import VariantSelector from "../../components/VariantSelector";
import SelectorHeader from "@/app/components/SelectorHeader";
import lineItemContext from "@/app/components/contexts/LineItemContext";
import { LineItem } from "@/lib/types/LineItem";
import { Product } from "@/lib/types/Product";
import { ProductTypeName, productTypeMap } from "@/lib/types/ProductType";
import SizeSelector from "@/app/components/SizeSelector";
import CurtainFittingSelector from "@/app/components/CurtainFittingSelector";
import CurtainStackSelector from "@/app/components/CurtainStackSelector";

export default function DesignerCurtainBuilder() {
  const [lineItem, setLineItem] = useState<LineItem>({
    productType: null,
    productTypeOne: null,
    productTypeTwo: null,
    productOne: null,
    productTwo: null,
    variantOne: null,
    variantTwo: null,
  })

  useEffect(() => {
    setLineItem((prev) => {
      return {
        ...prev,
        productOne: null,
        variantOne: null,
        productTwo: null,
        variantTwo: null,
        productTypeOne: lineItem.productType === productTypeMap[ProductTypeName.DOUBLE_CURTAIN] ? productTypeMap[ProductTypeName.BLOCKOUT_CURTAIN] : lineItem.productType,
        productTypeTwo: lineItem.productType === productTypeMap[ProductTypeName.DOUBLE_CURTAIN] ? productTypeMap[ProductTypeName.SHEER_CURTAIN] : null,
      }
    })
  }, [lineItem.productType])

  const renderProductTypeSelector = () => {
    return (
      <>
        <SelectorHeader order={1} label='Choose your curtain type' />
        <CurtainTypeSelector />
      </>
    )
  }

  const renderProductOneSelector = () => {
    return (
      lineItem.productTypeOne &&
      <>
        <SelectorHeader order={2} label={`Choose your ${lineItem.productTypeOne && lineItem.productTypeTwo ? "fabrics" : "fabric"}`} />
        <VariantSelector
          selectedProduct={lineItem.productOne}
          selectedVariant={lineItem.variantOne}
          productType={lineItem.productTypeOne}
          onProductSelected={
            (product: Product | null) => {
              setLineItem((prev) => {
                return {
                  ...prev,
                  productOne: product
                }
              })
            }
          }
          onVariantSelected={
            (variant) => {
              setLineItem((prev) => {
                return {
                  ...prev,
                  variantOne: variant
                }
              })
            }
          }
        />
      </>
    )
  }

  const renderProductTwoSelector = () => {
    return (
      lineItem.productTypeTwo &&
      <>
        <VariantSelector
          selectedProduct={lineItem.productTwo}
          selectedVariant={lineItem.variantTwo}
          productType={lineItem.productTypeTwo}
          onProductSelected={
            (product: Product | null) => {
              setLineItem((prev) => {
                return {
                  ...prev,
                  productTwo: product
                }
              })
            }
          }
          onVariantSelected={
            (variant) => {
              setLineItem((prev) => {
                return {
                  ...prev,
                  variantTwo: variant
                }
              })
            }
          }
        />
      </>
    )
  }

  const renderSizeSelector = () => {
    let maxWidth = 0
    let maxHeight = 0
    if (lineItem.productType === productTypeMap[ProductTypeName.DOUBLE_CURTAIN]) {
      if (lineItem.productOne && lineItem.productTwo) {
        maxWidth = Math.min(lineItem.productOne.maxWidth, lineItem.productTwo.maxWidth)
        maxHeight = Math.min(lineItem.productOne.maxHeight, lineItem.productTwo.maxHeight)
      } else {
        return null
      }
    } else {
      if (lineItem.productOne) {
        maxWidth = lineItem.productOne.maxWidth
        maxHeight = lineItem.productOne.maxHeight
      } else {
        return null
      }
    }

    return (
      lineItem.productType &&
      <>
        <SelectorHeader order={3} label='Measurements' />
        <SizeSelector
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          defaultName="Room 1 Window 1"
        />
      </>
    )
  }

  const renderCurtainStackSelector = () => {
    return (
      lineItem.productOne &&
      <>
        <CurtainStackSelector />
      </>
    )
  }

  const renderCurtainFittingSelector = () => {
    return (
      lineItem.productOne &&
      <>
        <CurtainFittingSelector />
      </>
    )
  }

  return (
    <div className="grid grid-cols-5 justify-center ">
      <lineItemContext.Provider value={{ lineItem, setLineItem }}>
        <div className='col-span-5 md:col-span-3 xl:col-span-4 mini-h-[100dvh]'>
          {
            renderProductTypeSelector()
          }
          {
            renderProductOneSelector()
          }
          {
            renderProductTwoSelector()
          }
          {
            renderSizeSelector()
          }
          {
            lineItem.productOne &&
            <SelectorHeader order={4} label='Build your own style' />
          }
          {
            renderCurtainStackSelector()
          }
          {
            renderCurtainFittingSelector()
          }
        </div>
        <div className='col-span-5 md:col-span-2 xl:col-span-1 mini-h-[100dvh]'>
          <Summary lineItem={lineItem} />
        </div>
      </lineItemContext.Provider>
    </div >
  );
}
