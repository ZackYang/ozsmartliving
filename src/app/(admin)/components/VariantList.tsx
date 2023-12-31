'use client';

import { Button, Card } from "flowbite-react";
import { Variant } from "@/lib/types/Variant";
import { useState } from "react";
import VariantForm from "./VariantForm";
import VariantCard from "./VariantCard";

export default function VariantList(
  {
    variants,
    productId
  }: {
    productId: number,
    variants?: Variant[]
  }
) {
  const [showNewForm, setShowNewForm] = useState(false);
  const [currentVariants, setCurrentVariants] = useState(variants || []);

  const addVariant = (variant: Variant) => {
    setCurrentVariants((prevVariants) => {
      return prevVariants.concat([variant])
    })
  }

  const renderNewVariantForm = () => {
    return showNewForm && (
      <Card>
        <Button onClick={() => { setShowNewForm(false) }} className={`btn btn-primary ${!showNewForm && 'hidden'}`}>Cancel</Button>
        <div className="flex flex-cols">
          <VariantForm
            editMode={true}
            productId={productId}
            onVariantCreated={
              (variant) => {
                addVariant(variant)
              }
            } />
        </div>
      </Card>
    )
  }

  return (
    <div className="p-3 grid grid-cols-2">
      <div id="left">
        <h1 className="text-2xl">Variants</h1>
        {
          currentVariants.map(variant => {
            return (
              <VariantCard key={variant.id} variant={variant} />
            )
          })
        }
        {renderNewVariantForm()}
        <div className="flex justify-end">
          <Button onClick={() => { setShowNewForm(true) }} className={`btn btn-primary ${showNewForm && 'hidden'}`}>Create new variant</Button>
        </div>
      </div>
      <div id="right">
      </div>
    </div>
  )
}