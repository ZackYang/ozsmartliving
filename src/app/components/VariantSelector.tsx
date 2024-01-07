'use client';

import { Product } from '@/lib/types/Product';
import { ProductTypeName } from '@/lib/types/ProductType';
import { useEffect, useState } from 'react';
import _ from 'lodash';

import ProductsDisplay from './ProductsList';


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
          <span className='text-base sm:text-xl inline'>
            Select <span className='text-teal-500'>{_.startCase(productType)}</span> fabric
          </span>
        </h5>
      </div >

      <ProductsDisplay products={products} />
    </div>
  )
}