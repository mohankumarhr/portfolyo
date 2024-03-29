import React, { useState } from 'react'
import "../CSS/navbar.css"
import menu_icon from "../assets/menu.png"

function Navbar(props) {

    const [menuOn, setMenuOn] = useState(false)


    const handleMenu = ()=>{
        setMenuOn(!menuOn)
    }

  return (
    <div className='navbar-conatainer'>
        <div className='navbar-wrapper'>
            <div className='nav-title'>
                <h1>{props.about.name.split(" ")[0]}</h1>
            </div>
            <div className='menu'>
            <div className='menu-list'>
            <ul className={`${menuOn&&'menu-active'}`}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#timeline'>Timeline</a></li>
                    <li><a href='#testimonials'>Testimonials</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
                <div onClick={handleMenu} className={`${menuOn&&'menu-rotate'} ${'menu-icon'}`}>
                    <img src={menu_icon} alt='menu'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar