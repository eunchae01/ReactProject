import React, { useState, useCallback, useEffect } from 'react';
import './complex.css';
import ChampionList from '../components/ChampionList';
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

function complex(){
    const onClick = () => {
        console.log('애니')
    }


    return(
        <div className='comContainer'>
        <div className='comBtn'>
            <Link to ='/complex'>
            <button className='lineBtn' id='line'>라인전</button>
            </Link>
            <Link to ='./complex2'>
                <button className='lineBtn' id='hanta'>한타</button>
            </Link>
        </div>

        <div className='comBox'>
            <ChampionList onClick = {onClick}/>
        </div>



        </div>
    );
}


export default complex;