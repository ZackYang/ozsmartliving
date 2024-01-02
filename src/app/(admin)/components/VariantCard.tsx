import { getUrl } from "@/app/(client)/components/OzSmartImage";
import { Variant } from "@/lib/types/Variant";
import { Card } from "flowbite-react";

export default function VariantCard(
  {
    variant,
    selected,
    onClick,
    ...props
  }: {

    onClick?: (
      variant: Variant
    ) => void,
    variant: Variant
    selected?: boolean
  }
) {
  return (
    <Card
      {...props}
      className={`gap-0 w-full ${selected ? 'bg-teal-100' : 'bg-white'}`}
      imgSrc={getUrl({ src: variant.coverImage, alt: 'Cover', width: 200, height: 200, crop: 'lpad' })}
      horizontal>
      <div className="text-sm">
        <div className="leading-none">
          <b>Name:</b> {variant.name}
        </div>
        <div>
          <b>code:</b> {variant.code}
        </div>
        <div>
          <b>unitPrice:</b> {variant.unitPrice}
        </div>
        <div>
          <b>Shading Rate:</b> {variant.shadingRate}%
        </div>
        <div>
          <b>Energy Efficiency:</b> {variant.energyEfficiency}%
        </div>
        <div>
          <b>Daytime Privacy:</b> {variant.daytimePrivacy}%
        </div>
        <div>
          <b>Nightime Privacy:</b> {variant.nightimePrivacy}%
        </div>
        <div className="group">
          <p
            className="cursor-pointer"
            onClick={onClick ? () => { onClick(variant) } : undefined}>
            More...
          </p>
          <div className={` ${selected ? 'inline-block' : 'hidden'}`}>
            <div>
              <b>disabled:</b> {variant.disabled ? 'true' : 'false'}
            </div>
            <div>
              <b>archived:</b> {variant.archived ? 'true' : 'false'}
            </div>
            <div className="">
              <b>composition:</b> {variant.composition}
            </div>
            <div>
              <b>Care Instructions:</b> {variant.careInstructions}
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </Card>
  )
}