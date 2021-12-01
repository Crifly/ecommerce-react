import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export const BulkImportFunction = () => {

    const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <>
            <div style={{ margin: isMatch ? '10px' : '30px', padding: isMatch ? '10px' : '30px', }} >
                <Grid container >
                    <Grid item xs={12} >
                        <p style={{ fontSize: '28px', fontWeight: 'bold' }} >
                            Rastaurant Bulk Import
                    </p>

                    </Grid>
                </Grid>

                {/* sub heading * & instructions*/}

                <div style={{ margin: isMatch ? '5px' : '20px', paddingLeft: isMatch ? '5px' : '20px', }} >
                    <p style={{ fontSize: '18px', fontWeight: 'bold' }} >
                        instructions:
                    </p>

                    <div style={{ marginTop: isMatch ? '5px' : '10px', marginLeft: isMatch ? '8px' : '15px' }} >
                        <ol>
                            <li style={{ marginTop: '15px', }} >
                                <Typography style={{ fontWeight: 'lighter' }} >
                                    Download the format file and fill it with proper data.
                                </Typography>
                            </li>
                            <li style={{ marginTop: '15px' }} >
                                <Typography style={{ fontWeight: 'lighter' }} >
                                    You can download the example file to understand how the data must be filled.
                                </Typography>
                            </li>
                            <li style={{ marginTop: '15px' }} >
                                <Typography style={{ fontWeight: 'lighter' }} >
                                    Once you have downloaded and filled the format file, upload it in the form below and submit.Make sure the phone numbers and email addresses are unique.
                                </Typography>
                            </li>
                            <li style={{ marginTop: '15px' }} >
                                <Typography style={{ fontWeight: 'lighter' }} >
                                    After uploading restaurants you need to edit them and set restaurants's logo and cover.

                                </Typography>
                            </li>
                            <li>
                                <Typography style={{ marginTop: '15px' }} >
                                    You can get category and zone id from their list, please input the right ids.
                                </Typography>
                            </li>
                            <li>
                                <Typography style={{ marginTop: '15px' }} >
                                    You can upload your restaurant images in restaurant folder from gallery, and copy image`s path.
                                </Typography>
                            </li>
                            <li>
                                <Typography style={{ marginTop: '15px' }} >
                                    Default password for restaurant is 12345678.
                                </Typography>
                            </li>
                        </ol>
                    </div>
                </div>


                {/* Submit files  */}

                <div style={{ border: '1px solid #EEF0F6', height: '11rem', marginTop: isMatch ? '20px' : '5rem', borderRadius: '10px' }} >
                    <Grid container >
                        <Grid item xs={12}  >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #EEF0F6' }} >
                                <p>
                                    Import Rastaurants File
                                </p>
                                <Button variant="contained" style={{ backgroundColor: '#71869D' }} >
                                    Download Formate
                                </Button>
                            </div>
                        </Grid>

                        <Grid item xs={12} >
                            <div style={{ padding: '20px', display: 'flex', alignItems: 'center' }} >

                                <Button style={{ fontSize: '12px', textTransform: 'lowercase', paddingLeft: isMatch ? '5px' : '30px', paddingRight: isMatch ? '5px' : '30px' }} size="small" variant="contained" color="inherit" >
                                    Browse...
                                    </Button>
                                <span style={{ color: 'gray', marginLeft: isMatch ? '10px' : '5px' }} >
                                    No File Selected
                                    </span>

                            </div>
                        </Grid>




                    </Grid>
                </div>

                <div style={{ border: '1px solid #EEF0F6', height: '4rem', borderRadius: '10px',display:'flex',alignItems:'center',padding: isMatch ? '10px' :'20px' }} >
                    <Grid container >
                        <Grid item xs={12} >
                            <div  >
                                
                                <Button size="small" variant="contained" color="primary" style={{paddingTop:'10px',paddingBottom:'10px'}} >
                                        Submit
                                </Button>
                                
                            </div>
                        </Grid>
                    </Grid>
                </div>


            </div>
        </>
    )
}