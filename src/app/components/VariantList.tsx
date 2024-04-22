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
  className,
}: {
  variants: Variant[],
  selectedVariant?: Variant | null,
  product?: Product,
  onSelected?: (variant: Variant) => void,
  className?: string,
}) {
  const [displayedVariant, setDisplayedVariant] = useState<Variant | null>(null)

  if (product && product.variants) {
    return (
      <div className={`${className} w-full flex flex-row flex-wrap rounded gap-1 p-1`}>
        {
          variants.map((variant) => {
            return (
              <div
                key={`p-v-${variant.id}`}
                className={`w-full group cursor-pointer rounded p-1 relative max-w-[100px]`}
              >
                <OzSmartImage
                  src={variant.coverImage}
                  alt="Cover"
                  width={200}
                  height={200}
                  crop="fill"
                  priority={true}
                  onClick={() => { onSelected && onSelected(variant) }}
                  className={`w-full ${selectedVariant?.id === variant.id ? 'variant-selected' : 'variant-unselected'}`}
                />
                <div
                  className={
                    `absolute right-3 bottom-3 text-2xl detail-icon`}
                  onClick={() => { setDisplayedVariant(variant) }}>
                  <FaSearchPlus className="text-teal-500 hover:text-teal-700" />
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

  return null
}