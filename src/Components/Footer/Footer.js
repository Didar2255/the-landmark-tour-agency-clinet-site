import React from 'react';
import "./Footer.css"
import logo from '../../Images/Logo/logo 2.png'

const Footer = () => {
    return (
        <div className='footer '>
            <div className="row">
                <div className='col-md-4 col-12'>
                    <h1>The Landmark Tour</h1>
                    <ul>
                        <li><a href="/"><i class="fas fa-house-user icon"></i> Adabor,17/c,Dhaka</a></li>
                        <li><a href="/"><i class="fas fa-laptop-house icon"></i> Office NO 1263</a></li>
                        <li><a href="/"><i class="fas fa-envelope-open-text icon"></i> thelandmark@gmail.com</a></li>
                        <li><a href="/"><i class="fas fa-phone-alt icon"></i> Phone : 12365498</a></li>
                    </ul>
                    <input className='p-1' type="text" placeholder='Email' />
                    <button className='btn btn-danger py-1'>Send</button>
                </div>
                <div className='col-md-4 col-12'>
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="/">Travel Insurance</a></li>
                        <li><a href="/">Handpicked Hotels</a></li>
                        <li><a href="/">Accessibility</a></li>
                        <li><a href="/">24/7 Support</a></li>
                        <li><a href="/">Every time Enjoyment</a></li>
                    </ul>
                </div>
                <div className='col-md-4 col-12'>
                    <h4>Connect With us</h4>
                    <div className="social-link">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-linkedin-in"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-whatsapp"></i></a>
                    </div>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;