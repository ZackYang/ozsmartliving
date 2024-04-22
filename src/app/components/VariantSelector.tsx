'use client';

import { Product } from '@/lib/types/Product';
import { ProductType, ProductTypeName } from '@/lib/types/ProductType';
import { memo, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import _, { set } from 'lodash';

// import ProductsList from './ProductsList';
import { Variant } from '@/lib/types/Variant';
import ProductThumbnail from './ProductThumbnail';

export default function VariantSelector(
  {
    productType,
    products,
    onProductSelected,
    onVariantSelected,
  }: {
    productType: ProductType
    products: Product[]
    onProductSelected: (product: Product | null) => void
    onVariantSelected: (variant: Variant | null) => void
  }
) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null)

  function handleProductSelected(product: Product) {
    setSelectedProduct(product)
    onProductSelected(product)
  }

  function handleVariantSelected(variant: Variant) {
    setSelectedVariant(variant)
    onVariantSelected(variant)
  }

  console.log('Flash')

  return (
    <div className='flex flex-col' key={productType.typeName}>
      <h5 className='text-2xl flex items-center font-bold tracking-tight p-4 sm:text-xl'>
        Select <span className='text-teal-500'>{_.startCase(productType.name)}</span> fabric
      </h5>
      <div className={`grid grid-flow-row-dense grid-cols-3 xs:grid-cols-3 sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 3xl:grid-cols-12`}>
        {
          products.length > 0 && products.map((product) => {
            return (
              <ProductThumbnail
                className="w-[100px] m-1 cursor-pointer"
                key={`product-${product.id}`}
                product={product}
                selected={selectedProduct?.id === product.id}
                selectedVariant={selectedVariant}
                onProductSelected={handleProductSelected}
                onVariantSelected={handleVariantSelected}
              />
            )
          })
        }
      </div>
    </div >
  )
}
