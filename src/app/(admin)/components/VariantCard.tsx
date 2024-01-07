import { getUrl } from "@/app/components/OzSmartImage";
import { Variant } from "@/lib/types/Variant";
import { Button, Card } from "flowbite-react";
import { useState } from "react";
import VariantForm from "./VariantForm";

export default function VariantCard(
  {
    variant,
    productId,
    selected,
    onClick,
    ...props
  }: {
    onClick?: (
      variant: Variant
    ) => void,
    productId: number,
    variant: Variant
    selected?: boolean
  }
) {

  const [editMode, setEditMode] = useState(false)

  const archive = async () => {
    if (window.confirm("Do you really want to archive?")) {
      const res = await fetch(`/api/admin/variants/archive`, {
        method: 'PUT',
        body: JSON.stringify({
          id: variant.id
        })
      })

      if (res.ok) {
        setEditMode(false)
      }
    }
  }

  const renderDetail = () => {
    return (
      <div className="text-sm">
        <div className="leading-none">
          <b>Name:</b> {variant.name}
        </div>
        <div>
          <b>code:</b> {variant.code}
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
            className="cursor-pointer text-teal-600 group-hover:text-teal-800"
            onClick={onClick ? () => { onClick(variant) } : undefined}>
            show...
          </p>
          <div className={` ${selected ? 'inline-block' : 'hidden'}`}>
            <div>
              <b>disabled:</b> {variant.disabled ? 'true' : 'false'}
            </div>
            <div>
              <b>composition:</b> {variant.composition}
            </div>
            <div>
              <b>Care Instructions:</b> {variant.careInstructions}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Card
      {...props}
      className={`gap-0 w-full ${selected ? 'bg-teal-100' : 'bg-white'}`}
      imgSrc={getUrl({ src: variant.coverImage, alt: 'Cover', width: 200, height: 200, crop: 'lpad' })}>
      {
        !editMode && renderDetail()
      }
      {
        editMode && <VariantForm productId={productId} variant={variant} editMode={true} />
      }
      <p className="text-sm">
        <Button size="xs" onClick={() => setEditMode(!editMode)} color="blue" className="btn btn-primary">
          {editMode ? 'Cancel' : 'Edit'}
        </Button>
      </p>
      <p className="text-sm">
        <Button size="xs" onClick={archive} color="failure">Archive</Button>
      </p>
    </Card>
  )
}