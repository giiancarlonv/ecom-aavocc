import React from 'react'
import products from '../../data/data'
import {LazyLoadImage} from 'react-lazy-load-image-component'

export const AllProducts = () => {
  return (
    <div>
      <div className='collections'>
        <h1>Shirts </h1>
        <ShirtCollection />
      </div>
      <div className='collections'>
        <h1>Pants </h1>
        <PantsCollection />
      </div>
      <div className='collections'>
        <h1>Bags </h1>
        <BagCollection />
      </div>
      <div className='collections'>
        <h1>Sweater</h1>
        <SweaterCollection />
      </div>

      <div className='collections'>
        <h1>Shoes</h1>
        <ShoesCollection />
      </div>
    </div>
  )
}
const ShirtCollection =()=>{
  const filteredshirts = products[0].mens.filter(product => product.category === 'shirt');
  const filteredwomenshirts = products[0].womens.filter(product => product.category === 'shirt');
  return(
    <div className='product-container'>
    {filteredshirts.map((product, index) => (
      <div className='product' key={index}>
        <LazyLoadImage src={product.img} alt={product.img} />
        <div className='product-text'> 
          <h3>{product.name}</h3>
          <span>P {product.price}</span>
        </div>
      </div>
    ))}
     {filteredwomenshirts.map((product, index) => (
      <div className='product' key={index}>
        <LazyLoadImage src={product.img} alt={product.img} />
        <div className='product-text'> 
          <h3>{product.name}</h3>
          <span>P {product.price}</span>
        </div>
      </div>
    ))}
    </div>
  )
}
const PantsCollection =()=>{
  const filteredPants = products[0].mens.filter(product => product.category === 'pants');
  const filteredWomenPants = products[0].womens.filter(product => product.category === 'pants');

  return(
    <div className='product-container'>
      {filteredPants.map((product, index) => (
        <div className='product' key={index}>
          <LazyLoadImage src={product.img} alt={product.img} />
          <div className='product-text'> 
            <h3>{product.name}</h3>
            <span>P {product.price}</span>
          </div>
        </div>
      ))}
      {filteredWomenPants.map((product, index) => (
        <div className='product' key={index}>
          <LazyLoadImage src={product.img} alt={product.img} />
          <div className='product-text'> 
            <h3>{product.name}</h3>
            <span>P {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
const BagCollection =()=>{
  const filteredBag = products[0].others.filter(product => product.category === 'bag')
  return(
    <div className='product-container collections'>
      {filteredBag.map((product, index) => (
        <div className='product' key={index}>
          <LazyLoadImage src={product.img} alt={product.img} />
          <div className='product-text'> 
            <h3>{product.name}</h3>
            <span>P {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
const ShoesCollection =()=>{
  const filteredShoes = products[0].others.filter(product => product.category === 'shoes');
  return(
    <div className='product-container'>
      {filteredShoes.map((product, index) => (
        <div className='product' key={index}>
          <LazyLoadImage src={product.img} alt={product.img} />
          <div className='product-text'> 
            <h3>{product.name}</h3>
            <span>P {product.price}</span>
          </div>
        </div>
      ))}
      </div>
  )
}
const SweaterCollection =()=>{
  const filteredSweater = products[0].others.filter(product => product.category === 'sweater');
  return(
    <div className='product-container'>
      {filteredSweater.map((product, index) => (
        <div className='product' key={index}>
          <LazyLoadImage src={product.img} alt={product.img} />
          <div className='product-text'> 
            <h3>{product.name}</h3>
            <span>P {product.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}