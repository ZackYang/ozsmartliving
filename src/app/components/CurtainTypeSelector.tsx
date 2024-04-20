'use client';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "react-multi-carousel/lib/styles.css";

import { productTypeList } from '@/lib/types/ProductType';
import CurtainTypePanel from "./CurtainTypePanel";

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function CurtainTypeSelector() {
  let defaultWidth = 720;

  if (typeof window !== 'undefined') {
    const wrapper = window.document.querySelector('.carousel');
    defaultWidth = (wrapper as HTMLElement)?.offsetWidth;
  }

  const [width, setWidth] = React.useState(defaultWidth);

  React.useEffect(() => {
    const wrapper = window.document.querySelector('.carousel');
    setWidth((wrapper as HTMLElement)?.offsetWidth)
    window.addEventListener("resize", () => {
      setWidth((wrapper as HTMLElement)?.offsetWidth)
    });
  }, []);

  const renderProductTypes = () => {
    return productTypeList.map((productType) => {
      return (
        <CurtainTypePanel
          key={productType.typeName}
          productType={productType} />
      )
    })
  }

  return (
    <>
      <div className='gap-1 xl:grid-cols-4 3xl:grid-cols-4'>
        {
          renderProductTypes()
        }
      </div>
    </>
  )
}