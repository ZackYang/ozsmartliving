'use client';

import CurtainTypeSelector from "../../components/CurtainTypeSelector";
import { useEffect, useMemo, useState } from "react";
import Summary from "../../components/Summary"
import VariantSelector from "../../components/VariantSelector";
import SelectorHeader from "@/app/components/SelectorHeader";
import lineItemContext from "@/app/components/contexts/LineItemContext";
import { LineItem } from "@/lib/types/LineItem";
import { Product } from "@/lib/types/Product";
import { ProductType, ProductTypeName, productTypeMap } from "@/lib/types/ProductType";
import SizeSelector from "@/app/components/SizeSelector";
import CommonSelector from "@/app/components/sharedComponents/CommonSelector";
import { curtainFinishTypes, curtainFittingTypes, curtainHeadTypes, curtainStackTypes, curtainTrackTypes } from "@/lib/types/CommonSelectorOption";
import { Variant } from "@/lib/types/Variant";
import { CurtainStackType } from "@/lib/types/CurtainStack";
import { CurtainFittingType } from "@/lib/types/CurtainFitting";
import { CurtainHeadType } from "@/lib/types/CurtainHead";
import { CurtainFinishType } from "@/lib/types/CurtainFinish";
import { CurtainTrackType } from "@/lib/types/CurtainTrack";

