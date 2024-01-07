import { Product } from "@/lib/types/Product"
import { Variant } from "@/lib/types/Variant"
import { useState } from "react"
import userMediaSize from '@/lib/userMediaSize'
import _ from 'lodash'
import ProductsRow from "./ProductsRow"

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
              <ProductsRow
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
