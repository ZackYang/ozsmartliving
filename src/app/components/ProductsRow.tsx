import { Product } from "@/lib/types/Product"
import ProductThumbnail from "./ProductThumbnail"
import VariantList from "./VariantList"
import { useContext } from "react";
import VariantSelectorContext from "./contexts/VariantSelectorContext";

export default function RenderProductsRow(
  {
    products,
    index,
  }: {
    products: Product[],
    index: number,
  }
) {
  const {
    selectedProduct,
    onProductSelected,
    selectedVariant,
    onVariantSelected
  } = useContext(VariantSelectorContext)

  return (
    <>
      <div key={index} className={`grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-9 4xl:grid-cols-10`}>
        {
          products.map((product) => {
            return (
              <ProductThumbnail
                key={product.id}
                selected={selectedProduct?.id === product.id}
                onClick={() => {
                  onProductSelected(product)
                  onVariantSelected(null)
                }}
                product={product} />
            )
          })
        }
      </div>
      {
        selectedProduct && products.map((product) => { return product.id }).includes(selectedProduct.id) && (
          <div className='flex flex-row justify-center'>
            <div className='text-3xl text-teal-500'>
              {
                products.map((product) => {
                  return (
                    <VariantList
                      onSelected={(variant) => {
                        onVariantSelected(variant)
                      }}
                      selectedVariant={selectedVariant}
                      key={product.id}
                      product={product}
                      variants={product.variants || []}
                      className={`${selectedProduct?.id === product.id ? 'block' : 'hidden'}`
                      } />
                  )
                })
              }
            </div>
          </div>
        )
      }
    </>
  )
}