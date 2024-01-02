'use client';

import { Product } from '@/lib/types/Product';
import { ProductTypeName } from '@/lib/types/ProductType';
import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { PiNumberCircleTwoDuotone } from "react-icons/pi";
import { PiCheckCircleFill } from "react-icons/pi";
import OzSmartImage from './OzSmartImage';
import _, { set } from 'lodash';
import userMediaSize from '@/lib/userMediaSize';
import t from '@/../tailwind.config';
import VariantList from './VariantList';
import { Variant } from '@/lib/types/Variant';

const ProductThumbnail = ({
  product,
  key,
  selected,
  onProductSelected
}: {
  product: Product,
  key: number,
  selected?: boolean,
  onProductSelected: (product: Product) => void
}) => {
  return (
    <div
      key={key}
      className='m-1'
      onClick={() => { onProductSelected(product) }}
    >
      <div className={`${selected && 'border-teal-600'} w-full group justify-center border-2 hover:border-teal-600 rounded-md relative mb-2`}>
        <OzSmartImage
          src={product.coverImage}
          alt={product.name}
          className="grayscale-[75%] rounded inline-block cursor-pointer"
          width={300}
          height={300}
          crop={'scale'}
        />
        <div className='-mt-6 flex justify-center z-10 relative bg-teal-600 text-white rounded-b'>
          {product.name}
        </div>
        <div className={`${selected ? 'block' : 'hidden'} left-5 w-3 h-3 bg-teal-600 absolute bottom-1 rotate-45 -mb-3`}></div>
      </div>
    </div>
  )
}

const RenderProductsRow = (
  {
    products,
    index,
    selectedProduct,
    selectedVariant,
    onProductSelected,
    onVariantSelected,
  }: {
    products: Product[],
    index: number,
    selectedProduct?: Product | null,
    selectedVariant?: Variant | null,
    onProductSelected: (product: Product) => void
    onVariantSelected: (variant: Variant) => void
  }
) => {
  return (
    <>
      <div key={index} className={`grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-9 4xl:grid-cols-10`}>
        {
          products.map((product) => {
            return (
              <ProductThumbnail
                key={product.id}
                product={product}
                selected={selectedProduct?.id === product.id}
                onProductSelected={
                  (product) => { onProductSelected(product) }
                } />
            )
          })
        }
      </div>
      {
        selectedProduct && products.map((product) => { return product.id }).includes(selectedProduct.id) && (
          <div className='flex flex-row justify-center'>
            <div className='text-3xl text-teal-500'>
              {
                selectedProduct.variants &&
                <VariantList
                  onSelected={onVariantSelected}
                  selectedVariant={selectedVariant}
                  variants={selectedProduct.variants} />
              }
            </div>
          </div>
        )
      }
    </>
  )
}

function RenderProducts({
  products
}: {
  products: Product[]
}) {
  const responsive = {
    xs: 3,
    sm: 5,
    md: 4,
    lg: 6,
    xl: 7,
    '2xl': 8,
    '3xl': 9,
    '4xl': 10,
  }

  const colNumber = responsive[userMediaSize() as keyof typeof responsive];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null)

  return (
    <>
      <div>
        {
          _.chunk(products, colNumber).map((products, index) => {
            return (
              <RenderProductsRow
                key={index}
                products={products}
                index={index}
                selectedProduct={selectedProduct}
                selectedVariant={selectedVariant}
                onVariantSelected={
                  (variant) => { setSelectedVariant(variant) }
                }
                onProductSelected={
                  (product) => { setSelectedProduct(product) }
                } />
            )
          })
        }
      </div>
    </>
  );
}

export default function VariantSelector(
  {
    productType,
    onSelected,
  }: {
    productType: ProductTypeName,
    onSelected?: (productType: ProductTypeName) => void
  }
) {
  const [products, setProducts] = useState<Product[]>([])

  const getProductsByTypeName = async (typeName: ProductTypeName) => {
    const res = await fetch(`/api/getProductsByType?typeName=${typeName}`)
    const products = await res.json()
    return products
  }

  useEffect(() => {
    setProducts([])

    getProductsByTypeName(productType).then((products) => {
      if (products.length > 0)
        setProducts(products)
    })
  }, [productType])

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <div>

          </div>
          <span className='text-sm sm:text-3xl inline'>
            Choose your <span className='text-teal-500'>{_.startCase(productType)}</span> fabric
          </span>
        </h5>
      </div >

      <RenderProducts products={products} />
    </div>
  )
}