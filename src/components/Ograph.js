import React from 'react';
import {VictoryBar} from 'victory';

const data = [
    { vacationSpot: "산", vote: 50 },

  ];

const Chart = () => {
    return (
      <div>
        <VictoryBar horizontal data={data} x="vacationSpot" y="vote" />
      </div>
    );
  };

function Ograph(){
    return(
        <div>

        <VictoryBar horizontal data={data} x="vacationSpot" y="vote" width='250' height='10' />

        </div>
    );
}

export default Ograph;