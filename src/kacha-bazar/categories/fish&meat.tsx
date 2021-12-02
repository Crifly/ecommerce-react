import { Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { AppBarOne } from '../app-bar'
import { CategoryDawer } from '../categories/category-drawer'
import {CategoryFishAndMeatCards} from '../product-card'



export const FishAndMeat = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <Grid container >
                <Grid item xs={12} >
                    <div style={{ marginBottom: '0px' }} >
                        <AppBarOne />
                    </div>
                </Grid>
            </Grid>

            <div style={{ height: '100rem', width: '100%', backgroundColor: '#F9FAFB', padding: '6rem' }} >
                <div style={{ width: '100%', height: 'auto', }} >
                    {
                        isMatch ?

                            <div>

                            </div>

                            :

                            <div>
                                <Grid container >

                                    <Grid item lg={3} >
                                        <div style={{ backgroundColor: 'white', padding: '10px', width: '85%', margin: 'auto' }} >
                                            <CategoryDawer />
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} md={12} lg={9} >
                                        <CategoryFishAndMeatCards/>
                                    </Grid>
                                </Grid>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}