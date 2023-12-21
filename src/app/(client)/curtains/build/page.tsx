import Prisma from "@/lib/prisma";
import CurtainTypeSelector from "../../components/CurtainTypeSelector";
import FabricSelector from "../../components/FabricSelector";

const getProducts = async () => {
  const allUsers = await Prisma.product.findMany()
  console.log(allUsers)
}

export default async function CurtainBuilder() {
  await getProducts()

  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className='md:basis-2/3'>
          <CurtainTypeSelector />
          <FabricSelector />
        </div>
        <div className='md:basis-1/3'></div>
      </div>
    </div>
  );
}
