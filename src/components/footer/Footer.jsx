import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import './Styles.scss'

function Footer() {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente voluptatum iusto nam nesciunt alias magnam corrupti. Laborum, temporibus sint? Laboriosam ex amet iure unde reprehenderit consequuntur? Voluptates atque quisquam reprehenderit!
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF/>
          </span>
          <span className="icon">
            <FaInstagram/>
          </span>
          <span className="icon">
            <FaLinkedin/>
          </span>
          <span className="icon">
            <FaTwitter/>
          </span>
        </div>
      </ContentWrapper>
      
    </footer>
  )
}

export default Footer
