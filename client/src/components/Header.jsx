import React from 'react'
import './css/header.scss'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom' 
import nasa from '../images/nasa.png'
import x from '../images/spacex.png'

export default function Header() {
  return (
    <div className='header'>
      <div className="wrapper">
        <span className="title">
          OUTER SPACE
        </span>
        <div className='logos'>
          <Link to="/" className="logo-link">
            <img src={nasa} alt="NASA" className="logo nasa-logo" />
          </Link>
          <Link to="/spacex" className="logo-link">
            <img src={x} alt="SpaceX" className="logo spacex-logo" />
          </Link>
        </div>
        <div className="links">
          <a href='#'> <FaInstagram className='icon'/></a>
          <a href='#'><FaFacebook className='icon' /></a>
          <a href='#'> <FaLinkedin className='icon'/></a>
          <a href='#'> <FaYoutube className='icon'/></a>
        </div>
      </div>
    </div>
  )
}