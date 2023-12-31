import { Image } from "@prisma/client";
import Base from "./Base";
import { Product } from "../types/Product";

export default class ProductSerializer extends Base {
  constructor() {
    super();
    this.include = {
      coverImage: true,
      variants: true,
      images: true
    };
  }

  serialize(product: any[]) {
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
      variants: this.include.variants ? product.variants : undefined,
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