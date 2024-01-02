import { Image } from "@prisma/client";
import Base from "./Base";
import { Variant } from "../types/Variant";

export default class VariantSerializer extends Base {
  constructor() {
    super();
    this.include = {
      coverImage: true,
      images: true
    };
  }

  serialize(variant: Variant[] | Variant | null) {
    if (!variant) return ({} as Variant);
    if (Array.isArray(variant)) {
      return variant.map((p) => this.serializeVariant(p));
    } else {
      return this.serializeVariant(variant);
    }
  }

  serializeVariant(variant: Variant) {
    return {
      ...variant,
      coverImage: this.include.coverImage
        ? this.coverImage(variant)
        : null,
      images: this.include.images ? variant.images : undefined,
    };
  }

  coverImage(variant: Variant) {
    if (!variant.images)
      return ''

    const coverImage = variant.images.find((image: Image | any) => image.cover);

    return coverImage ? (coverImage.raw as any).secure_url : 'placeholder';
  }
}