import { Button } from '@mui/material'
import React from 'react'
import { state } from '../global-state'
import { view } from '@risingstack/react-easy-state'
import { ExpandMore } from '@mui/icons-material'



export const CategoryDawer = view(() => {
    return (
        <>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
                {

                    state.categoryFishAndMeat.map(x => (

                        <Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',margin:'10px' }} >
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
                                <img width="20px" height="20px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75" alt="" />
                                <p style={{fontSize:'14px',textTransform:'capitalize',marginLeft:'10px'}} >
                                    {x.name}
                                </p>
                            </div>
                            <ExpandMore />
                        </Button>

                    ))

                }

            </div>

        </>
    )
})