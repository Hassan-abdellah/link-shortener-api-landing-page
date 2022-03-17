import React, { useState } from 'react'
import Medal from '../../svgs/medal.svg';
import './navbar.css';
const Navbar = () => {
  const [active,setActive] = useState(false);
  return (
      <header className='navbar wrapper'>
          <div className="logo">
                <img src={Medal} alt="medal-icon"/>
                <span>Bit</span>
          </div>
          <nav className={active ? "main-nav active" :"main-nav"}>
              <ul>
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contacts">Contacts</a>
                  </li>
              </ul>
              <button className="btn login-btn">Join</button>
          </nav>
          <div className={active ? "menu active" :"menu"} onClick={() => setActive(!active)}>
            <span className="bar bar-top"></span>
            <span className="bar bar-middle"></span>
            <span className="bar bar-bottom"></span>
          </div>
      </header>
  )
}

export default Navbar