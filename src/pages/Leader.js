import {React,useState,useCallback} from 'react';
import './leader.css';

function leader(){
    
    return(
        <>
        <div className='leaderBtn'>
            <button type='submit' className='searchBtn' id='open'>내 아이디 등록하기</button>
        </div>
        <div className='modal-wrapper' >
            <div className='modal'>
                <div className='modal-title'>내 아이디 등록하기</div>
                <p>학교 이메일을 입력해주세요.</p>
                <input className='email' placeholder='학교이메일'></input>
                <p>인증번호를 입력해주세요.</p>
                <input className='sendnum' placeholder='인증번호'></input>
                <div className='close-wraper'>
                    <button id='close'>닫기</button>
                </div>
            </div>
        </div>

        <div className='ldBox'>
            <input className='inputBox' placeholder='소환사 이름을 입력해주세요.'/>
            <button type='submit' className='searchBtn'>검색하기</button>
        </div>
        </>
    );
}

export default leader;