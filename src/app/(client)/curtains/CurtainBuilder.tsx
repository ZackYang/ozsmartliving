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
import CurtainHeadSelector from "@/app/components/CurtainHeadSelector";
import CurtainFinishSelector from "@/app/components/CurtainFinishSelector";
import CurtainTrackSelector from "@/app/components/CurtainTrackSelector";
import CommonSelector from "@/app/components/sharedComponents/CommonSelector";
import { curtainFinishTypes, curtainFittingTypes, curtainHeadTypes, curtainStackTypes, curtainTrackTypes } from "@/lib/types/CommonSelectorOption";

export default function CurtainBuilder() {
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

  const ProductTypeSelector = () => {
    return (
      <>
        <SelectorHeader order={1} label='Choose your curtain type' />
        <CurtainTypeSelector />
      </>
    )
  }

  const ProductOneSelectorWrapper = () => {
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

  const ProductTwoSelectorWrapper = () => {
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

  const SizeSelectorWrapper = () => {
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

  const CurtainStackSelectorWrapper = () => {
    return (
      lineItem.productOne &&
      <>
        <CommonSelector options={curtainStackTypes} title="Curtain Stack" />
      </>
    )
  }

  const CurtainFittingSelectorWrapper = () => {
    return (
      lineItem.productOne &&
      <>
        <CommonSelector options={curtainFittingTypes} title="Curtain Fitting" />
      </>
    )
  }

  const CurtainHeadSelectorWrapper = () => {
    return (
      lineItem.productOne &&
      <>
        <CommonSelector options={curtainHeadTypes} title="Curtain Head" />
      </>
    )
  }

  const CurtainFinishSelectorWrapper = () => {
    return (
      lineItem.productOne &&
      <>
        <CommonSelector options={curtainFinishTypes} title="Curtain Finish" />
      </>
    )
  }

  const CurtainTrackSelectorWrapper = () => {
    return (
      lineItem.productOne &&
      <>
        <CommonSelector options={curtainTrackTypes} title="Curtain Track" />
      </>
    )
  }

  return (
    <div className="flex flex:col lg:flex-row gap-1">
      <lineItemContext.Provider value={{ lineItem, setLineItem }}>
        <div className='grow mini-h-[100dvh]'>

          <CurtainTypeSelector />
          <ProductOneSelectorWrapper />
          <ProductTwoSelectorWrapper />
          <SizeSelectorWrapper />
          {
            lineItem.productOne &&
            <SelectorHeader order={4} label='Build your own style' />
          }

          <CurtainStackSelectorWrapper />
          <CurtainFittingSelectorWrapper />
          <CurtainHeadSelectorWrapper />
          <CurtainFinishSelectorWrapper />
          <CurtainTrackSelectorWrapper />
        </div>
        <div className='mini-h-[100dvh]'>
          <Summary lineItem={lineItem} />
        </div>
      </lineItemContext.Provider>
    </div >
  );
}
