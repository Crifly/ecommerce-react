import { Ticks } from 'chart.js'
import React from 'react'

import { Doughnut } from 'react-chartjs-2'



export const DoughnutChartFunction = () => {
    const data = {
        labels: ['Customer', 'Rasturant', 'Deleveryman',],
        datasets: [
            {
                label: 'total sell($)',
                data: [6, 15, 7],
                backgroundColor:[ 'rgb( 98	131	149)','rgba(5 80 82)','rgba(83	184	187)',],
                borderColor: 'rgba(255, 99, 132, 1)',
               
            }
        ]

    };


    return (
        <Doughnut data={data}  options={{

            maintainAspectRatio : false,
           
           
            
        }}  />
    )



}