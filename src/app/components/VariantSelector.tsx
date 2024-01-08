'use client';

import { Product } from '@/lib/types/Product';
import { ProductType, ProductTypeName } from '@/lib/types/ProductType';
import { useContext, useEffect, useState } from 'react';
import _ from 'lodash';

import ProductsList from './ProductsList';
import { Variant } from '@/lib/types/Variant';
import VariantSelectorContext from './contexts/VariantSelectorContext';


export default function VariantSelector(
  {
    productType,
    selectedProduct,
    onProductSelected,
    selectedVariant,
    onVariantSelected,
  }: {
    productType: ProductType
    selectedProduct: Product | null
    onProductSelected: (product: Product | null) => void
    selectedVariant: Variant | null
    onVariantSelected: (variant: Variant | null) => void
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

    getProductsByTypeName(productType.typeName).then((products) => {
      if (products.length > 0)
        setProducts(products)
    })
  }, [productType])

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <h5 className='text-2xl flex items-center font-bold tracking-tight p-4'>
          <span className='text-base sm:text-xl inline'>
            Select <span className='text-teal-500'>{_.startCase(productType.name)}</span> fabric
          </span>
        </h5>
      </div >

      <VariantSelectorContext.Provider value={{ selectedProduct, onProductSelected, selectedVariant, onVariantSelected }}>
        < ProductsList
          products={products} />
      </VariantSelectorContext.Provider>
    </div >
  )
}