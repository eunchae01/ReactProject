import React, { useState, useEffect } from 'react';
import './complex.css';
import '../components/Recommand';
import ChampionList from '../components/ChampionList';
import {Link} from 'react-router-dom';
import Recommand from '../components/Recommand';
import ListRecommand from '../components/ListRecommand';
import Outcome from '../components/Outcome';

function Complex({comrate}){
    const [imageUrl, setImageUrl] = useState('d');
    const [isClicked, setClicked] = useState('0');

    // const 



    const clickMathc = (e) =>{
        setClicked(() => e.target.id)
    }
    const onClick = (e) => {
        console.log(e.target)
        setImageUrl(() => e.target.src);
        // setName(() => e.target.id);
        // setRate(() => e.target.name);
        
    };

    // const isClicked = (e) => {
    //     console.log(e.target)
        
    // }

    return(
        <div className='comContainer'>

        <div className='comBtn'>
            {/* <Link to ='/complex'> */}
            <button className='lineBtn' id='line' onClick={clickMathc}>라인전</button>
            {/* </Link>
            <Link to ='./complex2'> */}
                <button className='lineBtn' id='hant' onClick={clickMathc}>한타</button>
            {/* </Link> */}
        </div>

        <div className='comBox'>
            <ChampionList onClick = {onClick} />
        </div>

        <div className='outcome'>
            {isClicked}
            <img src={imageUrl} className='box1' alt='ㅇ'/>
            <div className='box2' >
                <ListRecommand />
            </div>
        </div>

        </div>
    );
}

export default Complex;