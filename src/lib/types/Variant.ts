import { Image } from "./Image"

export type Variant = {
  id: number
  name: string
  code: string
  careInstructions: string
  unitPrice: number
  disabled?: boolean
  archived?: boolean
  composition: string
  shadingRate: number
  energyEfficiency: number
  daytimePrivacy: number
  nightimePrivacy: number
  coverImage?: string
  images?: Image[]
}