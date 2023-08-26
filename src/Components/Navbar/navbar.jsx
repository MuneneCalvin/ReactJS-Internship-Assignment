import React from 'react';
import addUser from '../../Pages/addUser/addUser';
import './navbar.css'

function navbar() {
    return (

        <header id="header" class="header">
            <div class="container">
                <nav class="nav">
                    <a href="index.html" class="nav__brand">
                        <i class="ri-code-s-slash-line"></i>DevelopedByCal
                    </a>
                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#hero" class="nav__link">Home</a>
                            </li>
                            <li class="nav__item">
                                <a href=""  class="nav__link">Add New User</a>
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