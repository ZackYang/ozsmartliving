import { Image } from '@/lib/types/Image';
import { CldImage, getCldImageUrl } from 'next-cloudinary';
import ImageEle from 'next/image';

export default function OzSmartImage({
  src,
  alt,
  className,
  width,
  height,
  crop,
  gravity,
  quality,
  onClick,
  ...props
}: {
  src: string | Image,
  alt: string,
  className?: string,
  width?: number,
  height?: number,
  crop?: string,
  gravity?: string,
  quality?: string,
  onClick?: () => void
}) {
  let url = '';

  if (typeof src !== 'string') {
    url = (src.raw as any)?.public_id
  } else {
    url = src
  }

  const imageUrl = getCldImageUrl({
    src: url,
    width,
    height,
    crop,
    gravity,
    quality,
  })

  return (
    <ImageEle
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      {...props}
    />
  )
}

export function getUrl({
  src,
  alt,
  className,
  width,
  height,
  crop,
  gravity,
  quality,
  onClick,
  ...props
}: {
  src: string | Image | undefined,
  alt: string,
  className?: string,
  width?: number,
  height?: number,
  crop?: string,
  gravity?: string,
  quality?: string,
  onClick?: () => void
}) {
  let url = '';
  if (!src) {
    url = 'placeholder'
  } else {
    if (typeof src !== 'string') {
      url = (src.raw as any)?.public_id
    } else {
      url = src
    }
  }

  const imageUrl = getCldImageUrl({
    src: url,
    width,
    height,
    crop,
    gravity,
    quality,
  })


  return imageUrl

}