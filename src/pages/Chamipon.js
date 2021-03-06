import React, { useState, useEffect, useCallback, createContext } from 'react';
import './champion.css';
import ChampionList from '../components/championcomponents/ChampionList';
import axios from 'axios';
import ChampionGrapList from '../components/Graphs/ChampionGrapList';
import OutCome from '../components/complex/OutCome';
import Test from '../components/searchcomponents/Test';

export const Select = createContext('');
function Chamipon() {
    const [champions, setChampions] = useState([]);
    const [championName, setchampionName] = useState('');
    const [isClicked, setClicked] = useState(0);
    const [imageUrl, setImageUrl] = useState('');

    const onClick = (e) => {
        setClicked(() => e.target.id);
        setImageUrl(() => e.target.src);   
    };
    const onChange = (e) => {
        console.log(e.target.value);
        setchampionName(e.target.value);
    };
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/champion');
                console.log(response.data);
                setChampions(response.data); // 데이터는 response.data 안에 들어있습니다.
            } catch (e) {
                console.error(e);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <div className='cpSearch'>
                <input
                    className='cpInput'
                    placeholder='챔피언 이름을 입력해주세요.'
                    onChange={onChange}
                />
                <button type='submit' className='cpBtn'>
                    검색하기
                </button>
                <div>
                    {/* <Select.Provider value={isClicked}>
                        <ChampionGrapList />
                    </Select.Provider> */}
                </div>
            </div>   

            <div className='backPic'>
                <div className='champBox'>
                    <ChampionList
                        chamipons={champions}
                        championName={championName}
                        onClick={onClick}
                        className='championBox'
                    />
                </div>

                <img className='champPic'  src = {imageUrl}/>
                <div className='champRate'><Test id = {isClicked}/></div>

                

            </div>

            
                
        </div>
    );
}

export default Chamipon;
