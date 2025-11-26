import './Button.css';

import { Link } from "react-router-dom";

export default function Button({ text, link }) {
    return (
        <Link to={link} className="custom-button">
            <button className='button-inner titleh2mobile'>
               {text} 
            </button>  
        </Link>
    )
}