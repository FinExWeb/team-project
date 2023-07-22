import React from 'react'
import human from '../img/header-human.svg'
function Header() {
    return (
        <>
            <div className='header d-flex align-items-center justify-content-between'>
                <div className="content">
                    <h1>Largest and reliable courier service
                        in your city
                        Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</h1>
                    <p>Duis aute irure dolor in reprehenderit in voluptate cillum dolore eu fugiat nulla pariatur.</p>

                    <div className='buttons'>
                        <input type="text" placeholder='Enter Tracking Number' />
                        <button>Check</button>
                    </div>
                </div>
                <img src={human} alt="human" />
            </div>
        </>
    )
}

export default Header