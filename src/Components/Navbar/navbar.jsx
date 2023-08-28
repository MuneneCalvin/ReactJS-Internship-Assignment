import React from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { BsCodeSlash } from 'react-icons/bs';
import './navbar.css'

function navbar() {
    return (

        <header id="header" className="header">
            <div class="container">
                <nav class="nav">
                    <a href="/" className="nav__brand">
                        <BsCodeSlash className="codeslash-line"/>DevelopedByCal
                    </a>
                    <div className="nav__menu" id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to='/' className='nav__link'>Home</Link>
                            </li>
                            <li className="nav__item">
                                <Link to='/addUser' className='nav__link'>Add New User</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__toggle">
                        < CiMenuFries id="nav-toggle" className="ri-menu-3-line"  />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default navbar;