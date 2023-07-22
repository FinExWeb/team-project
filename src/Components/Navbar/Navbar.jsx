import React from 'react'
import './Navbar.css'
import Logo from '../img/logo.svg'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <img src={Logo} alt="" />
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Tracking</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Signin</a></li>
                    </ul>
                    <div>
                        <button className='Register'>Register</button>
                    </div>
            </div>
        </>
    )
}

export default Navbar;