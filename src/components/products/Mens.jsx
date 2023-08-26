import React from 'react'
import products from '../../data/data'
import menBanner from '../../assets/logos/men-banner.webp'
export const Mens = () => {
  const mensArray = products[0].mens;
  return(
    <>
    <picture className='banner'>
        <img src={menBanner} alt="banner" />
      </picture>
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
    </>
    
  )
}
