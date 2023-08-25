import React from 'react'
import products from '../../data/data'

export const Womens = (props) => {
  const womensArray = products[0].womens;
  return (
    <div className='product-container'>
      {womensArray.map((product, index) => (
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