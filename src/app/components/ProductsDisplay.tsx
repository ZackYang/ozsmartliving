import { Product } from "@/lib/types/Product"
import ProductThumbnail from "./ProductThumbnail"
import { Variant } from "@/lib/types/Variant"
import VariantList from "./VariantList"
import { useState } from "react"
import userMediaSize from '@/lib/userMediaSize'
import _, { set } from 'lodash'

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
                  product={selectedProduct}
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

export default function ProductsDisplay({
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

  const onProductSelected = (product: Product) => {
    setSelectedVariant(null)
    setSelectedProduct(product.id === selectedProduct?.id ? null : product)
  }

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
                onProductSelected={onProductSelected} />
            )
          })
        }
      </div>
    </>
  );
}
