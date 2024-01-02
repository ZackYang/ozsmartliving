'use client';

import { Prisma } from '@prisma/client';
import { CldImage, CldUploadButton, getCldImageUrl } from 'next-cloudinary';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import ImageEdit from './ImageEdit';
import { Button, ButtonGroup, Card, Label, TextInput } from 'flowbite-react';

export type ImageData = {
  id: number
  description: string
  raw: Prisma.JsonValue
  order: number
  variantId: number
  productId: number
  cover: boolean
}

export default function ImageManager({
  images,
  productId,
  variantId
}: {
  images?: ImageData[]
  productId?: number
  variantId?: number
}) {
  const [uploadedImages, setUploadedImages] = useState(images?.sort((a, b) => a.order - b.order) || []);
  const [displayedImageId, setDisplayedImageId] = useState<Number>(0);

  async function addImage(image: JSON) {
    const res = await fetch('/api/admin/images/create', {
      method: 'POST',
      body: JSON.stringify({
        raw: image,
        productId,
        variantId
      })
    })

    const img = await res.json() as ImageData

    setUploadedImages((prevImages) => {
      return prevImages.concat([img])
    })
  }

  useEffect(() => {
    setUploadedImages(images?.sort((a, b) => a.order - b.order) || [])
  }, [images])

  async function deleteImage(imageId: number) {
    const res = await fetch('/api/admin/images/delete', {
      method: 'POST',
      body: JSON.stringify({
        imageId
      })
    })

    const img = await res.json() as ImageData

    setUploadedImages((prevImages) => {
      return prevImages.filter((image) => image.id !== img.id)
    })
  }

  async function changeImageOrder({
    id,
    event
  }: {
    id: number
    event: any
  }
  ) {
    const imageId = id;
    const order = event.target.value;

    const res = await fetch('/api/admin/images/update', {
      method: 'POST',
      body: JSON.stringify({
        imageId,
        order,
      })
    })

    const img = await res.json() as ImageData

    setUploadedImages((prevImages) => {
      return prevImages.map((image) => {
        if (image.id === img.id) {
          return img
        } else {
          return image
        }
      })
    })
  }

  async function changeCoverImage(image: ImageData) {
    const res = await fetch('/api/admin/images/update', {
      method: 'POST',
      body: JSON.stringify({
        imageId: image.id,
        cover: !image.cover,
      })
    })

    const img = await res.json() as ImageData

    setUploadedImages((prevImages) => {
      return prevImages.map((image) => {
        if (image.id === img.id) {
          return img
        } else {
          return image
        }
      })
    })
  }

  return (
    <div className="gap-2 h-lvh pb-10">
      <div className="grid grid-cols-3">
        {
          uploadedImages.map((image) => {
            const raw = image.raw as any;

            const src = getCldImageUrl({
              width: 300,
              height: 300,
              crop: 'lpad',
              src: raw.public_id
            })

            return (
              <Card key={image.id}>
                <Image className='w-full hover:border-teal-600 border-2 hover:cursor-pointer'
                  onClick={() => { setDisplayedImageId(image.id) }} src={src} width={300} height={300} alt={image.description} />
                <ButtonGroup>
                  <Button size="xs" color='warning' onClick={
                    () => {
                      if (confirm('Do you want to delete this image?')) {
                        deleteImage(image.id)
                      }
                    }
                  }>Delete</Button>
                  <Button size="xs" color={image.cover ? 'failure' : ''} onClick={
                    () => {
                      changeCoverImage(image)
                    }
                  }>
                    {
                      image.cover ? 'Unset cover' : 'Set cover'
                    }
                  </Button>
                </ButtonGroup>
                <div className="w-full">
                  <TextInput addon="Order" type="number" defaultValue={image?.order} onChange={(e) => { changeImageOrder({ id: image.id, event: e }) }} />
                </div>
                <ImageEdit
                  image={image}
                  closeModal={() => setDisplayedImageId(0)}
                  openModal={displayedImageId === image.id} />
              </Card>
            )
          })
        }
      </div>
      <CldUploadButton
        uploadPreset="ml_default"
        className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded"
        onSuccess={(result) => {
          if (result?.info) {
            addImage(result.info as JSON);
          }
        }}
      >
        Upload Images
      </CldUploadButton>
    </div>
  );
}