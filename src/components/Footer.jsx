import React from 'react'
import '../styles/footer.css'
import logo from '../assets/kudlaLogo2.webp'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className='footer_frame'>
      <div className='footer_content'>
      <div className='footer_logo_div'>
        <img src={logo} alt="logo" style={{width: "4rem"}} onClick={() => navigate('/')} />
        <p>We made this travel blog application which encaptures the beautiful spots of our magnificent Mangaluru. The objective is to offer users an enchanting platform where they can delve into
captivating travel stories, view breathtaking visuals, and interact with a vibrant travel community. Highlighting the travel destination spots in relevance to “Namma kudla”.</p>
      </div>
      <ul className='footer_links'>
        <li>tours</li>
        <li>places</li>
        <li>blogs</li>
        <li>help</li>
        <li>contact</li>
      </ul>
      <ul className='footer_links'>
        <li><i class="fa-brands fa-facebook"></i>facebook</li>
        <li><i class="fa-brands fa-square-instagram"></i>instagram</li>
        <li><i class="fa-solid fa-envelope"></i>email</li>
        <li><i class="fa-solid fa-phone"></i>telephone</li>
      </ul>
      </div>
      <h4>Created by Nishant Moolya</h4>
    </footer>
  )
}

export default Footer