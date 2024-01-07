import { Variant } from "@/lib/types/Variant";
import OzSmartImage from "./OzSmartImage";
import { FaSearchPlus } from "react-icons/fa";
import { useState } from "react";
import VariantModel from "./VariantModel";
import { Product } from "@/lib/types/Product";
import "./VariantList.scss"

export default function VariantList({
  variants,
  selectedVariant,
  product,
  onSelected,
}: {
  product: Product,
  variants: Variant[],
  selectedVariant?: Variant | null,
  onSelected?: (variant: Variant) => void,
}) {
  const [displayedVariant, setDisplayedVariant] = useState<Variant | null>(null)

  return (
    <div className={
      `
      grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4
      md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      2xl:grid-cols-6 3xl:grid-cols-6 4xl:grid-cols-6
      rounded gap-1 p-1
      `
    }>
      {
        variants.map((variant) => {
          return (
            <div
              key={variant.id}
              className={`w-full group cursor-pointer rounded p-1 relative p-2`}
            >
              <OzSmartImage
                src={variant.coverImage}
                alt="Cover"
                width={200}
                height={200}
                crop="fill"
                onClick={() => { onSelected && onSelected(variant) }}
                className={`w-full ${selectedVariant?.id === variant.id ? 'variant-selected' : 'variant-unselected'}`}
              />
              <div
                className={
                  `absolute right-3 bottom-3 text-3xl detail-icon`}
                onClick={() => { setDisplayedVariant(variant) }}>
                <FaSearchPlus />
              </div>
              <VariantModel
                openModal={displayedVariant?.id === variant.id}
                variant={variant}
                product={product}
                onClose={() => { setDisplayedVariant(null) }}
              />
            </div>
          )
        })
      }
    </div>
  )
}