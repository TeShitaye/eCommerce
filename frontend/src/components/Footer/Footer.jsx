import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>Gebeya</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-socal-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>copyright @ 2024 allright reserved</p>
            </div>
        </div>
    )
}

export default Footer
