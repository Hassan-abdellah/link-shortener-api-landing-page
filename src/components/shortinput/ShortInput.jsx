import axios from 'axios';
import React, { useState } from 'react'
import Loader from '../loader/Loader';
import ShortUrl from '../shorturl/ShortUrl';
import './shortinput.css'
const ShortInput = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const shortenURL = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await axios.post('https://url-shortener-service.p.rapidapi.com/shorten',
                {
                    url: longUrl
                },
                {
                    headers: {
                        'content-type': 'application/json',
                        'x-rapidapi-host': 'url-shortener-service.p.rapidapi.com',
                        'x-rapidapi-key': '8d0ac0a32fmshe8b35ff8fec171bp1e3cccjsnb868fb752ea6'
                    }
                }
            );
            setIsLoading(false);
            setLongUrl('');
            setShortUrl(res.data.result_url);
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <section className="wrapper">
            <div className="service">
                <form className="form" onSubmit={shortenURL} >
                    <input type="text" placeholder='Enter long URL to shorten' value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
                    <button className='btn'>Shorten</button>
                </form>
                {isLoading && (
                    <Loader />
                )}
                {shortUrl && (
                    <ShortUrl shortUrl={shortUrl} />
                )}
            </div>
        </section>
    )
}

export default ShortInput;