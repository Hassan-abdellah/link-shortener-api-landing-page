import React, { useState } from 'react'
import './shorturl.css';
import { CopyToClipboard } from "react-copy-to-clipboard";
import {FiCopy} from "react-icons/fi";
const ShortUrl = ({shortUrl}) => {
    const [isCopied, setIsCopied] = useState(false);
    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      };
  return (
    <div className="box">
        <a className='short-link' href={shortUrl} target="_blank" rel="noreferrer">{shortUrl}</a>
        <CopyToClipboard text={shortUrl} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" : <FiCopy/>}</span>
          </CopyToClipboard>
          
    </div>
  )
}

export default ShortUrl