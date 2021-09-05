import React, {useRef, useEffect} from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from "react-chartjs-2";

const data = {
  labels: ["0-10", "10-20", "20-30", "30-40", "40-"],
  datasets: [
    {
      label: "Tier graph",
      data: [33, 325, 35, 51, 354],
      fill: false,
      borderColor: "cornflowerblue"
    }
  ]
};

function Test(){
    return(
        <div>
                  <Line width='450' height='200' data={data} />
        </div>
    );
}

export default Test;