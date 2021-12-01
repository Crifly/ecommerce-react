import React, { useState } from 'react'
import { Box, Button, IconButton, Toolbar, Typography, AppBar, styled, Paper, makeStyles, useTheme, TextField } from '@mui/material'
import Grid from '@mui/material/Grid';
import './App-bar.css'
import { lightBlue } from '@mui/material/colors';
import { FirstPage, ShoppingCart, Person, ExpandMore, List, EmojiPeople, Search, CheckCircle, DeleteForever, HailRounded, LoopOutlined, DinnerDining, Dining, StarBorder, WineBar, TwentyTwoMp, TrackChanges, Texture, Score, Podcasts, People } from '@mui/icons-material'
import { LineChartFunction } from './LineChart'
import { DoughnutChartFunction } from './DoughnutGraph'
import { DoughnutChartFunctionTwo } from './DoughnutGraphTwo'
import {Footer} from './Footer-component'
import {Drawer} from './Drawer-Component'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,



}));





export const Appbar = () => {



  return (
    <>
      <Grid container>
        <Grid item style={{ padding: '25px', }} xs={12} lg={2} md={6}>
          <img className="logo-style" src="https://demo.6amtech.com/stackfood/storage/app/public/business/2021-08-20-611fc89a8d30b.png" alt="logo" />
        </Grid>

        <Grid style={{ height: '60px' }} item container xs={12} lg={10} md={6} alignItems="center" justifyContent="space-between" className="border-bottom" >
          <Grid item>
            <IconButton >
              <FirstPage />
            </IconButton >
          </Grid>
          <Grid item >

            <IconButton>
              <ShoppingCart />
            </IconButton>

            <IconButton style={{ marginRight: '20px' }}>
              <Person />
            </IconButton>

          </Grid>
        </Grid>

      </Grid>

      {/* BODY  */}




      {/* Content Grid */}
      <Grid container>

        {/* Drawer */}
        <Grid item lg={2} md={false} sm={false} xs={false}>
          <div className="drawer-style" style={{ backgroundColor: "#334257" }} >
              <Drawer/>
          </div>
        </Grid>



        {/* Right Body Content */}
        <Grid container item lg={10} md={12} sm={12} xs={12}  >

          {/* Body Header Grid */}
          <Grid container item justifyContent="space-between" alignItems="center" style={{ height: "100px", }}>
            <Grid item lg={6} md={12} sm={12} xs={12} >
              <p style={{ padding: '20px' }} >
                <span className="welcome-font-size" style={{ fontWeight: 'bold' }}> Welcome, John.</span> <br />
                 Hello, here you can manage your orders by zone.
                </p>
            </Grid>

            <Grid item lg={6} md={12} sm={12} xs={12} className="chose-here-text-feild-style" >


              <Button
                variant="outlined"
                size="small"

                style={{ margin: '10px', paddingTop: '0', paddingBottom: '0', width: '17rem', display: "flex", justifyContent: 'space-between' }}
              >
                <p>
                  All Zone
                </p>
                <IconButton>
                  <ExpandMore />
                </IconButton>
              </Button>



            </Grid>



            {/* Body Content Bottom Right first card */}
            <Grid container spacing={2} item style={{ border: '1px solid #EEF0F6', borderRadius: '10px', marginLeft: '30px', marginRight: '30px', marginTop: '10px', marginBottom: '10px' }}>

              {/* Dashboard Order Stats */}
              <Grid container item alignItems="center" style={{}}>
                <Grid item lg={6} sm={6} md={6} xs={6} style={{ marginTop: '0', padding: '10px', }} >

                  <Typography>  <IconButton>
                    <List />
                  </IconButton> Dashboard Order Statistics</Typography>
                </Grid>
                <Grid item lg={6} sm={6} md={6} xs={6} className="chose-here-text-feild-style" >
                  <Button
                    variant="outlined"
                    size="small"

                    style={{ margin: '10px', paddingTop: '0', paddingBottom: '0', display: "flex", justifyContent: 'space-between', overflow: 'wrap' }}
                  >
                    <p>
                      OverAll Statistics
                </p>
                    <IconButton>
                      <ExpandMore />
                    </IconButton>
                  </Button>
                </Grid>



              </Grid>

              {/* CARDS */}
              <Grid container spacing={2} >
                <Grid item lg={3} md={6} sm={12} xs={12}  >

                  <div style={{ margin: '10px', color: 'white', backgroundColor: '#54436B', padding: '10px', borderRadius: '10px', }}>
                    <p>SEARCHING FOR DELIVERYMAN</p>

                    <p style={{ marginTop: '15px' }}>

                      <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>32</span>
                      <span style={{ marginLeft: "50%", }}><IconButton>
                        <EmojiPeople fontSize="large" style={{ color: 'white' }} />
                      </IconButton>
                        <IconButton style={{ margin: '0', padding: '0' }}>
                          <Search style={{ color: 'white' }} />
                        </IconButton>
                      </span>
                    </p>
                  </div>


                </Grid>

                <Grid item lg={3} md={6} sm={12} xs={12}  >

                  <div style={{ margin: '10px', backgroundColor: '#402218', color: 'white', padding: '10px', borderRadius: '10px' }}>
                    <p>ACCEPTED BY DELIVERYMAN</p>

                    <p style={{ marginTop: '15px' }}>

                      <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>6</span>
                      <span style={{ marginLeft: "50%", }}><IconButton>
                        <EmojiPeople fontSize="large" style={{ color: 'white' }} />
                      </IconButton>
                        <IconButton style={{ margin: '0', padding: '0' }}>
                          <Search style={{ color: 'white' }} />
                        </IconButton>
                      </span>
                    </p>
                  </div>


                </Grid>


                <Grid item lg={3} md={6} sm={12} xs={12}  >

                  <div style={{ margin: '10px', backgroundColor: '#57837B', color: 'white', padding: '10px', borderRadius: '10px' }}>
                    <p>PREPARING IN RASTAURANTS</p>

                    <p style={{ marginTop: '15px' }}>

                      <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>9</span>
                      <span style={{ marginLeft: "50%", }}><IconButton>
                        <EmojiPeople fontSize="large" style={{ color: 'white' }} />
                      </IconButton>
                        <IconButton style={{ margin: '0', padding: '0' }}>
                          <Search style={{ color: 'white' }} />
                        </IconButton>
                      </span>
                    </p>
                  </div>


                </Grid>



                <Grid item lg={3} md={6} sm={12} xs={12}  >

                  <div style={{ margin: '10px', backgroundColor: '#334257', color: 'white', padding: '10px', borderRadius: '10px' }}>
                    <p>PICKED UP</p>

                    <p style={{ marginTop: '15px' }}>

                      <span style={{ fontSize: '20px', fontWeight: 'bolder' }}>1</span>
                      <span style={{ marginLeft: "50%", }}><IconButton>
                        <EmojiPeople fontSize="large" style={{ color: 'white' }} />
                      </IconButton>
                        <IconButton style={{ margin: '0', padding: '0' }}>
                          <Search style={{ color: 'white' }} />
                        </IconButton>
                      </span>
                    </p>
                  </div>


                </Grid>



              </Grid>


              {/* BODY RGHT SIDE BUTTUNS DECK */}

              <Grid container style={{ backgroundColor: '#FEF7DC', padding: '5px', margin: '10px', borderRadius: '10px' }}>
                <Grid item lg={3} md={6} sm={6} xs={6} >
                  <div className="btns-deck-style" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                    <div>
                      <p style={{ color: 'gray', fontSize: '15px' }} >Delivered</p><br />
                          13
                        </div>
                    <div>
                      <IconButton>
                        <CheckCircle />
                      </IconButton>
                    </div>
                  </div>
                </Grid>

                <Grid item lg={3} md={6} sm={6} xs={6} >
                  <div className="btns-deck-style" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                    <div>
                      <p style={{ color: 'gray', fontSize: '14px' }} >CANCELED</p><br />
                          3
                        </div>
                    <div>
                      <IconButton>
                        <DeleteForever />
                      </IconButton>
                    </div>
                  </div>
                </Grid>

                <Grid item lg={3} md={6} sm={6} xs={6} >
                  <div className="btns-deck-style" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                    <div>
                      <p style={{ color: 'gray', fontSize: '14px' }} >PAYMENT FAILED</p><br />
                          1
                        </div>
                    <div>
                      <IconButton>
                        <HailRounded />
                      </IconButton>
                    </div>
                  </div>
                </Grid>

                <Grid item lg={3} md={6} sm={6} xs={6}  >
                  <div className="btns-deck-style" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                    <div>
                      <p style={{ color: 'gray', fontSize: '14px' }} >REFUNDED</p><br />
                          0
                        </div>
                    <div>
                      <IconButton>
                        <LoopOutlined />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
              </Grid>








            </Grid>

            {/* LINE CHART */}

            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}  >
                <div style={{ borderRadius: '10px', border: '1px solid #EEF0F6', height: '20rem', margin: '10px 30px 10px 30px' }} >
                  <LineChartFunction />
                </div>
              </Grid>
            </Grid>

            {/* Doughnut chats deck */}

            <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={6}  >
                <div style={{ borderRadius: '10px', border: '1px solid #EEF0F6', margin: '10px 10px 10px 30px', }} >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEF0F6', padding: '10px', marginBottom: '10px' }} >
                    <Typography noWrap style={{ width: '50%' }} >
                      Users Overview
                      </Typography>
                    <Button size="small" variant="outlined" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                      <div>
                        OverAll
                      </div>
                      <div>
                        <IconButton>
                          <ExpandMore />
                        </IconButton>
                      </div>
                    </Button>
                  </div>
                  <div className="doghnut-graph-height-style" style={{ padding: '10px' }}>
                    <DoughnutChartFunction />
                  </div>
                </div>
              </Grid>

              <Grid item lg={6} md={6} sm={6} xs={6}  >
                <div style={{ borderRadius: '10px', border: '1px solid #EEF0F6', margin: '10px 30px 10px 10px', }} >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEF0F6', padding: '10px', marginBottom: '10px' }} >
                    <Typography noWrap style={{ width: '50%' }} >
                      Bussiness overview
                      </Typography>
                    <Button size="small" variant="outlined" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                      <div>
                        OverAll
                      </div>
                      <div>
                        <IconButton>
                          <ExpandMore />
                        </IconButton>
                      </div>
                    </Button>
                  </div>
                  <div className="doghnut-graph-height-style" >
                    <DoughnutChartFunctionTwo />
                  </div>
                </div>
              </Grid>

            </Grid>


            {/* top selling foods & papular resturant */}

            <Grid container>


              {/* inside this container Left section grid item*/}


              <Grid item lg={6} md={6} sm={12} xs={12}  >
                <div style={{ borderRadius: '10px', border: '1px solid #EEF0F6', margin: '10px 10px 10px 30px', }} >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEF0F6', padding: '20px', marginBottom: '10px' }} >
                    <Typography noWrap style={{ width: '50%', display: 'flex', alignItems: 'center' }} >
                      <DinnerDining style={{ marginRight: '10px' }} />  top selling foods
                      </Typography>
                    <p style={{ fontSize: '12px', color: '#48cae4', textShadow: '2px 2px #C1F8FC', background: '#C1F8FC,', opacity: '0.2px' }} >
                      ( zone:all )
                      </p>
                  </div>


                  <Grid container  >
                    <Grid item lg={4} md={6} sm={6} xs={12} >
                      <div style={{ height: '11rem', margin: '5px', border: '2px solid #EDEDED ', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "8rem" }} >
                          <div className="hot-selling-food-background-pic-one" >
                            <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px', padding: '2px' }} >
                              sold : 13
                            </p>
                          </div>


                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} >
                      <div style={{ height: '11rem', margin: '5px', border: '2px solid #EDEDED ', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "8rem" }} >
                          <div className="hot-selling-food-background-pic-two" >
                            <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px', padding: '2px' }} >
                              sold : 5
                            </p>
                          </div>


                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '11rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "8rem" }} >
                          <div className="hot-selling-food-background-pic-three" >
                            <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px', padding: '2px' }} >
                              sold : 4
                            </p>
                          </div>


                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '11rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "8rem" }} >
                          <div className="hot-selling-food-background-pic-fourth" >
                            <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px', padding: '2px' }} >
                              sold : 3
                            </p>
                          </div>


                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '11rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "8rem" }} >
                          <div className="hot-selling-food-background-pic-five" >
                            <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px', padding: '2px' }} >
                              sold : 3
                            </p>
                          </div>


                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>
                      </div>
                    </Grid>

                    <Grid item lg={4} md={6} sm={6} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '11rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "8rem" }} >
                          <div className="hot-selling-food-background-pic-six" >
                            <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px', padding: '2px' }} >
                              sold : 3
                            </p>
                          </div>


                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>



              {/* right side Grid Item */}

              <Grid item lg={6} md={6} sm={12} xs={12}  >
                <div style={{ borderRadius: '10px', border: '1px solid #EEF0F6', margin: '10px 30px 10px 10px', }} >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEF0F6', padding: '20px', marginBottom: '10px' }} >
                    <Typography noWrap style={{ width: '50%', display: 'flex', alignItems: 'center' }} >
                      <DinnerDining style={{ marginRight: '10px' }} />  popular Rasturants
                      </Typography>
                    <p style={{ fontSize: '12px', color: '#48cae4', textShadow: '2px 2px #C1F8FC', background: '#C1F8FC,', opacity: '0.2px' }} >
                      ( zone:all )
                      </p>
                  </div>

                  <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                      <div style={{ margin: '15px', padding: '10px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '30px' }} >
                        <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                          <Dining style={{ marginRight: '10px', color: 'orangered' }} /> Hungary Puppets
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center' }} >
                          5 <StarBorder style={{ marginLeft: '10px', color: 'brown' }} />
                        </p>
                      </div>

                      <div style={{ margin: '10px', padding: '10px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '30px' }} >
                        <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                          <Podcasts style={{ marginRight: '10px', color: 'lightseagreen' }} /> Cheeze Burgur
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center' }} >
                          5 <StarBorder style={{ marginLeft: '10px', color: 'brown', }} />
                        </p>
                      </div>

                      <div style={{ margin: '10px', padding: '10px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '30px' }} >
                        <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                          <Score style={{ marginRight: '10px', color: 'lightslategray' }} /> Cafe Monarch
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center' }} >
                          5 <StarBorder style={{ marginLeft: '10px', color: 'brown', }} />
                        </p>
                      </div>

                      <div style={{ margin: '10px', padding: '10px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '30px' }} >
                        <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                          <Texture style={{ marginRight: '10px', color: 'lightpink' }} /> The Capital Grill
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center' }} >
                          5 <StarBorder style={{ marginLeft: '10px', color: 'brown', }} />
                        </p>
                      </div>

                      <div style={{ margin: '10px', padding: '10px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '30px' }} >
                        <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                          <TrackChanges style={{ marginRight: '10px', color: 'lightblue' }} /> Pizza Rasturant
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center' }} >
                          5 <StarBorder style={{ marginLeft: '10px', color: 'brown', }} />
                        </p>
                      </div>

                      <div style={{ margin: '10px 10px 20px 10px ', padding: '10px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '30px' }} >
                        <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                          <TwentyTwoMp style={{ marginRight: '10px', color: 'blue' }} /> The Great Impasta
                        </p>
                        <p style={{ display: 'flex', alignItems: 'center' }} >
                          5 <StarBorder style={{ marginLeft: '10px', color: 'brown', }} />
                        </p>
                      </div>
                    </Grid>
                  </Grid>

                </div>


              </Grid>
            </Grid>


            {/* mosted rated food & top deliveryman by order count */}


            <Grid container>
              <Grid item lg={6} md={6} sm={6} xs={12} >
                <div className="rated-food-grid-item-margin-style" style={{ height: '27rem', border: '1px solid #EEF0F6', borderRadius: '10px' }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEF0F6', padding: '20px', marginBottom: '10px' }} >
                    <Typography noWrap style={{ width: '50%', display: 'flex', alignItems: 'center' }} >
                      <DinnerDining style={{ marginRight: '10px' }} />  Most Rated Foods
                      </Typography>
                    <p style={{ fontSize: '12px', color: '#48cae4', textShadow: '2px 2px #C1F8FC', background: '#C1F8FC,', opacity: '0.2px' }} >
                      ( zone:all )
                      </p>
                  </div>

                  <div style={{ margin: '10px 10px 20px 10px ', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px' }} >
                    <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                      <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }} >
                        <img width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120ad6b86273.png" alt="combo" />
                      </div>
                       Burgur Combo
                        </p>
                    <p style={{ display: 'flex', alignItems: 'center', marginLeft: '1px' }} >
                      5 <StarBorder style={{ color: 'brown', }} />
                    </p>
                    <p className="margin-right-top-rated-food-p" style={{ display: 'flex', alignItems: 'center' }}>
                      1 <People />
                    </p>
                  </div>

                  <div style={{ margin: '10px 10px 20px 10px ', padding: '5px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px' }} >
                    <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                      <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }} >
                        <img width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120e6dadf410.png" alt="combo" />
                      </div>
                       Meat Pizza
                        </p>
                    <p style={{ display: 'flex', alignItems: 'center' }} >
                      4 <StarBorder style={{ color: 'brown', marginLeft: '1px' }} />
                    </p>
                    <p className="margin-right-top-rated-food-p" style={{ display: 'flex', alignItems: 'center', }}>
                      3 <People />
                    </p>
                  </div>


                  <div style={{ margin: '10px 10px 20px 10px ', padding: '5px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px' }} >
                    <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                      <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }} >
                        <img width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6121008b3c074.png" alt="combo" />
                      </div>
                       Veg Momos
                        </p>
                    <p style={{ display: 'flex', alignItems: 'center' }} >
                      5 <StarBorder style={{ color: 'brown', marginLeft: '1px' }} />
                    </p>
                    <p className="margin-right-top-rated-food-p" style={{ display: 'flex', alignItems: 'center', }}>
                      1 <People />
                    </p>
                  </div>




                </div>
              </Grid>


              <Grid item lg={6} md={6} sm={6} xs={12} >
                <div className="top-deliveryman-by-order-grid-item-margin-style" style={{ border: '1px solid #EEF0F6', borderRadius: '10px' }} >

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEF0F6', padding: '20px', marginBottom: '10px' }} >
                    <Typography noWrap style={{ width: '50%', display: 'flex', alignItems: 'center' }} >
                      <DinnerDining style={{ marginRight: '10px' }} />  Top delivery man by order count
                      </Typography>
                    <p style={{ fontSize: '12px', color: '#48cae4', textShadow: '2px 2px #C1F8FC', background: '#C1F8FC,', opacity: '0.2px' }} >
                      ( zone:all )
                      </p>
                  </div>

                  <Grid container  >
                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>
                  </Grid>

                </div>
              </Grid>
            </Grid>


            {/* top customer & rasturnat by order delivered */}




            <Grid container>
             


              <Grid item lg={6} md={6} sm={6} xs={12} >
                <div className="top-deliveryman-by-order-grid-item-margin-style-second" style={{ border: '1px solid #EEF0F6', borderRadius: '10px' }} >

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEF0F6', padding: '20px', marginBottom: '10px' }} >
                    <Typography noWrap style={{ width: '50%', display: 'flex', alignItems: 'center' }} >
                      <DinnerDining style={{ marginRight: '10px' }} />  Top Customer
                      </Typography>
                    <p style={{ fontSize: '12px', color: '#48cae4', textShadow: '2px 2px #C1F8FC', background: '#C1F8FC,', opacity: '0.2px' }} >
                      ( zone:all )
                      </p>
                  </div>

                  <Grid container  >
                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12} >
                      <div style={{ border: '2px solid #EDEDED', height: '9rem', margin: '5px', borderRadius: '10px' }} >
                        <div style={{ margin: '10px', height: "6rem", }} >
                          <p style={{ backgroundColor: '#865439', width: '40%', borderRadius: '5px', color: 'white', fontSize: '12px' }} >
                            sold : 3
                            </p>
                          <div style={{ width: '100%', height: "6rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                            <div className="hot-selling-food-background-pic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} >
                              <img style={{ borderRadius: '50%' }} width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/delivery-man/2021-08-22-61216cfbca3a6.png" alt="" />
                            </div>


                          </div>



                        </div>
                        <div>
                          <p style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }} >
                            medu Vada
                            </p>
                        </div>

                      </div>
                    </Grid>
                  </Grid>

                </div>
              </Grid>


              <Grid item lg={6} md={6} sm={6} xs={12} >
                <div className="rated-food-grid-item-margin-style-second" style={{ height: '27rem', border: '1px solid #EEF0F6', borderRadius: '10px' }}>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EEF0F6', padding: '20px', marginBottom: '10px' }} >
                    <Typography noWrap style={{ width: '50%', display: 'flex', alignItems: 'center' }} >
                      <DinnerDining style={{ marginRight: '10px' }} />  Top rasturant by order delivery
                      </Typography>
                    <p style={{ fontSize: '12px', color: '#48cae4', textShadow: '2px 2px #C1F8FC', background: '#C1F8FC,', opacity: '0.2px' }} >
                      ( zone:all )
                      </p>
                  </div>

                  <div style={{ margin: '10px 10px 20px 10px ', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px' }} >
                    <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                      <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }} >
                        <img width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120ad6b86273.png" alt="combo" />
                      </div>
                       Burgur Combo
                        </p>
                    <p style={{ display: 'flex', alignItems: 'center', marginLeft: '1px' }} >
                      5 <StarBorder style={{ color: 'brown', }} />
                    </p>
                    <p className="margin-right-top-rated-food-p" style={{ display: 'flex', alignItems: 'center' }}>
                      1 <People />
                    </p>
                  </div>

                  <div style={{ margin: '10px 10px 20px 10px ', padding: '5px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px' }} >
                    <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                      <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }} >
                        <img width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6120e6dadf410.png" alt="combo" />
                      </div>
                       Meat Pizza
                        </p>
                    <p style={{ display: 'flex', alignItems: 'center' }} >
                      4 <StarBorder style={{ color: 'brown', marginLeft: '1px' }} />
                    </p>
                    <p className="margin-right-top-rated-food-p" style={{ display: 'flex', alignItems: 'center', }}>
                      3 <People />
                    </p>
                  </div>


                  <div style={{ margin: '10px 10px 20px 10px ', padding: '5px', borderBottom: '1px solid #EEF0F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '20px' }} >
                    <p style={{ display: 'flex', alignItems: 'center', fontWeight: 'lighter', fontSize: '15px', paddingBottom: '3px' }}>
                      <div style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }} >
                        <img width="100%" src="https://demo.6amtech.com/stackfood/storage/app/public/product/2021-08-21-6121008b3c074.png" alt="combo" />
                      </div>
                       Veg Momos
                        </p>
                    <p style={{ display: 'flex', alignItems: 'center' }} >
                      5 <StarBorder style={{ color: 'brown', marginLeft: '1px' }} />
                    </p>
                    <p className="margin-right-top-rated-food-p" style={{ display: 'flex', alignItems: 'center', }}>
                      1 <People />
                    </p>
                  </div>




                </div>
              </Grid>


            </Grid>


            {/* Footer */}

            <Footer/>


          </Grid>


        </Grid>
      </Grid>

    </>
  )
}