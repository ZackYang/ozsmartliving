import { ProductTypeName } from "../types/ProductType"

export const getProductsByTypeName = async (
  typeName: ProductTypeName
) => {
  const res = await fetch(`/api/getProductsByType?type=${typeName}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (res.status === 200) {
    const { products } = await res.json()
    return products
  } else {
    return []
  }
}