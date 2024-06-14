
import logo from '../../assets/images/logo.svg'
import './Navbar.css'
import shop from '../../assets/images/icon-cart.svg'
import avatar from '../../assets/images/image-avatar.png'
import { useState } from 'react';

function Navbar() {
   
  return (
    <div className='container' >
        <div className="left">

        <img src={logo} alt="" className='logo' />
        <ul className='menu'>
            <li>collection </li>
            <li> Men</li>
            <li>Women </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
        <div className='right' >
        <img src={shop} alt=""  />

        <img src={avatar} alt="" />

        </div>
    </div>
  )
}

export default Navbar