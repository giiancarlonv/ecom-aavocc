import React from 'react'
import products from '../../data/data'
import womenBanner from '../../assets/logos/women-banner.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Womens = (props) => {
  const womensArray = products[0].womens;
  return (
    <>
    <picture className='banner'>
        <LazyLoadImage src={womenBanner} alt="banner" />
      </picture>
    <div className='product-container'>
      
      {womensArray.map((product, index) => (
        <div className='product' key={index}>
          <LazyLoadImage src={product.img} alt={product.img} />
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