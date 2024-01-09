import { PrismaClient, ProductType } from '@prisma/client'
import { faker } from '@faker-js/faker';
import _ from 'lodash';
import getFiles from '../src/lib/getFiles';
import cloudinary from '../src/lib/cloudinary'

const prisma = new PrismaClient()

async function main() {

  // sheerCurtain
  // blockoutCurtain
  // dimoutCurtain

  // permalink        String
  // type             ProductType
  // name             String
  // code             String
  // supplierName     String
  // description      String
  // unitPrice        Float
  // createdAt        DateTime
  // updatedAt        DateTime
  // disabled         Boolean
  // archived         Boolean
  // careInstructions String
  // maxHeight        Int
  // maxWidth         Int
  // variants         Variant
  // images           Image

  const productTemp = {
    type: ProductType.sheerCurtain,
    name: 'Zack',
    code: 'Zack',
    supplierName: 'SN',
    description: `
      Tessa by Wilson Fabrics is a sophisticated and versatile fabric for window treatments that stands out as a striped sheer with a distinctive textured and multi-tonal stripe. Tessa offers a dynamic visual appeal that adds character to any space.
      Available in a palette of seven stylish colours, Tessa provides a range of options to complement various interior design schemes. The textured and woven stripe adds depth and interest, creating an elegant and contemporary look for your windows.
      Embrace the beauty of stripes and texture with Tessa by Wilson Fabrics, a versatile sheer that brings style and flair to your windows.`,
    unitPrice: 100,
    disabled: false,
    archived: false,
    careInstructions: `
      CARE INSTRUCTIONS 4
      For polyester fabrics and/or polyester blends. Woven or knitted. Remove hooks, rings
      & trims before cleaning. Regularly gently vacuum with appropriate attachment. Do
      not bleach. Do not rub or wring. Warm hand wash. Drip dry in shade. For best results
      immediately re-hang curtains to dry whilst damp. Warm iron if needed.
      Dry cleanable [P50]. Possible shrinkage 3%.
      `,
    maxHeight: 3000,
    maxWidth: 20000
  }

  const variantTmp = {
    name: () => faker.color.human(),
    code: () => faker.commerce.productName(),
    careInstructions: () => faker.lorem.paragraph(),
    composition: () => faker.lorem.paragraph(),
    shadingRate: () => faker.number.int({ min: 0, max: 100 }),
    energyEfficiency: () => faker.number.int({ min: 0, max: 100 }),
    daytimePrivacy: () => faker.number.int({ min: 0, max: 100 }),
    nightimePrivacy: () => faker.number.int({ min: 0, max: 100 }),
  }

  const variantPayload = () => {
    return _.mapValues(variantTmp, (value: any) => {
      if (_.isFunction(value)) {
        return value();
      }
      return value;
    })
  };

  const zack = await prisma.product.create({
    data: {
      ...productTemp
    },
  })

  const zackVariants = async () => {
    const filenames = await getFiles('s_1_')
    filenames.map(async (filename) => {
      const result = await cloudinary.uploader.upload(filename, {
        folder: 'curtains',
        use_filename: true,
        unique_filename: false,
      })

      await prisma.variant.create({
        data: {
          ...variantPayload(),
          productId: zack.id,
          images: {
            create: {
              description: 'Zack',
              raw: result,
              cover: true,
            }
          }
        }
      });
    })
  }

  zackVariants();

  const amanda = await prisma.product.create({
    data: {
      ...productTemp,
      name: 'Amanda',
      permalink: 'Amanda',
      code: 'Amanda',
    },
  })

  const amandaVariants = async () => {
    const filenames = await getFiles('s_2_')
    filenames.map(async (filename) => {
      const result = await cloudinary.uploader.upload(filename, {
        folder: 'curtains',
        use_filename: true,
        unique_filename: false,
      })

      await prisma.variant.create({
        data: {
          ...variantPayload(),
          productId: amanda.id,
          images: {
            create: {
              description: 'Zack',
              raw: result,
              cover: true,
            }
          }
        }
      });
    })
  }

  amandaVariants();

  const baxter = await prisma.product.create({
    data: {
      ...productTemp,
      name: 'Baxter',
      permalink: 'Baxter',
      code: 'Baxter',
      type: ProductType.blockoutCurtain,
    },
  })

  const baxterVariants = async () => {
    const filenames = await getFiles('p_1_')
    filenames.map(async (filename) => {
      const result = await cloudinary.uploader.upload(filename, {
        folder: 'curtains',
        use_filename: true,
        unique_filename: false,
      })

      await prisma.variant.create({
        data: {
          ...variantPayload(),
          productId: baxter.id,
          images: {
            create: {
              description: 'Zack',
              raw: result,
              cover: true,
            }
          }
        }
      });
    })
  }

  baxterVariants();

  const cody = await prisma.product.create({
    data: {
      ...productTemp,
      name: 'Cody',
      permalink: 'Cody',
      code: 'Cody',
      type: ProductType.blockoutCurtain,
    },
  })

  const codyVariants = async () => {
    const filenames = await getFiles('p_2_')
    filenames.map(async (filename) => {
      const result = await cloudinary.uploader.upload(filename, {
        folder: 'curtains',
        use_filename: true,
        unique_filename: false,
      })

      await prisma.variant.create({
        data: {
          ...variantPayload(),
          productId: cody.id,
          images: {
            create: {
              description: 'Zack',
              raw: result,
              cover: true,
            }
          }
        }
      });
    })
  }

  codyVariants();

  const dylan = await prisma.product.create({
    data: {
      ...productTemp,
      name: 'Dylan',
      permalink: 'Dylan',
      code: 'Dylan',
      type: ProductType.blockoutCurtain,
    },
  })

  const dylanVariants = async () => {
    const filenames = await getFiles('p_3_')
    filenames.map(async (filename) => {
      const result = await cloudinary.uploader.upload(filename, {
        folder: 'curtains',
        use_filename: true,
        unique_filename: false,
      })

      await prisma.variant.create({
        data: {
          ...variantPayload(),
          productId: dylan.id,
          images: {
            create: {
              description: 'Zack',
              raw: result,
              cover: true,
            }
          }
        }
      });
    })
  }

  dylanVariants();

  const emma = await prisma.product.create({
    data: {
      ...productTemp,
      name: 'Emma',
      permalink: 'Emma',
      code: 'Emma',
      type: ProductType.blockoutCurtain,
    },
  })

  const emmaVariants = async () => {
    const filenames = await getFiles('p_4_')
    filenames.map(async (filename) => {
      const result = await cloudinary.uploader.upload(filename, {
        folder: 'curtains',
        use_filename: true,
        unique_filename: false,
      })

      await prisma.variant.create({
        data: {
          ...variantPayload(),
          productId: emma.id,
          images: {
            create: {
              description: 'Zack',
              raw: result,
              cover: true,
            }
          }
        }
      });
    })
  }

  emmaVariants();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })