import { Image } from "./Image"
import { Variant } from "./Variant"

export type Product = {
  id: number
  code: string
  permalink: string | null
  type: string
  name: string
  unitPrice: number
  description: string | null
  careInstructions: string
  variants?: Variant[]
  coverImage?: string
  images?: Image[]
  supplierName?: string
  disabled?: boolean
  archived?: boolean
}