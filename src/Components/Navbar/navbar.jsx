import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function navbar() {
    return (

        <header id="header" class="header">
            <div class="container">
                <nav class="nav">
                    <a href="/" class="nav__brand">
                        <i class="ri-code-s-slash-line"></i>DevelopedByCal
                    </a>
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <Link to='/' className='nav__link'>Home</Link>
                            </li>
                            <li class="nav__item">
                                <Link to='/addUser' className='nav__link'>Add New User</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="nav__toggle">
                        <i id="nav-toggle" class="ri-menu-3-line"></i>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default navbar;