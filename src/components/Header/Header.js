import React from 'react'
import { Container } from 'reactstrap'
import './Header.css' 
import 'remixicon/fonts/remixicon.css'

const navlinks = [
    {
        display: 'Home',
        url: '#home'
    },
    {
        display: 'About',
        url: '#about'
    },
    {
        display: 'Skills',
        url: '#skills'
    },
    {
        display: 'Projects',
        url: '#projects'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
]

const Header = () => {
    return <header className='header'>
        <Container>
            <div className="navigation d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h5>Ayush</h5>
                </div>
                <div className="navmenu">
                    <ul className="navlist">
                        {
                            navlinks.map((item, index) => <li className="navitem" key={index}><a href={item.url}>{item.display}</a></li>)
                        }
                    </ul>
                </div>

                <div className="navright d-flex align-items-center gap-8">
                    <span className='mobilemenu'>
                        <i className="ri-menu-5-line"></i>
                    </span>
                </div>
            </div>
        </Container>

    </header>
}

export default Header
