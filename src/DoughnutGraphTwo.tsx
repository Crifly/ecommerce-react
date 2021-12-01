import { Ticks } from 'chart.js'
import React from 'react'

import { Doughnut } from 'react-chartjs-2'



export const DoughnutChartFunctionTwo = () => {
    const data = {
        labels: ['food', 'review', 'wishlist',],
        datasets: [
            {
                label: 'total sell($)',
                data: [149, 3, 19],
                backgroundColor:[ 'rgb(44	46	67)','rgba(89	82	96)','rgba(178	177	185)',],
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