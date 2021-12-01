import { ExpandMore, GridOn, HorizontalRule } from '@mui/icons-material'
import { Button, Grid, TextField, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import {FoodsList} from '../table'



export const FoodsListFunction = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <div style={{ margin: isMatch ? '1%' : '7%' }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={8} md={9}>
                        <div >

                            <h2>
                                Food List
                            </h2>


                        </div>
                    </Grid>


                    <Grid item md={3} sm={4} xs={12}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: isMatch ? 'flex-start' : 'flex-end' }} >

                            <Button fullWidth size="large" variant="outlined" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray' }} >
                                <p >
                                    All Restaurnat
                                </p>
                                <ExpandMore />
                            </Button>


                        </div>
                    </Grid>



                </Grid>

                {/* table */}
                <div style={{ margin: '2%', border: '1px solid #E7EAF3', padding: '20px', paddingBottom: '40px', borderRadius: '10px' }} >
                    <Grid container spacing={1} >
                        <Grid item xs={12} md={7} >
                            <div>
                                <TextField variant="standard" placeholder="search" style={{ width: isMatch ? '100%' : '30%' }} />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={3} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }} >
                                <Button fullWidth size="large" variant="outlined" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray' }} >
                                    <p >
                                        All Category
                                    </p>
                                    <ExpandMore />
                                </Button>


                            </div>
                        </Grid>

                        <Grid item xs={12} md={2} >
                            
                                <Button variant="outlined" size="large" style={{ display:'flex',alignItems:'center',borderColor: '#E7EAF3', marginLeft: '10px',color:'gray' }}  >
                                    <HorizontalRule style={{marginRight:'10px'}} /> <p style={{textTransform:'capitalize'}} > Columns </p>
                                </Button>
                                
                            
                        </Grid>

                    </Grid>

                    <Grid item xs={12} >
                        <div style={{marginTop:'5px'}} >
                            <FoodsList/>
                       </div>
                    </Grid>

                </div>

            </div>
        </>
    )
}