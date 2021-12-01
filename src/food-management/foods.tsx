import { AddCircleOutline, ExpandMore, Grain } from '@mui/icons-material';
import { Button, colors, Grid, TextField, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export const FoodsFunction = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <div style={{ margin: isMatch ? '3%' : '10%', border: '1px solid #E7EAF3 ', padding: '20px', borderRadius: '10px' }} >
                <Grid container spacing={4} >
                    <Grid item xs={12} >
                        <h2 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }} >
                            <AddCircleOutline style={{ marginRight: '10px' }} /> <p> Add New Food </p>
                        </h2>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Restaurant Name
                            </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                <p>select restaurant</p> <ExpandMore />
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Name
                            </p>
                            <input placeholder="New_Food" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>
                    </Grid>

                    {/* three fields */}

                    <Grid item xs={12} md={4} >

                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Price
                                </p>
                            <input placeholder="1" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>

                    </Grid>

                    <Grid item xs={12} md={4} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Discount Type
                             </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                <p>percent</p> <ExpandMore />
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} >

                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Discount
                            </p>
                            <input placeholder="0" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>

                    </Grid>

                    {/* two buttons */}

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                category
                             </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                <p>---select---</p> <ExpandMore />
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Sub Category
                             </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                <p>percent</p> <ExpandMore />
                            </Button>
                        </div>
                    </Grid>

                    {/* single line button */}

                    <Grid item xs={12} md={12} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', border: '1px solid lightgray ', padding: '20px', borderRadius: '10px', paddingBottom: '50px' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Attributes
                             </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                                <ExpandMore />
                            </Button>
                        </div>
                    </Grid>

                    {/* single line button without border */}

                    <Grid item xs={12} md={12} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray', display: 'flex', alignItems: 'center' }}  >
                                Addon <Grain />
                            </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} >
                                <ExpandMore />
                            </Button>
                        </div>
                    </Grid>

                    {/* start time and end time */}


                    <Grid item xs={12} md={6} >

                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Available time start
                            </p>
                            <input placeholder="--:---" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>

                    </Grid>

                    <Grid item xs={12} md={6} >

                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Available time end
                            </p>
                            <input placeholder="--:---" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>

                    </Grid>



                    {/* text area / short discription */}

                    <Grid item xs={12} md={12} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', }} >
                            <p style={{ marginBottom: '7px', color: 'gray', display: 'flex', alignItems: 'center' }}  >
                                Short Discription
                            </p>
                            <textarea style={{ borderRadius: '5px', resize: "vertical", border: '1px solid #E7EAF3', textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', height: '5rem', }} />


                        </div>
                    </Grid>

                    {/* chose image */}

                    <Grid item xs={12} md={12} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', borderBottom: '1px solid #E7EAF3', paddingBottom: '2rem' }} >
                            <p style={{ marginBottom: '7px', display: 'flex', alignItems: 'center' }}  >
                                <span style={{ color: 'gray' }}  > Food Image </span> <span style={{ color: 'red', fontSize: '12px' }} >*(Ratio 1:1)</span>
                            </p>
                            <Button style={{ borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'black', justifyContent: 'space-between', border: '1px solid #E7EAF3', textTransform: 'capitalize', padding: '0', height: '40px', paddingLeft: '15px', paddingRight: '20px', }} >
                                <p>Chose File</p> <p style={{ borderLeft: '1px solid #E7EAF3', height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '15px' }} >Browse</p>
                            </Button>

                        </div>
                    </Grid>

                    {/* submit button */}

                    <Grid item xs={12} md={12} >
                        <div style={{ maxWidth: '100%', margin: 'auto', paddingBottom: '2rem' }} >

                            <Button variant="contained" color="primary" style={{ textTransform: 'capitalize', paddingBottom: '8px', paddingTop: '8px' }} >
                                submit
                            </Button>

                        </div>
                    </Grid>

                </Grid>
            </div>
        </>
    )
}