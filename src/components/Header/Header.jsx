import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header-wrapper'>
        <div className='logo'>
            <a href="/"><img src="../../image.png" alt="logo" /></a>
        </div>
        <div className='nav-direction'>
            <ul>
                <li>Demo</li>
                <li>Biz haqimizda</li>
                <li>Mijozlar</li>
                <li>Bog'lanish</li>
            </ul>
        </div>
        <div className='demo-btn'>
            <a href='#'>Demo olish</a>
        </div>
    </div>
  )
}

export default Header