import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { state } from '../global-state'
import { view } from '@risingstack/react-easy-state'
import { ChevronRight, ExpandMore } from '@mui/icons-material'



export const CategoryDawer = view(() => {
    const [isCategorySelected,setIsCategorySelected] = useState(false)

    return (
        <>
            <div style={{ width:'100%', display: 'flex', flexDirection: 'column',paddingRight:'15px', }} >
                {

                    state.categoryFishAndMeat.map(x => (

                        <Button  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',margin:'7px' }} >
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
                                <img width="15px" height="15px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75" alt="" />
                                <Typography noWrap style={{fontSize:'15px',textTransform:'capitalize',marginLeft:'10px',color:'black',}} >
                                    {x.name}
                                </Typography>
                            </div>
                            {
                                state.getQuantityInCart(x.id) < 0 ? <ExpandMore style={{color:'gray',fontSize:'18px'}} /> : <ChevronRight style={{color:'gray',fontSize:'18px'}} />
                            }
                        </Button>

                    ))

                }

            </div>

        </>
    )
})