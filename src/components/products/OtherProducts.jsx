import React from 'react'
import products from '../../data/data'
import othersBanner from '../../assets/logos/others-banner.webp'

export const OtherProducts = () => {
  const others = products[0].others;
  return(
    <>
    <picture className='banner'>
        <img src={othersBanner} alt="banner" />
      </picture>
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
    </>
    
  )
}
