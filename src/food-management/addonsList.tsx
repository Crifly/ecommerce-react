import { ExpandMore } from '@mui/icons-material';
import { Button, Grid, TextField, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useFormControl } from '@mui/material/FormControl';
import { AddonList } from '../table'


export const ListFunction = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <div style={{ margin: isMatch ? '5%' : '5%' }} >
                <div>
                    <p style={{ fontSize: '30px', paddingBottom: '3%' }} >
                        Addon
                    </p>
                </div>
                <Grid container spacing={4} >
                    <Grid item md={4} xs={12} >
                        <div style={{ height: 'auto', border: '1px solid #EEF0F6', borderRadius: '10px', paddingBottom: '5px' }} >
                            <p style={{ padding: isMatch ? '15px' : '18px', borderBottom: '1px solid #EEF0F6 ' }} >
                                Add New Addon
                            </p>

                            <p style={{ margin: isMatch ? '20px' : '20px', fontSize: '15px' }} >
                                Rastaurant
                            </p>

                            <Button color="primary" fullWidth variant="outlined" style={{ paddingTop: '7px', paddingBottom: '7px', textTransform: 'capitalize', maxWidth: '90%', marginLeft: '20px', marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                <p> Select rastaurant </p>
                                <ExpandMore />
                            </Button>

                            <p style={{ margin: isMatch ? '20px' : '20px', fontSize: '15px' }} >
                                Name
                            </p>

                            <TextField size="small" variant="outlined" placeholder="New Addon" fullWidth style={{ maxWidth: '90%', marginLeft: '20px', marginRight: '20px' }} >

                            </TextField>

                            <p style={{ margin: isMatch ? '20px' : '20px', fontSize: '15px' }} >
                                Price
                            </p>

                            <TextField size="small" variant="outlined" placeholder="100" fullWidth style={{ maxWidth: '90%', marginLeft: '20px', marginRight: '20px' }} >

                            </TextField>

                            <Button size="small" variant="contained" color="primary" style={{ padding: '10px', margin: '25px' }} >
                                Save
                            </Button>


                        </div>
                    </Grid>

                    {/* right side item */}


                    <Grid item md={8} xs={12} >
                        <div style={{border:'1px solid #EEF0F6',paddingBottom:'20px',borderRadius:'10px'}} >

                            <div style={{ padding:'20px' ,display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EEF0F6' }} >
                                <p style={{maxWidth:'50%'}} >
                                    Addon List
                                </p>
                                <Button   variant="outlined" style={{borderColor:'#EDEFF6',textTransform:'capitalize',minWidth:'30%',display:'flex',alignItems:'center',justifyContent:'space-between'}} >
                                    <p>
                                        All Restaurants
                                    </p>
                                    <ExpandMore />
                                </Button>
                            </div>

                            <div style={{padding:'20px'}} >
                                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingBottom:'10px'}} >
                                    <TextField   style={{maxWidth:'40%'}} variant="standard"  placeholder="search" />
                                    <Button variant="outlined" style={{textTransform:"capitalize",maxWidth:'20%',borderColor:'#EDEFF6'}} >
                                        column
                                    </Button>
                                </div>
                                <AddonList />
                            </div>

                        </div>
                    </Grid>


                </Grid>
            </div>
        </>
    )
}