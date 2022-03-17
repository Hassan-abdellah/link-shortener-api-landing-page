import React from 'react'
import Secure from '../../svgs/security.svg';
import Free from '../../svgs/freemium.svg';
import Fast from '../../svgs/fast.svg';
import './cards.css';
const Cards = () => {
  return (
    <section className="cards-grid wrapper">
        <div className="card">
            <img src={Free} alt="free-icon"/>
            <div className="card-content">
                <h3>Free</h3>
                <p>Always free to use with unlimited capacity every day, just sign up for free.</p>
            </div>
        </div>
        <div className="card">
            <img src={Fast} alt="fast-icon"/>
            <div className="card-content">
                <h3>Fast</h3>
                <p>Fast as lightening service, just a couple of seconds to shorten the url.</p>
            </div>
        </div>
        <div className="card">
            <img src={Secure} alt="security-icon"/>
            <div className="card-content">
                <h3>Secure</h3>
                <p>Very private service, we will never expose your data to any one or government.</p>
            </div>
        </div>
    </section>
  )
}

export default Cards