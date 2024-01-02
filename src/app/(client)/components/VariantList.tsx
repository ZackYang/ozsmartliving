import { Variant } from "@/lib/types/Variant";
import OzSmartImage from "./OzSmartImage";
import { FaSearchPlus } from "react-icons/fa";

export default function VariantList({
  variants,
  selectedVariant,
  onSelected,
}: {
  variants: Variant[],
  selectedVariant?: Variant | null,
  onSelected?: (variant: Variant) => void,
}) {
  return (
    <div className={
      `
      grid grid-cols-3 xs:grid-cols-3 sm:grid-cols-4
      md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-10
      2xl:grid-cols-10 3xl:grid-cols-11 4xl:grid-cols-12
      bg-white rounded gap-1 p-1
      `
    }>
      {variants.map((variant) => {
        return (
          <div
            key={variant.id}
            onClick={() => { onSelected && onSelected(variant) }}
            className={`w-full group cursor-pointer rounded border-4 p-3 hover:border-teal-600 relative ${selectedVariant?.id === variant.id ? 'border-teal-600' : 'border-white'}`}>
            <OzSmartImage
              src={variant.coverImage}
              alt="Cover"
              width={200}
              height={200}
              crop="fill"
              className="w-full rounded border-0"
            />
            <div className={`group-hover:text-teal-600 text-teal-600 absolute right-0 bottom-0 text-xl`}>
              <FaSearchPlus />
            </div>
          </div>
        )
      })}
    </div>
  )
}