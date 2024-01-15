'use client';

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "react-multi-carousel/lib/styles.css";

import { productTypeList } from '@/lib/types/ProductType';
import CurtainTypePanel from "./CurtainTypePanel";

import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { de } from "@faker-js/faker";

export default function CurtainTypeSelector() {
  let defaultWidth = 1024;

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
      <div className='hidden xl:grid gap-1 xl:grid-cols-4 3xl:grid-cols-4'>
        {
          renderProductTypes()
        }
      </div>
      <div className="xl:hidden">
        <CarouselProvider
          className="relative"
          totalSlides={productTypeList.length}
          naturalSlideWidth={320}
          naturalSlideHeight={620}
          visibleSlides={width / 250}>
          <Slider>
            {
              productTypeList.map((productType, index) => {
                return (
                  <Slide key={productType.typeName} index={index}>
                    <CurtainTypePanel
                      key={productType.typeName}
                      productType={productType} />
                  </Slide>
                )
              })
            }
          </Slider>
          <ButtonBack className="absolute top-[50%] left-0 opacity-50 hover:opacity-100">
            <div className="text-4xl text-teal-600">
              <FiChevronLeft />
            </div>
          </ButtonBack>
          <ButtonNext className="absolute top-[50%] right-0 opacity-50 hover:opacity-100">
            <div className="text-4xl text-teal-600">
              <FiChevronRight />
            </div>
          </ButtonNext>
        </CarouselProvider>
      </div >
    </>
  )
}