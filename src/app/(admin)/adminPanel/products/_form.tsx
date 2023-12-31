import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { ProductType } from '@prisma/client';
import _ from 'lodash';
import { CldUploadButton, CldUploadWidgetResults } from 'next-cloudinary';
import { useState } from 'react';

export default function ProductForm(
  {
    product
  }: {
    product?: any
  }
) {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="*Product name (产品名称)" />
        </div>
        <TextInput name='name' id="name" type="text" defaultValue={product?.name} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="type" value="*Product type （产品类型）" />
        </div>
        <Select name='type' id="type" defaultValue={product?.type} required>
          {
            _.map(ProductType, (type) => (
              <option key={type} value={type}>{_.kebabCase(type)}</option>
            ))
          }
        </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="code" value="*Product code （产品编号, 对应中文名称）" />
        </div>
        <TextInput name='code' id="code" defaultValue={product?.code} type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="supplierName" value="*Supplier name （供应商名称）" />
        </div>
        <TextInput name="supplierName" id="supplierName" defaultValue={product?.supplierName} type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="unitPrice" value="*Unit price （单价）" />
        </div>
        <TextInput name='unitPrice' id="unitPrice" defaultValue={product?.unitPrice} type="number" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="disabled" value="*Disabled （是否禁用）" />
        </div>
        <Checkbox name='disabled' id="disabled" defaultChecked={product?.disabled} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="archived" value="*Archived （是否归档）" />
        </div>
        <Checkbox name='archived' id="archived" defaultChecked={product?.archived} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="careInstructions" value="*Care instructions （保养说明）" />
        </div>
        <Textarea name="careInstructions" className='h-32' defaultValue={product?.careInstructions} id="careInstructions" required />
      </div>
      <Button type="submit">{product ? 'Update' : 'Create'}</Button>
    </>
  )
}