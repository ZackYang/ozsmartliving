import { getUrl } from "@/app/(client)/components/OzSmartImage";
import { Variant } from "@/lib/types/Variant";
import { Card } from "flowbite-react";

export default function VariantCard(
  {
    variant,
    ...props
  }: {
    variant: Variant
  }
) {
  return (
    <Card
      {...props}
      className="gap-0 w-full"
      imgSrc={getUrl({ src: variant.images[0], alt: 'Cover', width: 200, height: 200, crop: 'lpad' })}
      horizontal>
      <div>
        <h1 className="leading-none">
          <b>Name:</b> {variant.name}
        </h1>
        <div>
          <b>code:</b> {variant.code}
        </div>
        <div>
          <b>unitPrice:</b> {variant.unitPrice}
        </div>
        <div>
          <b>composition:</b> {variant.composition}
        </div>
        <div>
          <b>Care Instructions:</b> {variant.careInstructions}
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

        <div>
          <b>disabled:</b> {variant.disabled ? 'true' : 'false'}
        </div>
        <div>
          <b>archived:</b> {variant.archived ? 'true' : 'false'}
        </div>
      </div>
      <div>

      </div>
    </Card>
  )
}