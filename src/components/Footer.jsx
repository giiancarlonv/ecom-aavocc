import React from 'react'
import banner from '../assets/logos/aavocc_banner.webp';

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
        <div>
          <a href="">X</a>
          <a href="">F</a>
          <a href="">P</a>
          <a href="">I</a>
        </div>
      </div>
    </footer>
  )
}
