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
  product: Product,
  variants: Variant[],
  selectedVariant?: Variant | null,
  onSelected?: (variant: Variant) => void,
  className?: string,
}) {
  const [displayedVariant, setDisplayedVariant] = useState<Variant | null>(null)

  return (
    <div
      className={
        `
        grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-6
        md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-8
        2xl:grid-cols-8 3xl:grid-cols-8 4xl:grid-cols-8
        rounded gap-1 p-1
        ` + className
      }
    >
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
                priority={true}
                onClick={() => { onSelected && onSelected(variant) }}
                className={`w-full ${selectedVariant?.id === variant.id ? 'variant-selected' : 'variant-unselected'}`}
              />
              <div
                className={
                  `absolute right-3 bottom-3 text-2xl detail-icon`}
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