import React from 'react'
import mobileModel1 from '../assets/logos/bg_mobile2.webp';
import jacket from '../assets/products/jacket.webp';
import backpack from '../assets/products/backpack.webp';
import shirt from '../assets/products/shirt.webp';
import pants from '../assets/products/pants.webp';
import hoodie from '../assets/products/hoodie.webp';
import denim from '../assets/products/denim.webp';
import chinos from '../assets/products/chinos.webp';
import totebag from '../assets/products/totebag.webp';


export const Homepage = () => {
  return (
    <main>
      <section className='section1'>
        <div className='section1-text'>
          <span>The latest gear from</span>
          <h1>aavocc</h1>
          <button>view collection</button>
        </div>
        <img src={mobileModel1} alt="model1" />
      </section>

      <section className='section2'>
      <h3>popular products</h3>
      <div className='popular-items'>
        <div className='items'>
          <img src={hoodie} alt="hoodie" />
          <div>
            <h5>Pullover hoodie</h5>
            <span>$170.00</span>
          </div>
        </div>
        <div className='items'>
          <img src={denim} alt="denim" />
          <div>
            <h5>Lightweight denim</h5>
            <span>$140.00</span>
          </div>
        </div>
        <div className='items'>
          <img src={chinos} alt="prod 3" />
          <div>
            <h5>Cotton tapered chinos</h5>
            <span>$370.00</span>
          </div>
        </div>
        <div className='items'>
          <img src={totebag} alt="prod 4" />
          <div>
            <h5>Tote bag</h5>
            <span>$400.00</span>
          </div>
        </div>
      </div>
      <button>view all products</button>
      </section>

      <section className='section3'>
        <div className='section2-text'>
          <h4>featured collections</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum placeat, esse corrupti nam culpa.</p>
        </div>

        <div className="featured-collections-banner">
          <div className='featured-container'>
            <div>
              <h3>jackets</h3>
              <button>view products</button>
            </div>
            <center>
              <img src={jacket} alt="jacket" />
            </center>
            
          </div>
          <div className='featured-container'>
            <div>
              <h3>backpacks</h3>
              <button>view products </button>
            </div>
            <center>
              <img src={backpack} alt="backpack" />
            </center>
          </div>
          <div className='featured-container'>
            <div>
              <h3>shirts</h3>
              <button>view products </button>
            </div>
            <center>
              <img src={shirt} alt="shirt" />
            </center>
          </div>
          <div className='featured-container'>
            <div>
              <h3>pants</h3>
              <button>view products </button>
            </div>
            <center>
              <img src={pants} alt="pants" />
            </center> 
          </div>
        </div>
      </section>


    </main>
  )
}
