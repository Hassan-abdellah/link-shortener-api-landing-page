import React from 'react'
import './social.css';
import Facebook from '../../svgs/facebook.svg';
import Twitter from '../../svgs/twitter.svg';
import Instagram from '../../svgs/instagram.svg';
import Pinterest from '../../svgs/pinterest.svg';
const Social = () => {
  return (
    <ul className='social'>
        <li>
            <a href="https://www.facebook.com">
                <img src={Facebook} alt="facebook-logo" />
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com">
                <img src={Instagram} alt="instagram-logo" />
            </a>
        </li>
        <li>
            <a href="https://www.twitter.com">
                <img src={Twitter} alt="twitter-logo" />
            </a>
        </li>
        <li>
            <a href="https://www.pinterest.com">
                <img src={Pinterest} alt="pinterest-logo" />
            </a>
        </li>
    </ul>
  )
}

export default Social;