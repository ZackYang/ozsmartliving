import { Product } from '@/lib/types/Product';
import OzSmartImage from './OzSmartImage';

export default function ProductThumbnail({
  product,
  selected,
  onClick,
}: {
  product: Product,
  selected?: boolean,
  onClick: () => void
}) {
  return (
    <div
      key={product.id}
      className='m-1'
      onClick={onClick}
    >
      <div className={`${selected && 'border-teal-600'} w-full group justify-center border-2 hover:border-teal-600 rounded-md relative mb-2`}>
        <OzSmartImage
          src={product.coverImage}
          alt={product.name}
          className="grayscale-[75%] rounded inline-block cursor-pointer"
          width={300}
          height={300}
          crop={'scale'}
        />
        <div className='-mt-6 flex justify-center z-10 relative bg-teal-600 text-white rounded-b'>
          {product.name}
        </div>
        <div className={`${selected ? 'block' : 'hidden'} left-5 w-3 h-3 bg-teal-600 absolute bottom-1 rotate-45 -mb-3`}></div>
      </div>
    </div>
  )
}