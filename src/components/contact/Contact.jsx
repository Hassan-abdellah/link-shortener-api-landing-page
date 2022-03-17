import React from 'react'
import './contact.css';
import {FiSend} from 'react-icons/fi';
const Contact = () => {
  return (
    <div className="wrapper">
        <section className="contact">
            <form>
                <input type="text" placeholder='Send us a message' />
                <button className='btn'>
                    <FiSend/>
                </button>
            </form>
        </section>
    </div>
  )
}

export default Contact