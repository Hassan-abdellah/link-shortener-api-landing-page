import React from 'react'
import Social from '../social/Social';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer wrapper">
        <div className="logo">
            Bit
        </div>
        <ul>
            <h3>Features</h3>
            <li>
                <a href="/shorten">Link Shortening</a>
            </li>
            <li>
                <a href="/custom-domain">Custom Domain</a>
            </li>
            <li>
                <a href="/statistics">Statistics</a>
            </li>
        </ul>
        <ul>
            <h3>Resourses</h3>
            <li>
                <a href="/api">Developers</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/support">Support</a>
            </li>
        </ul>
        <ul>
            <h3>Company</h3>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contacts">Contacts</a>
            </li>
            <li>
                <a href="/team">Team</a>
            </li>
            <li>
                <a href="/jobs">Jobs</a>
            </li>
        </ul>
        <Social/>
    </footer>
)
}

export default Footer;