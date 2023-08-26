import React from 'react'
import products from '../../data/data'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export const Mens = () => {
  const mensArray = products[0].mens;
  return(
    <div className='product-container'>
      {mensArray.map((product, index) => (
        <div className='product' key={index}>
          <img src={product.img} alt={product.img} />
          <div className='product-text'> 
            <h3>{product.name}</h3>
            <span>P {product.price}</span>
          </div>
        </div>
      ))}
    </div>  
  )
}
