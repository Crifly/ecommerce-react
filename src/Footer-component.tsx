import { Copyright, Home } from '@mui/icons-material'
import { Button, Grid, IconButton } from '@mui/material'
import React from 'react'
import './Footer-component-style.css'

export const Footer = () => {
    return (
        <>
            <Grid container>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="Footer-grid-item-div-style" style={{ display: 'flex', alignItems: 'center' }}>
                        <Grid container >
                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                <p style={{ display: 'flex', alignItems: 'center', color: 'gray', fontSize: '14px' }} >
                                    <Copyright fontSize="small" />
                                     Stack-food.demo @ 2021
                                </p>
                            </Grid>

                            <Grid item lg={6} md={6} sm={6} xs={12} >
                                <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}} >
                                    <Button size="small" style={{color:'gray',marginRight:'10px'}} >
                                        Bussiness setup
                                    </Button>
                                    <Button size="small" style={{color:'gray',marginRight:'10px'}} >
                                        Profile
                                    </Button>
                                    <IconButton style={{marginRight:'10px',display:'flex',alignItems:'center',backgroundColor:'lightblue',marginBottom:'5px'}} >
                                        <Home/>
                                    </IconButton>
                                </div>            
                            </Grid>


                        </Grid>
                    </div>
                </Grid>




            </Grid>
        </>
    )
}