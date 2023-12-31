'use client';

import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import ImageManager from "./ImageManager";
import { useState } from "react";
import { Variant } from "@/lib/types/Variant";
import { MdOutlinePercent } from "react-icons/md";


export default function VariantForm(
  {
    variant,
    productId,
    editMode,
    onVariantCreated
  }: {
    variant?: Variant,
    productId: number,
    editMode?: boolean,
    onVariantCreated?: (variant: Variant) => void
  }
) {
  const [showNewForm, setShowNewForm] = useState(false);
  const createVariant = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const res = await fetch('/api/admin/variants/create', {
      method: 'POST',
      body: JSON.stringify({
        name: data.get('name'),
        code: data.get('code'),
        unitPrice: data.get('unitPrice'),
        composition: data.get('composition'),
        careInstructions: data.get('careInstructions'),
        shadingRate: data.get('shadingRate'),
        energyEfficiency: data.get('energyEfficiency'),
        daytimePrivacy: data.get('daytimePrivacy'),
        nightimePrivacy: data.get('nightimePrivacy'),
        disabled: data.get('disabled'),
        archived: data.get('archived'),
        productId: productId
      })
    })

    const variant = await res.json() as Variant

    setShowNewForm(false)
  }

  return (
    <div key={variant ? variant.id : 'new'} className="w-full">
      <h3 className="text-lg">{variant?.name}</h3>
      {
        editMode && (
          <div className="w-full">
            <form onSubmit={createVariant}>
              <div className="flex max-w-md flex-col gap-4">
                <div>
                  <TextInput addon="Name" name="name" id="name" type="text" sizing="sm" defaultValue={variant?.name} required />
                </div>
                <div>
                  <TextInput addon="Code" name="code" id="small" type="text" sizing="sm" defaultValue={variant?.code} required />
                </div>
                <div>
                  <TextInput addon="Price" name="unitPrice" id="price" type="text" sizing="sm" defaultValue={variant?.unitPrice} required />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="composition" value="Composition" />
                  </div>
                  <Textarea id="composition" name="composition" defaultValue={variant?.composition} rows={4} />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="careInstructions" value="Care Instructions" />
                  </div>
                  <Textarea id="careInstructions" name="careInstructions" defaultValue={variant?.careInstructions} rows={4} />
                </div>
                <div>
                  <TextInput addon="Shading Rate" id="shadingRate" name="shadingRate" type="number" rightIcon={MdOutlinePercent} defaultValue={variant?.shadingRate} required />
                </div>
                <div>
                  <TextInput addon="Energy Efficiency" id="energyEfficiency" name="energyEfficiency" type="number" rightIcon={MdOutlinePercent} defaultValue={variant?.energyEfficiency} required />
                </div>
                <div>
                  <TextInput addon="Daytime Privacy" id="daytimePrivacy" name="daytimePrivacy" type="number" rightIcon={MdOutlinePercent} defaultValue={variant?.daytimePrivacy} required />
                </div>
                <div>
                  <TextInput addon="Nightime Privacy" id="nightimePrivacy" name="nightimePrivacy" type="number" rightIcon={MdOutlinePercent} defaultValue={variant?.nightimePrivacy} required />
                </div>
                <div>
                  <Label value="Disabled?" htmlFor="disabled" />
                  <Checkbox id="disabled" defaultChecked={variant?.disabled} name="disabled" />
                </div>
                <div>
                  <Label value="Archived?" htmlFor="archived" />
                  <Checkbox id="archived" defaultChecked={variant?.archived} name="archived" />
                </div>
                <div>
                  <Button type="submit" className="btn btn-primary">Save</Button>
                </div>
              </div>
            </form>
          </div>
        )
      }
    </div>
  )
}