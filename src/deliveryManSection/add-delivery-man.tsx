import { AddCircleOutline, ExpandMore } from '@mui/icons-material';
import { Button, Grid, SliderValueLabel, useMediaQuery, useTheme } from '@mui/material'
import { view } from '@risingstack/react-easy-state';
import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {state} from '../Global-state-holder-component'

export const DeliveryManFunction = view(() => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const [phone,setPhone] = useState<any>('')
    console.log(phone)
    
    return (
        <>
            <div style={{ margin: isMatch ? '2%' : '5%' }} >
                <Grid container spacing={4} >
                    <Grid item xs={12} >
                        <h2 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }} >
                            <AddCircleOutline style={{ marginRight: '10px' }} /> <p> Add New Food </p>
                        </h2>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                First Name
                            </p>
                            <input placeholder="First Name" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Last Name
                            </p>
                            <input placeholder="Last Name" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>
                    </Grid>

                    {/* three fields */}

                    <Grid item xs={12} md={4} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Email
                            </p>
                            <input type="email" placeholder="Email" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Delivery Man
                            </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                <p>Frelancer</p> <ExpandMore />
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Select Zone
                            </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                <p>Zone</p> <ExpandMore />
                            </Button>
                        </div>
                    </Grid>


                    {/* identity type and identity number */}

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Identity Type
                            </p>
                            <Button size="large" fullWidth variant="outlined" style={{ textTransform: 'capitalize', borderColor: '#E7EAF3', color: 'gray', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                <p>Passport</p> <ExpandMore />
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Identity Number
                            </p>
                            <input type="EX: DH-23451" placeholder="Email" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>
                    </Grid>


                    {/* identity iamge */}

                    <Grid item xs={12}>
                        <p style={{ marginBottom: '7px', color: 'gray' }}  >
                            Identity image
                        </p>
                        <div style={{ border: '2px dashed lightgray', paddingRight: '5px', paddingLeft: '5px', borderRadius: '5px', height: '8rem', width: isMatch ? '12rem' : '12rem', margin: isMatch ? 'auto' : '5px' }} >
                            <img width="100%" height="100%" src="https://demo.6amtech.com/stackfood/public/assets/admin/img/400x400/img2.jpg" alt="" />
                        </div>
                    </Grid>

                    {/* login info begin */}

                    <Grid item xs={12} >
                        <div style={{ borderBottom: '1px solid #E7EAF3 ', marginTop: '10px', paddingBottom: '5px' }} >
                            <p style={{ fontSize: '12px', textTransform: 'uppercase', color: 'gray' }} >
                                login info
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Phone
                            </p>

                            <PhoneInput
                                value={phone}
                                onChange={setPhone}
                                enableSearch={true}
                                inputStyle={{width:'100%',height:'40px'}}
                                isValid={(value)=>{
                                    if(value.length == 11){
                                        return' must be 12 digits ' 
                                    }else if (value.length < 11 && value.length >10){
                                        return(false)
                                    }
                                    else{
                                        return(true)
                                        
                                    }

                                }}
                                
                                
                                
                            />
                            {/* <input type="text" placeholder="EX:0303*****" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} >

                            </input> */}
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto' }} >
                            <p style={{ marginBottom: '7px', color: 'gray' }}  >
                                Password
                            </p>
                            <input type="password" placeholder="EX:password" style={{ border: ' 1px solid #E7EAF3', height: '20px', paddingTop: '10px', paddingLeft: '10px', paddingBottom: '10px', borderRadius: '5px' }} />
                        </div>
                    </Grid>


                    {/* delivery man image */}

                    <Grid item xs={12} md={12} >
                        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', margin: 'auto', paddingBottom: '2rem' }} >
                            <p style={{ marginBottom: '7px', display: 'flex', alignItems: 'center' }}  >
                                <span style={{ color: 'gray' }}  > Delivery Man Image </span> <span style={{ color: 'red', fontSize: '12px' }} >*(Ratio 1:1)</span>
                            </p>
                            <Button style={{ borderRadius: '5px', display: 'flex', alignItems: 'center', color: 'black', justifyContent: 'space-between', border: '1px solid #E7EAF3', textTransform: 'capitalize', padding: '0', height: '40px', paddingLeft: '15px', paddingRight: '20px', }} >
                                <p>Chose File</p> <p style={{ borderLeft: '1px solid #E7EAF3', height: '100%', display: 'flex', alignItems: 'center', paddingLeft: '15px' }} >Browse</p>
                            </Button>

                        </div>
                    </Grid>

                    <Grid item xs={12} >
                        <div style={{paddingBottom:'20px',borderBottom:'1px solid #E7EAF3'}} >
                            <div style={{ width: '13rem', margin: 'auto', height: '13rem', border: '1px solid black', borderRadius: '10px', }} >
                                <img style={{ borderRadius: '10px' }} width="100%" height="100%" src="https://demo.6amtech.com/stackfood/public/assets/admin/img/400x400/img2.jpg" alt="" />
                            </div>
                        </div>
                    </Grid>


                    <Grid item xs={12} >
                        <div >
                            <Button variant="contained" size="small" style={{paddingTop:'10px',paddingBottom:'10px'}}  >
                                Submit
                            </Button>
                        </div>
                    </Grid>


                </Grid>
            </div>
        </>
    )
})