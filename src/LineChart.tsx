import { Ticks } from 'chart.js'
import React from 'react'

import { Line } from 'react-chartjs-2'



export const LineChartFunction = () => {
    const data = {
        labels: ['jan', 'feb', 'march', 'april', 'may'],
        datasets: [
            {
                label: 'total sell($)',
                data: [20, 2, 4, 9, 5],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(153, 102, 255, 1)',
                pointBorderColor: 'rgba(75, 192, 192, 1)',

            }
        ]

    };


    return (
        <Line data={data}  options={{

            maintainAspectRatio : false,
           
            scales: {
                yAxes: 
                    {
                        ticks: {
                            stepSize: 4
    
    
                        }
                    }
                
            }
            
        }}  />
    )



}