export default function CurtainBuilder() {
  const [lineItem, setLineItem] = useState<LineItem>({
    productType: null,
    productTypeOne: null,
    productTypeTwo: null,
    productOne: null,
    productTwo: null,
    variantOne: null,
    variantTwo: null,
    width: 0,
    height: 0,
    roomName: null,
    curtainStackType: null,
    curtainFittingType: null,
    curtainHeadType: null,
    curtainFinishType: null,
    curtainTrackType: null,
  })

  const [productType, setProductType] = useState<ProductType | null>(null)
  const [productTypeOne, setProductTypeOne] = useState<ProductType | null>(null)
  const [productTypeTwo, setProductTypeTwo] = useState<ProductType | null>(null)
  const [productOne, setProductOne] = useState<Product | null>(null)
  const [productTwo, setProductTwo] = useState<Product | null>(null)
  const [variantOne, setVariantOne] = useState<Variant | null>(null)
  const [variantTwo, setVariantTwo] = useState<Variant | null>(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [roomName, setRoomName] = useState<string | null>()
  const [curtainStackType, setCurtainStackType] = useState<CurtainStackType | null>(null)
  const [curtainFittingType, setCurtainFittingType] = useState<CurtainFittingType | null>(null)
  const [curtainHeadType, setCurtainHeadType] = useState<CurtainHeadType | null>(null)
  const [curtainFinishType, setCurtainFinishType] = useState<CurtainFinishType | null>(null)
  const [curtainTrackType, setCurtainTrackType] = useState<CurtainTrackType | null>(null)
  const [curtainHem, setCurtainHem] = useState<'lead' | '10mm' | '70mm' | '100mm' | null>(null)

  const [productOneSelectableProducts, setProductOneSelectableProducts] = useState<Product[]>([])
  const [productTwoSelectableProducts, setProductTwoSelectableProducts] = useState<Product[]>([])

  const getProductsByTypeName = async (typeName: ProductTypeName) => {
    const res = await fetch(`/api/getProductsByType?typeName=${typeName}`)
    const products = await res.json()
    return products
  }

  useEffect(() => {
    setLineItem({
      productType,
      productTypeOne,
      productTypeTwo,
      productOne,
      productTwo,
      variantOne,
      variantTwo,
      width,
      height,
      roomName,
      curtainStackType,
      curtainFittingType,
      curtainHeadType,
      curtainFinishType,
      curtainTrackType,
      curtainHem,
    })
  }, [
    productType,
    productTypeOne,
    productTypeTwo,
    productOne,
    productTwo,
    variantOne,
    variantTwo,
    width,
    height,
    roomName,
    curtainStackType,
    curtainFittingType,
    curtainHeadType,
    curtainFinishType,
    curtainTrackType,
    curtainHem,
  ])

  useEffect(() => {
    if (productTypeOne) {
      getProductsByTypeName(productTypeOne.typeName).then((products) => {
        setProductOneSelectableProducts(products)
      })
    }
  }, [productTypeOne])

  useEffect(() => {
    if (productTypeTwo) {
      getProductsByTypeName(productTypeTwo.typeName).then((products) => {
        setProductTwoSelectableProducts(products)
      })
    }
  }, [productTypeTwo])

  useEffect(() => {
    // set productTypeOne and productTypeTwo based on productType
    setProductTypeOne(productType === productTypeMap[ProductTypeName.DOUBLE_CURTAIN] ? productTypeMap[ProductTypeName.BLOCKOUT_CURTAIN] : productType)
    setProductTypeTwo(productType === productTypeMap[ProductTypeName.DOUBLE_CURTAIN] ? productTypeMap[ProductTypeName.SHEER_CURTAIN] : null)
  }, [productType])

  const ProductOneSelectorWrapper = useMemo(() => {
    return (
      productTypeOne &&
      <>
        <SelectorHeader order={2} label={`Choose your ${productTypeOne && productTypeTwo ? "fabrics" : "fabric"}`} />
        <VariantSelector
          key={'one'}
          products={productOneSelectableProducts}
          productType={productTypeOne}
          onProductSelected={setProductOne}
          onVariantSelected={setVariantOne}
        />
      </>
    )
  }, [productTypeOne, productOneSelectableProducts, productTypeTwo])

  const ProductTwoSelectorWrapper = useMemo(() => {
    return (
      productTypeTwo &&
      <>
        <VariantSelector
          key={'two'}
          products={productTwoSelectableProducts}
          productType={productTypeTwo}
          onProductSelected={setProductTwo}
          onVariantSelected={setVariantTwo}
        />
      </>
    )
  }, [productTwoSelectableProducts, productTypeTwo])

  const SizeSelectorWrapper = useMemo(() => {
    return (
      productType &&
      <>
        <SelectorHeader order={3} label='Measurements' />
        <SizeSelector
          onWidthChange={setWidth}
          onHeightChange={setHeight}
          onRoomNameChange={setRoomName}
        />
      </>
    )
  }, [productType])

  function resetAllState() {
    setProductType(null)
    setProductTypeOne(null)
    setProductTypeTwo(null)
    setProductOne(null)
    setProductTwo(null)
    setVariantOne(null)
    setVariantTwo(null)
    // Except for width, height, roomName
    // setWidth(0)
    // setHeight(0)
    // setRoomName(null)
    setCurtainStackType(null)
    setCurtainFittingType(null)
    setCurtainHeadType(null)
    setCurtainFinishType(null)
    setCurtainTrackType(null)
    setCurtainHem(null)
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-1">
      <div className='basis-3/4 flex flex-col mini-h-[100dvh]'>
        <CurtainTypeSelector
          selectedProductType={productType}
          onSelected={(newProductType) => {
            if (newProductType && newProductType.typeName !== productType?.typeName) {
              resetAllState
              setProductType(newProductType)
            }
          }}
        />
        {ProductOneSelectorWrapper}
        {ProductTwoSelectorWrapper}
        {SizeSelectorWrapper}
        {
          lineItem.productOne &&
          <SelectorHeader order={4} label='Build your own style' />
        }
        <CommonSelector onSelected={setCurtainStackType} key={'stack'} options={curtainStackTypes} title="Curtain Stack" />
        <CommonSelector onSelected={setCurtainFittingType} key={'fitting'} options={curtainFittingTypes} title="Curtain Fitting" />
        <CommonSelector onSelected={setCurtainHeadType} key={'head'} options={curtainHeadTypes} title="Curtain Head" />
        <CommonSelector onSelected={setCurtainFinishType} key={'finish'} options={curtainFinishTypes} title="Curtain Finish" />
        <CommonSelector onSelected={setCurtainTrackType} key={'track'} options={curtainTrackTypes} title="Curtain Track" />
      </div>
      <div className='basis-1/4 z-50'>
        <Summary lineItem={lineItem} />
      </div>
    </div >
  );
}
