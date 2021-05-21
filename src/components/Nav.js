import React from 'react';
import './nav.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../pages/Home';
import User from '../pages/User';
import Champion from '../pages/Chamipon';
import Line from '../pages/Line';
import Complex from '../pages/Complex';
import Item from '../pages/Item';
import Leader from '../pages/Leader';

function Header(){
    return(
      <>
        <Router>
        <div className='relative'>
        <nav>
        <ul>
        <div className='a'>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/user'>소환사 검색</Link></li>
        <li><Link to='/champion'>챔피언별 승률 검색</Link></li>
        <li><Link to='/line'>라인별 승률 검색</Link></li>
        <li><Link to='/complex'>조합 승률 검색</Link></li>
        <li><Link to='/item'>아이템 티어 순위 검색</Link></li>
        <li><Link to='/leader'>리더보드</Link></li>
        </div>
        </ul>
        </nav>

      <Route path="/" component={Home} exact={true}/>
      <Route path="/user" component={User}/>
      <Route path="/champion" component={Champion}/>
      <Route path="/line" component={Line}/>
      <Route path="/complex" component={Complex}/>
      <Route path="/item" component={Item}/>
      <Route path="/leader" component={Leader}/>
      </div>
     </Router>   

     
     </>
    );
}

export default Header;