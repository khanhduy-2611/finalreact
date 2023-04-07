import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
            <ul>
            <li>
                <Link to='/'>Home</Link>
              </li>
            </ul>            
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
