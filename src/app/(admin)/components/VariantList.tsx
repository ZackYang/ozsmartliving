'use client';

import { Button, Card } from "flowbite-react";
import { Variant } from "@/lib/types/Variant";
import { useState } from "react";
import VariantForm from "./VariantForm";
import VariantCard from "./VariantCard";
import ImageManager, { ImageData } from "./ImageManager";

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
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [currentVariantImages, setCurrentVariantImages] = useState<ImageData[]>([]);

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

  const selectVariantHandler = (variant: Variant) => {
    setSelectedVariant(prevariant => {
      if (prevariant?.id === variant.id) {
        return null
      } else {
        return variant
      }
    })

    setCurrentVariantImages(variant.images as ImageData[])
  }

  return (
    <div className="p-3 grid grid-cols-2">
      <div id="left">
        <h1 className="text-2xl">Variants</h1>
        {
          currentVariants.map(variant => {
            return (
              <VariantCard
                key={variant.id}
                selected={selectedVariant?.id === variant.id}
                variant={variant}
                onClick={selectVariantHandler} />
            )
          })
        }
        {renderNewVariantForm()}
        <div className="flex justify-end">
          <Button onClick={() => { setShowNewForm(true) }} className={`btn btn-primary ${showNewForm && 'hidden'}`}>Create new variant</Button>
        </div>
      </div>
      <div id="right">
        {
          selectedVariant && (
            <div className="fixed">
              <h2 className="text-xl">Variant Images</h2>
              <ImageManager
                images={currentVariantImages}
                variantId={selectedVariant?.id} />
            </div>
          )
        }
      </div>
    </div>
  )
}