import React, { useState } from 'react';
import './cards.css';

const Card = ({Title, Poster}) => {
    const [title, setTitle] = useState(false);
    const changeState = () => { //mouse hover affect is set on each call t/f, shows title or not
        setTitle(!title);
    }
    return ( <div className="cards" onMouseEnter={changeState} onMouseLeave={changeState}>
        <img src={Poster} alt={Title}/>
        {title ? <p>{Title}</p> : ""}
    </div> );
}
 
export default Card;