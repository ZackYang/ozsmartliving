'use client';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "react-multi-carousel/lib/styles.css";

import { ProductType, productTypeList } from '@/lib/types/ProductType';
import CurtainTypePanel from "./CurtainTypePanel";

import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CurtainTypeSelector({
  selectedProductType,
  onSelected,
}: {
  selectedProductType: ProductType | null,
  onSelected?: (productType: ProductType) => void
}) {
  const renderProductTypes = () => {
    return productTypeList.map((productType) => {
      return (
        <CurtainTypePanel
          selected={selectedProductType === productType}
          onSelected={onSelected}
          className=""
          key={productType.typeName}
          productType={productType} />
      )
    })
  }

  return (
    <div className='flex flex-row flex-wrap'>
      {
        renderProductTypes()
      }
    </div>
  )
}