import { Product } from "@/lib/types/Product"
import ProductThumbnail from "./ProductThumbnail"
import VariantList from "./VariantList"
import { useContext } from "react";
import VariantSelectorContext from "./contexts/VariantSelectorContext";

export default function ProductList(
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
      <div key={index} className={`flex flex-row`}>
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
                product={product}
                className="max-w-[100px] m-1 cursor-pointer"
              />
            )
          })
        }
      </div>
      {
        selectedProduct && products.map((product) => { return product.id }).includes(selectedProduct.id) && (
          <div className='flex flex-row'>
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