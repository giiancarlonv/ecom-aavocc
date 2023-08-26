import React, { useState } from 'react'
import mobileModel1 from '../assets/logos/bg_mobile2.webp';
import desktopModel1 from '../assets/logos/bg_desktop.webp';
import products from '../data/data';

export const Homepage = () => {
  const screenWidth = window.innerWidth;

  const [scrollDown, setScrollDown] = useState(false);
  const handleScroll = ()=>{
    const scrollValue = document.documentElement.scrollTop;
    scrollValue >= 100 ? setScrollDown(true) : setScrollDown(false);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <main>
      <section className='section1'>
        <div className='section1-text'>
          <span>The latest gear from</span>
          <h1>aavocc</h1>
          <button>view collection</button>
        </div>
        <img src={screenWidth > 800 ? desktopModel1 : mobileModel1} alt="model1" />
      </section>

      <section className={scrollDown ? 'section2': 'section2 inactive'}>
        <h3>popular products</h3> 
        <div className='popular-items'>
          <PopularProducts />
        </div>
        <button>view all products</button>
      </section>

      <section className={scrollDown ? 'section3': 'section3 inactive'}>
        <div className='section2-text'>
          <h4>featured collections</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum placeat, esse corrupti nam culpa.</p>
        </div>

        <div className="featured-collections-banner">
          <FeaturedCollections />
        </div>
      </section>
    </main>
  )
}

const PopularProducts = () =>{
  const popularArray = products[0].popular;
  return(
    <>
    {popularArray.map((product, index) =>(
      <div className='items' key={index}>
        <img src={product.image} alt="hoodie" />
        <div>
          <h5>{product.name}</h5>
          <span>P {product.price}</span>
        </div>
      </div>
    ))}
    </>
  );
}
const FeaturedCollections = () => {
  const featured = products[0].featured;
  return(
    <>
    {featured.map((item, index) =>(
      <div className='featured-container' key={index}>
        <div>
          <h3>{item.name}</h3>
          <button>view products </button>
        </div>
        <center>
          <img src={item.image} alt="pants" />
        </center> 
      </div>
    ))}
    </>
  );
}