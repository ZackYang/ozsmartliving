export type Image = {
  id: number
  raw: any
  order: number
  cover: boolean
  description: string
  productId?: number | null
  variantId?: number | null
}