import { Product } from "@/lib/types/Product"
import { Variant } from "@/lib/types/Variant"
import ProductThumbnail from "./ProductThumbnail"
import VariantList from "./VariantList"

export default function RenderProductsRow(
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
) {
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