import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography, } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { view } from '@risingstack/react-easy-state'
import { state } from './Global-state-holder-component'
import './OrderDetail.css'
import { BorderBottom, Close, MailOutline, MapOutlined, Mode, ModeEdit, NavigateBefore, NavigateNext, PhoneAndroid } from '@mui/icons-material'
import { parse } from 'url'
import classes from '*.module.css'

const string = window.location.pathname.split('/')[2];

let id = parseInt(string)



const useStyles = makeStyles({
    topScrollPaper: {
        alignItems: "flex-start"
    },
    topPaperScrollBody: {
        verticalAlign: "top"
    },
    position: {
        left: 10,
        top: 10,
    }
});




export const OrdersDetailFunction = view(() => {
    const [isDialogOpen, SetIsDialogOpen] = useState<any>(false);


    return (
        <>

            <Grid container >
                <Grid item xs={12} >
                    <div style={{ margin: '50px' }} >
                        <Typography>
                            <span style={{ color: 'gray', fontSize: '12px' }} >Orders / </span> <span style={{ fontSize: '12px', paddingLeft: '2px' }} >Order / Details</span>
                        </Typography>
                    </div>
                </Grid>
            </Grid>


            {



                state.ordersList.filter(x => x.id === id).map(
                    x => (


                        <Grid container  >
                            <Grid item md={11} xs={12} >
                                <div className="sub-heading-div-margin" style={{ display: 'flex', alignItems: 'center' }} >
                                    <div className="sub-heading-font-size-order-style" style={{ fontWeight: 'bold' }} >
                                        order#{x.order}
                                    </div>
                                    <div className="sub-heading-unpaid-accepted-font-size-style"  >
                                        unpaid
                              </div>
                                    <div className="sub-heading-unpaid-accepted-font-size-style"  >
                                        accepted
                              </div>


                                </div>




                                <div className="margin-and-display" style={{ display: 'flex', alignItems: 'center' }} >
                                    <Grid container >
                                        <Grid item lg={1} md={3} xs={5} >
                                            <Button size="small" style={{ textTransform: 'lowercase' }} >
                                                Prit invoice
                                    </Button>
                                        </Grid>
                                        <Grid item lg={9} md={7} xs={7}  >
                                            <Button variant="contained" color="info" size="small" style={{ textTransform: 'lowercase' }} >
                                                show location on map
                                    </Button>
                                        </Grid>
                                        <Grid item md={2} xs={12} >
                                            <Button size="small" variant="outlined" >
                                                Status
                                    </Button>
                                        </Grid>
                                    </Grid>
                                </div>




                            </Grid>

                            <Grid item xs={12} md={1} >

                                <p className="navigate-before-style" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                                    <IconButton>
                                        <NavigateBefore style={{ color: 'blue' }} />
                                    </IconButton>
                                    <IconButton>
                                        <NavigateNext style={{ color: 'blue' }} />
                                    </IconButton>
                                </p>

                            </Grid>

                        </Grid>


                        // cards section


                    )
                )
            }

            {
                state.ordersList.filter(x => x.id === id).map(x => (
                    <Grid container >
                        <Grid item xs={12} md={8} >
                            <div style={{ height: 'auto', border: '2px solid #EEF0F6', borderRadius: '10px', margin: '20px' }} >
                                <div style={{ height: '1rem', borderBottom: '2px solid #EEF0F6', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <p>order detail</p>
                                    <Button size="small" variant="contained" style={{ display: 'flex', alignItems: 'center', textTransform: 'lowercase' }} >
                                        <Mode style={{ fontSize: '14px', marginRight: '10px' }} />  edit
                                    </Button>
                                </div>

                                <div style={{ height: 'auto', borderBottom: '1px solid #EEF0F6', paddingTop: '15px', paddingRight: '15px', paddingLeft: '15px', paddingBottom: '30px' }} >
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                        <Grid item xs={12} md={6}  >
                                            <p className="font-size" style={{ color: 'gray', wordWrap: 'break-word' }} >
                                                order note:
                                    </p>
                                        </Grid>
                                        <Grid item xs={12} md={6} >
                                            <p className="font-size" style={{ color: 'gray', display: 'flex', justifyContent: 'flex-end' }} >
                                                Payment Method : {x.paymentMethod} <br />

                                            </p>
                                        </Grid>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }} >
                                        <p style={{ fontSize: '13px', color: 'gray' }}> Reference Code: <span style={{ marginLeft: '10px' }} ><Button variant="outlined" size="small"  >Add</Button></span> </p>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }} >
                                        <p style={{ fontSize: '13px', color: 'gray' }}> Reference Code: <span style={{ color: 'blue', fontSize: '12px', backgroundColor: '#EAF2FF', paddingLeft: '5px', paddingRight: '5px', paddingTop: '2px', paddingBottom: '2px', borderRadius: '5px' }} > {x.orderType} </span> </p>
                                    </div>

                                </div>


                                <div style={{ height: 'auto', borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center' }} >
                                    <Grid item container >
                                        <Grid item xs={12} md={6} className="img-div-margin-and-padding-style" >
                                            <p style={{ fontSize: '14px', color: 'gray', display: 'flex', alignItems: 'center' }} >
                                                <span style={{ width: '60px', height: '60px' }} ><img width="100%" src={x.image} alt="pic" />  </span> <span style={{ marginLeft: '10px', }} >  <p>buger king chese</p> <p>  variation: </p>  <p> type: {x.type} </p>  <p> price: {x.total} </p></span>
                                            </p>
                                        </Grid>

                                        <Grid item xs={4} md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                            <div className="margin-top-on-exstra-small" >
                                                <p> $ {x.total} </p>
                                            </div>
                                        </Grid>

                                        <Grid item xs={4} md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                            <div className="margin-top-on-exstra-small"  >
                                                <p> {x.quantity} </p>
                                            </div>
                                        </Grid>

                                        <Grid item xs={4} md={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                            <div className="margin-top-on-exstra-small"  >
                                                $ {x.total}
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>

                                <div>
                                    <Grid container >
                                        <Grid item xs={12}   >
                                            <div className="total-div-margin" style={{ display: 'flex', flexDirection: 'column' }} >

                                                <div className="item-price-direction-column-on-small"  >

                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', }} >
                                                        Item Price:
                                                        </p>


                                                    <p className="total-margin-top-on-small-screen" style={{ fontSize: '15px', color: 'gray' }} >
                                                        $ {x.total}
                                                    </p>

                                                </div>

                                                <div className="item-price-direction-column-on-small" style={{ marginTop: '20px', }}  >

                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', }} >
                                                        Adon Cost:
                                                        </p>


                                                    <p className="total-margin-top-on-small-screen" style={{ fontSize: '15px', color: 'gray' }} >
                                                        $ 0
                                                        </p>


                                                </div>

                                                <div className="border-bottom-under-two-divs" >

                                                </div>
                                                {/* sub total */}
                                                <div className="item-price-direction-column-on-small" style={{ marginTop: '20px', }}  >

                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', }} >
                                                        Sub total:
                                                    </p>


                                                    <p className="total-margin-top-on-small-screen" style={{ fontSize: '15px', color: 'gray' }} >
                                                        $ {x.total}
                                                    </p>


                                                </div>

                                                <div className="item-price-direction-column-on-small" style={{ marginTop: '20px', }}  >

                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', }} >
                                                        Discount:
                                                    </p>


                                                    <p className="total-margin-top-on-small-screen" style={{ fontSize: '15px', color: 'gray' }} >
                                                        $ 0
                                                    </p>


                                                </div>

                                                <div className="item-price-direction-column-on-small" style={{ marginTop: '20px', }}  >

                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', }} >
                                                        Coupon Discount:
                                                    </p>


                                                    <p className="total-margin-top-on-small-screen" style={{ fontSize: '15px', color: 'gray' }} >
                                                        $ 0
                                                    </p>


                                                </div>

                                                <div className="item-price-direction-column-on-small" style={{ marginTop: '20px', }}  >

                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', }} >
                                                        VAT/TAX:
                                                    </p>


                                                    <p className="total-margin-top-on-small-screen" style={{ fontSize: '15px', color: 'gray' }} >
                                                        + $ 10.4
                                                    </p>


                                                </div>

                                                <div className="item-price-direction-column-on-small" style={{ marginTop: '20px', }}  >

                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', }} >
                                                        Delivery Fee:
                                                    </p>


                                                    <p className="total-margin-top-on-small-screen" style={{ fontSize: '15px', color: 'gray' }} >
                                                        + $ 0
                                                    </p>


                                                </div>

                                                {/* divider */}

                                                <div className="border-bottom-under-two-divs" >

                                                </div>

                                                {/* $ total bill  */}

                                                <div className="item-price-direction-column-on-small" style={{ marginTop: '20px', }}  >

                                                    <p style={{ fontSize: '15px', fontWeight: 'bold', }} >
                                                        Total:
                                                    </p>


                                                    <p className="total-margin-top-on-small-screen" style={{ fontSize: '15px', color: 'gray' }} >
                                                        + $ {x.total}
                                                    </p>


                                                </div>

                                            </div>


                                        </Grid>
                                    </Grid>
                                </div>




                            </div>
                        </Grid>

                        <Grid item xs={12} md={4} >
                            <div style={{ height: 'auto', margin: '20px', border: '1px solid #EEF0F6', borderRadius: '10px' }} >


                                <div style={{ height: '1rem', borderBottom: '1px solid #EEF0F6', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <p>Delivery Man</p>

                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', }} >
                                    <Button variant="contained" style={{ padding: '10px', textTransform: 'capitalize' }} onClick={() => {
                                        SetIsDialogOpen(true)
                                    }} >
                                        Asign delivery man manually
                                    </Button>
                                </div>

                            </div>

                            {/* customer detail section */}

                            <div style={{ height: 'auto', margin: '20px', border: '1px solid #EEF0F6', borderRadius: '10px', }} >
                                <div style={{ height: '1rem', borderBottom: '1px solid #EEF0F6', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <p>Customer</p>

                                </div>


                                {
                                    state.customerList.map(x => (
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', margin: '20px', borderBottom: '1px solid #E7EAF3',paddingBottom:'15px' }} >
                                                <Avatar>
                                                    <img src={x.profilePic} alt="d.p" />
                                                </Avatar>
                                                <p style={{ marginLeft: '10px', color: 'gray' }} >
                                                    {x.name} <br />
                                                    <span style={{ fontSize: '10px' }} > 3 orders </span>
                                                </p>
                                            </div>

                                            <div className="contact-info-margin" style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #E7EAF3', paddingBottom: '20px' }} >
                                                <p style={{ fontSize: '15px' }} >
                                                    contact info
                                                    </p>
                                                <p style={{ display: 'flex', alignItems: 'center', marginTop: '10px', color: 'gray', fontSize: '15px' }} >
                                                    <MailOutline /> <p style={{ marginLeft: '20px' }} > {x.email}  </p>
                                                </p>
                                                <p style={{ display: 'flex', alignItems: 'center', marginTop: '10px', color: 'gray', fontSize: '15px' }} >
                                                    <PhoneAndroid /> <p style={{ marginLeft: '20px' }} > {x.mobileNumber} </p>
                                                </p>
                                            </div>

                                            <div className="contact-info-margin" style={{ display: 'flex', flexDirection: 'column', paddingBottom: '20px' }} >
                                                <p style={{ fontSize: '15px' }} >
                                                    Delivery Info
                                                    </p>
                                                <p style={{ display: 'flex', alignItems: 'flex-start', marginTop: '10px', color: 'gray', fontSize: '15px' }} >
                                                    Name: {x.name}

                                                </p>
                                                <p style={{ display: 'flex', alignItems: 'flex-start', marginTop: '5px', color: 'gray', fontSize: '15px' }} >
                                                    Contact: {x.mobileNumber}

                                                </p>
                                                <p style={{ display: 'flex', alignItems: 'center', marginTop: '5px', color: 'blue', fontSize: '15px' }} >
                                                    <MapOutlined style={{ width: '15px', height: '15px' }} />  {x.deliveryLocation}

                                                </p>

                                            </div>

                                        </div>

                                    ))
                                }


                            </div>

                            {/* retaurant detail */}


                            <div style={{ height: 'auto', margin: '20px', border: '1px solid #EEF0F6', borderRadius: '10px', paddingBottom: '5px' }} >
                                <div style={{ height: '1rem', borderBottom: '1px solid #EEF0F6', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                    <p>Rasturant</p>

                                </div>


                                {
                                    state.customerList.map(x => (
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', margin: '20px', borderBottom: '1px solid #E7EAF3', paddingBottom: '15px' }} >
                                                <Avatar>
                                                    <img src={x.profilePic} alt="d.p" />
                                                </Avatar>
                                                <p style={{ marginLeft: '10px', color: 'gray' }} >
                                                    {x.name} <br />
                                                    <span style={{ fontSize: '10px' }} > 3 orders </span>
                                                </p>
                                            </div>

                                            <div className="contact-info-margin" style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #E7EAF3', paddingBottom: '20px' }} >
                                                <p style={{ fontSize: '15px' }} >
                                                    contact info
                                                    </p>
                                                <p style={{ display: 'flex', alignItems: 'center', marginTop: '10px', color: 'gray', fontSize: '15px' }} >
                                                    <MailOutline /> <p style={{ marginLeft: '20px' }} > {x.email}  </p>
                                                </p>
                                                <p style={{ display: 'flex', alignItems: 'center', marginTop: '10px', color: 'gray', fontSize: '15px' }} >
                                                    <PhoneAndroid /> <p style={{ marginLeft: '20px' }} > {x.mobileNumber} </p>
                                                </p>
                                            </div>

                                            <div className="contact-info-margin" style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #E7EAF3', paddingBottom: '20px' }} >
                                               

                                                <p style={{ display: 'flex', alignItems: 'center', marginTop: '5px', color: 'blue', fontSize: '15px' }} >
                                                    <MapOutlined style={{ width: '15px', height: '15px' }} />  {x.deliveryLocation}

                                                </p>

                                            </div>

                                        </div>

                                    ))
                                }


                            </div>

                        </Grid>
                    </Grid>
                )
                )
            }

            {/* dialog for assigning delivery man */}

            <Dialog style={{ borderRadius: '30px' }} maxWidth="md" fullWidth aria-labelledby="simple-dialog-title" scroll="paper" open={isDialogOpen} >

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }} >
                    <div>
                        <p>Asign Deliveryman</p>
                    </div>

                    <div>
                        <IconButton onClick={() => {
                            SetIsDialogOpen(false)
                        }} >
                            <Close />
                        </IconButton>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '20px' }} >

                    <div className="dialog-list-item" style={{ display: 'flex', flexDirection: 'column', border: '1px solid lightgray', borderRadius: '10px', }} >

                        {
                            state.deliverymanList.map(x => (
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', borderBottom: '1px solid lightgray', }} >
                                    <div className="list-item-padding" style={{ width: '60%', display: 'flex', alignItems: 'center' }} >
                                        <Avatar  >
                                            <img src={x.picture} alt="" />
                                        </Avatar>
                                        <p style={{ marginLeft: '10px' }} >
                                            {x.name}
                                        </p>
                                    </div>

                                    <div className="list-item-padding" style={{ width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} >
                                        <Button variant="contained" size="small" >
                                            asign
                                        </Button>
                                    </div>

                                </div>
                            ))
                        }


                    </div>


                    {/* right hand side div for map */}


                    <div className="map-img-width-setting" >
                        <div>
                            <img width="100%" src="https://i0.wp.com/flightconnection.net.pk/wp-content/uploads/2016/08/IMG-Worlds-Location.jpg" alt="" />
                        </div>
                    </div>


                </div>

            </Dialog>








        </>
    )
})