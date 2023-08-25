import React from 'react'
import products from '../../data/data'

export const OtherProducts = () => {
  const others = products[0].others;
  return(
    <div className='product-container'>
      {others.map((product, index) => (
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
