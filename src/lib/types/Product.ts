import { Image, Prisma, Variant } from "@prisma/client"

export type Product = {
  id: number
  permalink: string
  type: string
  name: string
  unitPrice: number
  priceFrom: number
  description: string
  careInstructions: string
  variants?: Variant[]
  coverImage: string
  images?: Image[]
}