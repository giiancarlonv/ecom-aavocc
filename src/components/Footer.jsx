import React from 'react'
import banner from '../assets/logos/aavocc_banner.webp';
import twitter from '../assets/icons/x-twitter.svg';
import facebook from '../assets/icons/facebook.svg';
import pinterest from '../assets/icons/pinterest-p.svg';
import instagram from '../assets/icons/instagram.svg';

export const Footer = () => {
  return (
    <footer>
      <div className='tabs'>
        <img src={banner} alt="banner logo" />
        <ul>
          <li>search</li>
          <li>about us</li>
          <li>privacy policy</li>
          <li>terms & condition</li>
          <li>return policy</li>
        </ul>
      </div>
      <div className='socials'>
        <span>Follow us on</span>
        <div className='social-icons'>
          <Socials image={twitter}/>
          <Socials image={facebook}/>
          <Socials image={pinterest}/>
          <Socials image={instagram}/>
        </div>
      </div>
    </footer>
  )
}
const Socials = (props) =>{
  const {image, link} = props
  return(
    <a href={link}>
      <img src={image} alt={image} />
    </a>
  )
}