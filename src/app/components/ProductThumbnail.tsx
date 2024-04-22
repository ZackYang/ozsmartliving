import { Product } from '@/lib/types/Product';
import OzSmartImage from './OzSmartImage';
import { useState } from 'react';
import { Variant } from '@/lib/types/Variant';
import VariantList from './VariantList';

interface Props {
  className?: string
  onProductSelected?: (product: Product) => void
  onVariantSelected?: (variant: Variant) => void
  selected?: boolean
  selectedVariant?: Variant | null
  product: Product
}

export default function ProductThumbnail({
  product,
  selectedVariant,
  selected,
  onProductSelected,
  onVariantSelected,
  className
}: Props) {
  return (
    <>
      <div
        key={product.id}
        className={`w-full flex-initial ${className}`}
        onClick={() => {
          onProductSelected && onProductSelected(product)
        }}
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
      {
        selected && (
          <VariantList
            className='grid-rows-subgrid col-span-3 sm:col-span-6 md:col-span-4 lg:col-span-6 xl:col-span-8 2xl:col-span-10 3xl:col-span-12'
            key={`variant-${product.id}`}
            product={product}
            variants={product.variants || []}
            selectedVariant={selectedVariant}
            onSelected={(variant) => {
              onVariantSelected && onVariantSelected(variant)
            }}
          />
        )
      }
    </>
  )
}