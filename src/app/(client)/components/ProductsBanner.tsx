import './ProductsBanner.scss'

export default function ProductsBanner() {
  return (
    <div className="products-banner grid grid-cols-2 gap-0">
      <div className='image-container'>
        <div
          className="product-image bg-cover bg-center grayscale hover:grayscale-0 duration-700 scale-105 hover:scale-100"
          style={{ backgroundImage: 'url(https://www.nochintz.com/assets/images/NC-CustomCurtains.jpg)' }}
        >
        </div>
        <div className='product-desc'>
          Hello
        </div>
      </div>
      <div className='image-container position-abs'>
        <div
          className="product-image absolute right-0 bg-cover bg-center grayscale hover:grayscale-0 duration-700 scale-105 hover:scale-100"
          style={{ backgroundImage: 'url(https://cdn.mos.cms.futurecdn.net/NJRhhmEYBN3kWZsW2GMf6e.jpg)' }}
        >

        </div>
        <div className='product-desc'>
          Hello
        </div>
      </div>
    </div>
  )
}
