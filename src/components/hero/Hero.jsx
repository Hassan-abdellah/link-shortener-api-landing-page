import React from 'react'
import './hero.css';
import LinkShortener from '../../svgs/link_shortenersvg.svg';
const Hero = () => {
    return (
        <section className="hero wrapper">
            <div className="hero-content">
                <h1>Fast and Free URL Shortener Services</h1>
                <p>Easy to use Link Shortener Service Just Paste the link in the box and in just couple of seconds your short url will be ready.</p>
                <button className='btn hero-btn'>Try It Now</button>
            </div>
            <div className="hero-image">
                <img src={LinkShortener} alt="link-shortener-illustration" />
            </div>
        </section>
    )
}

export default Hero