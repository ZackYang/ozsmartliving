
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { CldImage, CldUploadButton, getCldImageUrl } from 'next-cloudinary';

export default function ImageEdit({
  openModal,
  closeModal,
  image,
}: {
  openModal: boolean
  closeModal: () => void
  image: {
    id: number
    description?: string
    raw?: any
    order?: number
    variantId?: number
    productId?: number
  }
}) {

  return (
    <>
      <Modal show={openModal} size='6xl' onClose={() => closeModal()}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-4 justify-center items-center">
            <CldImage
              className='inline-block'
              src={image.raw.public_id}
              width={image.raw.width}
              height={image.raw.height}
              alt={image.raw.public_id}
            />
          </div>
          <div className="flex flex-col gap-4 justify-start items-start">
            <ul>
              <li><b>Order:</b> {image.order}</li>
              {image.variantId && <li><b>VariantId:</b> {image.variantId}</li>}
              {image.productId && <li><b>ProductId:</b> {image.productId}</li>}
              {image.raw && <li><b>PublicId:</b> {image.raw.public_id}</li>}
              {image.raw && <li><b>Width:</b> {image.raw.width} px</li>}
              {image.raw && <li><b>Height:</b> {image.raw.height} px</li>}
              {image.raw && <li><b>Format:</b> {image.raw.format}</li>}
              {image.raw && <li><b>Url:</b> {image.raw.secure_url}</li>}
              {image.raw && <li><b>OriginalFilename:</b> {image.raw.original_filename}</li>}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
