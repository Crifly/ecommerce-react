import { Button, Container, Grid, TextField } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {FoodCategory} from '../table'
import { view } from '@risingstack/react-easy-state';


export const CategoryFunction = view(() => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <> 
            <div style={{margin: isMatch ? '10px' : '100px'}} >
                <Grid container>
                    <Grid item xs={12} md={4} >
                        <div style={{height:'auto',border:'1px solid #EEF0F6',borderRadius:'10px',paddingBottom:'5px'}} >
                            <p style={{padding: isMatch ? '15px' :'18px' ,borderBottom:'1px solid #EEF0F6 '}} >
                                Add New Category
                            </p>

                            <p style={{margin:isMatch ? '20px' :'20px',fontSize:'15px'}} >
                                Name
                            </p>
                           
                            <TextField fullWidth size="small" variant="outlined" placeholder="Name" style={{maxWidth:'90%',marginLeft:'20px',marginRight:'20px'}} >

                            </TextField>
                           

                            <p style={{margin:isMatch ? '20px' :'20px',display:'flex',alignItems:'center',fontSize:'15px'}} >
                                Image <span style={{color:'red',marginLeft:'5px'}} > *(Ratio 1.1)</span>
                            </p>
                            
                            <TextField size="small" variant="outlined" placeholder="Choose File" fullWidth style={{maxWidth:'90%',marginLeft:'20px',marginRight:'20px'}} >
                                   
                            </TextField>

                            <div style={{maxWidth: isMatch ? '70%' :'70%' ,margin:'auto',marginTop:'20px'}} >
                                <img width="100%" height="100%" style={{borderRadius:'10px',border:'1px solid black'}} src="https://demo.6amtech.com/stackfood/public/assets/admin/img/900x400/img1.jpg" alt="" />
                            </div>

                            
                                <Button size="small" variant="contained" color="primary" style={{padding:'10px',margin:'25px'}} >
                                    Submit
                                </Button>
                            

                        </div>
                    </Grid>

                    <Grid item xs={12} md={8} >
                        <div style={{marginLeft: isMatch ? '10px' : '30px',border:'1px solid #EEF0F6',borderRadius:'10px',paddingBottom:'10px'}} >
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px',borderBottom:'1px solid #EEF0F6'}} >
                                <p style={{maxWidth:'50%'}} >
                                    category list 
                                </p>
                                <TextField style={{maxWidth:'50%'}}
                                 placeholder="search" variant="standard" />
                            </div>
                            <div style={{height:'auto',margin:'15px'}} >
                                <FoodCategory/>
                            </div>
                       </div>
                    </Grid>

                </Grid>
            </div>
        </>
    )
})


// sub category

export const SubCategory = view(() => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return(
        <> 
             <div style={{margin: isMatch ? '10px' : '100px'}} >
                <Grid container>
                    <Grid item xs={12} md={4} >
                        <div style={{height:'auto',border:'1px solid #EEF0F6',borderRadius:'10px',paddingBottom:'5px'}} >
                            <p style={{padding: isMatch ? '15px' :'18px' ,borderBottom:'1px solid #EEF0F6 '}} >
                                Add Sub Category
                            </p>

                            <p style={{margin:isMatch ? '20px' :'20px',fontSize:'15px'}} >
                                Main Category
                            </p>
                           
                            <TextField fullWidth size="small" variant="outlined" placeholder="Main Category" style={{maxWidth:'90%',marginLeft:'20px',marginRight:'20px'}} >

                            </TextField>
                           

                            <p style={{margin:isMatch ? '20px' :'20px',fontSize:'15px'}} >
                                Sub Category
                            </p>
                           
                            <TextField fullWidth size="small" variant="outlined" placeholder="Sub Category" style={{maxWidth:'90%',marginLeft:'20px',marginRight:'20px'}} >

                            </TextField>

                            

                            
                                <Button size="small" variant="contained" color="primary" style={{padding:'10px',margin:'25px'}} >
                                    Save
                                </Button>
                            

                        </div>
                    </Grid>

                    <Grid item xs={12} md={8} >
                        <div style={{marginLeft: isMatch ? '10px' : '30px',border:'1px solid #EEF0F6',borderRadius:'10px',paddingBottom:'10px'}} >
                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px',borderBottom:'1px solid #EEF0F6'}} >
                                <p style={{maxWidth:'50%'}} >
                                    category list 
                                </p>
                                <TextField style={{maxWidth:'50%'}}
                                 placeholder="search" variant="standard" />
                            </div>
                            <div style={{height:'auto',margin:'15px'}} >
                                <FoodCategory/>
                            </div>
                       </div>
                    </Grid>

                </Grid>
            </div>
        </>
    )
})