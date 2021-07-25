import React from 'react';
import './complex.css';

function complex(){
    return(
        <div className='comContainer'>
        <div className='comBtn'>
        <button className='lineBtn'>라인전</button>
        <button className='lineBtn'>한타</button>
        </div>

        <div className='comBox'></div>
        </div>
    );
}

export default complex;