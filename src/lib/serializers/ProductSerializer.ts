import { Image } from "../types/Image";
import { Product } from "../types/Product";
import Base from "./Base";
import VariantSerializer from "./VariantSerializer";

export default class ProductSerializer extends Base {
  constructor() {
    super();
    this.include = {
      coverImage: true,
      variants: true,
      images: true
    };
  }

  serialize(product: Product[] | Product | null) {
    if (!product) return ({} as Product);
    if (Array.isArray(product)) {
      return product.map((p) => this.serializeProduct(p));
    } else {
      return this.serializeProduct(product);
    }
  }

  serializeProduct(product: Product) {
    return {
      ...product,
      coverImage: this.include.coverImage
        ? this.coverImage(product)
        : null,
      variants: this.include.variants ? new VariantSerializer().serialize(product.variants || []) : undefined,
      images: this.include.images ? product.images : undefined,
    };
  }

  coverImage(product: Product) {
    if (!product.images)
      return ''

    const coverImage = product.images.find((image: Image) => image.cover);

    return coverImage ? (coverImage.raw as any).secure_url : 'placeholder';
  }
}