import { Product } from "@/lib/types/Product"
import { Variant } from "@/lib/types/Variant"
import userMediaSize from '@/lib/userMediaSize'
import _ from 'lodash'
import ProductsRow from "./ProductsRow"

export default function ProductsList({
  products
}: {
  products: Product[]
}) {
  const responsive = {
    xs: 4,
    sm: 5,
    md: 6,
    lg: 7,
    xl: 7,
    '2xl': 7,
    '3xl': 8,
    '4xl': 8,
  }

  const colNumber = responsive[userMediaSize() as keyof typeof responsive];

  return (
    <>
      <div>
        {
          _.chunk(products, colNumber).map((products, index) => {
            return (
              <ProductsRow
                key={index}
                products={products}
                index={index} />
            )
          })
        }
      </div>
    </>
  );
}
