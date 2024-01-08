import { Variant } from "@/lib/types/Variant";
import { Product } from "@/lib/types/Product";
import { createContext, Dispatch, SetStateAction, useState } from "react";

function createVariantSelectorContext() {
  const VariantSelectorContext = createContext<{
    selectedProduct: Product | null,
    onProductSelected: (product: Product | null) => void,
    selectedVariant: Variant | null,
    onVariantSelected: (variant: Variant | null) => void,
  }>({
    selectedProduct: null,
    onProductSelected: () => { },
    selectedVariant: null,
    onVariantSelected: () => { },
  });
  return VariantSelectorContext
}

const VariantSelectorContext = createVariantSelectorContext()
export default VariantSelectorContext