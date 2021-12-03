import { Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { state } from '../global-state'
import { AppBarOne } from '../app-bar'
import { CategoryDawer } from '../categories/category-drawer'
import { CategoryFishAndMeatCards } from '../product-card'
import { ExpandMore } from '@mui/icons-material'
import { FooterKachaBazar } from '../footer-kacha-bazar'



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


            <div style={{ height: 'auto', width: '100%', backgroundColor: '#F9FAFB', padding:isMatch ? '10px' : '6rem' }} >

                <div style={{ width: '100%', height: 'auto', }} >
                    {
                        isMatch ?

                            <div>
                                <Grid container  >
                                    <Grid item xs={15}     >
                                        <CategoryFishAndMeatCards />
                                    </Grid>
                                </Grid>
                            </div>

                            :

                            <div>
                                <Grid container spacing={1} >

                                    <Grid item lg={3} md={4} >
                                        <div style={{ marginBottom: '10px', marginLeft: '18px', marginTop: '10px', }} >
                                            <p style={{ textTransform: 'capitalize', fontSize: '18px' }} >
                                                categories
                                            </p>
                                        </div>
                                        <div style={{ backgroundColor: 'white', padding: '10px', width: '85%', margin: 'auto' }} >

                                            <CategoryDawer />
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} md={8} lg={9} >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '10px', }} >
                                            <div  >
                                                <p style={{ textTransform: 'capitalize', fontSize: '14px' }} >
                                                    total <span style={{ fontWeight: 'bold' }} > {state.fishAndMeatsList.length} </span> items found
                                                </p>

                                            </div>
                                            <div>
                                                <Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'capitalize', color: 'black' }} >
                                                    <p>
                                                        sort by price
                                                    </p>
                                                    <ExpandMore />
                                                </Button>
                                            </div>
                                        </div>
                                        <CategoryFishAndMeatCards />
                                    </Grid>
                                </Grid>
                            </div>
                    }
                </div>


            </div>

            {/* FOOTER */}

            <div style={{ marginBottom: '100px', width: '100%' }} >
                <FooterKachaBazar />
            </div>
        </>
    )
}