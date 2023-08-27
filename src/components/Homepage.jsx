import React, { useRef, useState } from 'react'
import mobileModel1 from '../assets/logos/bg_mobile2.webp';
import desktopModel1 from '../assets/logos/bg_desktop.webp';
import products from '../data/data';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, } from 'react-router-dom';
import featured1 from '../assets/products/jacket.webp';
import featured2 from '../assets/products/backpack.webp';
import featured3 from '../assets/products/shirt.webp';
import featured4 from '../assets/products/pants.webp';

export const Homepage = () => {
  const screenWidth = window.innerWidth;

  const [scrollDown, setScrollDown] = useState(false);
  const handleScroll = ()=>{
    const scrollValue = document.documentElement.scrollTop;
    scrollValue >= 150 ? setScrollDown(true) : setScrollDown(false);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <main>
      <section className='section1'>
        <div className='section1-text'>
          <span>The latest gear from</span>
          <h1>aavocc</h1>
          <Link to='collections'> <button>view collection</button></Link>
        </div>
        <LazyLoadImage src={screenWidth > 800 ? desktopModel1 : mobileModel1} alt="model1" />
      </section>

      <section className='section2'>
        <h3>popular products</h3> 
        <div className='popular-items'>
          <PopularProducts />
        </div>
        <Link to='collections'> <button>view all products</button></Link>
      </section>

      <section className={scrollDown ? 'section3': 'section3 inactive'}>
        <div className='section2-text'>
          <h4>featured collections</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum placeat, esse corrupti nam culpa.</p>
        </div>

        <div className="featured-collections-banner">
          <FeaturedCollections title='Jacket' image={featured1} />
          <FeaturedCollections title='Bags' image={featured2} />
          <FeaturedCollections title='Shirts' image={featured3} />
          <FeaturedCollections title='Pants' image={featured4} />
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
        <LazyLoadImage src={product.image} alt="hoodie" />
        <div>
          <h5>{product.name}</h5>
          <span>P {product.price}</span>
        </div>
      </div>
    ))}
    </>
  );
}
const FeaturedCollections = (props) => {
  const {image, title, click} = props;
  const ref = useRef(null);
  const handleClick = () =>{
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }

  return(
    <>
    <div className='featured-container'>
      <div>
        <h3>{title}</h3>
        <Link to='collections'>
          <button>view products </button>
        </Link>
        
      </div>
      <center>
        <LazyLoadImage src={image} alt="pants" />
      </center> 
    </div>
    </>
  );
}