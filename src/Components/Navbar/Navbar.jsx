import React from 'react'
import './Navbar.css'
import Logo from '../img/logo.svg'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <img src={Logo} alt="" />
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/tracking">Tracking</Link></li>
                    <li><Link to="/shipping">Shipping</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                    <li><Link to="/supports">Support</Link></li>
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