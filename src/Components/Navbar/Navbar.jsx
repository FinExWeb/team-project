import React from 'react'
import './Navbar.css'
import Logo from '../img/logo.svg'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <img src={Logo} alt="" />
                <ul className='home'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/tracking">Tracking</a></li>
                    <li><a href="/shipping">Shipping</a></li>
                    <li><a href="/locations">Locations</a></li>
                    <li><a href="/supports">Support</a></li>
                </ul>
                <div className='buttons'>
                    <button className='signin'>SignIn</button>
                    <button className='register'>Register</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;