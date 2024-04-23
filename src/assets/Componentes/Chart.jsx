import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line} from 'react-chartjs-2';
import React from 'react';
 
 
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
 
const labels = ["1 - semestre", "2 - semestre", "3 - semestre",]
 
const options = {};
 
export const data = {
    labels,
    datasets: [
        {
            label: "ingles",
            data: [32, 42, 51, 60, 51, 95],
            backgroundColor: "#2196F3",
            borderColor: "#2196F3",
        },
        {
            label: "feedback",
            data: [37, 42, 41, 37, 31, 44],
            backgroundColor: "#F44236",
            borderColor: "#F44236",
        },
        {
            label: "media_feedback",
            data: [60, 54, 54, 28, 27, 49],
            backgroundColor: "#FFCA29",
            borderColor: "#FFCA29",
        },
    ],
}
 
 
const Chart = () => {
 
    return (
        <div style={{width: 1000, height:800}}>
           <Line options={options} data={data} />
        </div>
    )
}
 
export default Chart





