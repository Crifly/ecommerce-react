import { Apple, FacebookOutlined, LinkedIn, Pinterest, WhatsApp, WhatsappOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import './home-page.css'




export const FooterKachaBazar = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }} >

                {/* UPPER FOOTER DIV */}

                <div>
                    {
                        isMatch ?

                            <div style={{ backgroundColor: '#EEF2FF', paddingTop: '20px', }}>
                                <div style={{ width: isMatch ? '95%' : '95%', margin: 'auto', display: 'flex', justifyContent: 'flex-start' }} >
                                    <div style={{ width: '35rem', paddingTop: '30px', marginLeft: '1rem' }} >
                                        <p style={{ fontSize: '34px', fontWeight: 'bolder', lineHeight: '38px', letterSpacing: '-1px', wordSpacing: '2px' }} >
                                            Get Your Daily Needs From Our KachaBazar Store
                                        </p>
                                        <p style={{ fontSize: '16px', lineHeight: '30px', marginTop: '15px', letterSpacing: '1px', color: '#232325' }} >
                                            There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.
                                        </p>

                                        <div id="app-store-hover-div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px' }} >
                                            <div style={{ paddingLeft: '15px', paddingRight: '30px', paddingTop: '5px', paddingBottom: '5px', backgroundColor: 'black', margin: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                                <Apple style={{ color: 'white', fontSize: '35px' }} />
                                                <div style={{ marginLeft: '20px' }} >
                                                    <p style={{ fontSize: '9px', color: 'white', wordSpacing: '2px', }} >
                                                        Available on the
                                                    </p>
                                                    <p style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', letterSpacing: '-1px' }} >
                                                        App Store
                                                    </p>
                                                </div>


                                            </div>
                                            <div style={{ paddingLeft: '15px', paddingRight: '30px', paddingTop: '5px', paddingBottom: '5px', backgroundColor: 'black', margin: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                                <Apple style={{ color: 'white', fontSize: '35px' }} />
                                                <div style={{ marginLeft: '20px' }} >
                                                    <p style={{ fontSize: '9px', color: 'white', wordSpacing: '2px', }} >
                                                        Available on the
                                                    </p>
                                                    <p style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', letterSpacing: '-1px' }} >
                                                        Play Store
                                                    </p>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            :

                            <div style={{ backgroundColor: '#EEF2FF', paddingTop: '20px', }}>
                                <div style={{ width: isMatch ? '90%' : '95%', margin: 'auto', display: 'flex', justifyContent: 'space-between' }} >
                                    <div style={{ width: '35rem', paddingTop: '50px', marginLeft: '5rem' }} >
                                        <p style={{ fontSize: '34px', fontWeight: 'bolder', lineHeight: '38px', letterSpacing: '-1px', wordSpacing: '2px' }} >
                                            Get Your Daily Needs From Our KachaBazar Store
                                        </p>
                                        <p style={{ fontSize: '16px', lineHeight: '30px', marginTop: '15px', letterSpacing: '1px', color: '#232325' }} >
                                            There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.
                                        </p>

                                        <div id="app-store-hover-div" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '20px' }} >
                                            <div style={{ paddingLeft: '15px', paddingRight: '30px', paddingTop: '5px', paddingBottom: '5px', backgroundColor: 'black', margin: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                                <Apple style={{ color: 'white', fontSize: '35px' }} />
                                                <div style={{ marginLeft: '20px' }} >
                                                    <p style={{ fontSize: '9px', color: 'white', wordSpacing: '2px', }} >
                                                        Available on the
                                                    </p>
                                                    <p style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', letterSpacing: '-1px' }} >
                                                        App Store
                                                    </p>
                                                </div>


                                            </div>
                                            <div style={{ paddingLeft: '15px', paddingRight: '30px', paddingTop: '5px', paddingBottom: '5px', backgroundColor: 'black', margin: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                                <Apple style={{ color: 'white', fontSize: '35px' }} />
                                                <div style={{ marginLeft: '20px' }} >
                                                    <p style={{ fontSize: '9px', color: 'white', wordSpacing: '2px', }} >
                                                        Available on the
                                                    </p>
                                                    <p style={{ color: 'white', fontWeight: 'bold', fontSize: '18px', letterSpacing: '-1px' }} >
                                                        Play Store
                                                    </p>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img width="90%" height="90%" src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img.png&w=640&q=75" alt="" />
                                    </div>
                                </div>
                            </div>
                    }
                </div>

                {/* LOWER FOOTER DIV */}

                <div style={{ padding: '20px' }} >
                    <div style={{ width: isMatch ? '90%' : '89%', margin: 'auto' }} >
                        <Grid container spacing={1} >
                            <Grid item xs={12} md={6}  >

                                <div style={{ width: isMatch ? '100%' : '85%', height: '15rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', }}  >
                                    <div style={{ display: 'flex', alignItems: 'center' }} >
                                        <img width="100px" height="100px" color="green" src="https://kachabazar-store.vercel.app/_next/image?url=%2Flogo%2Flogo-color.svg&w=128&q=75" alt="" />


                                    </div>
                                    <p>
                                        There are many popular products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.
                                    </p>
                                    <p style={{ marginTop: '25px' }} >
                                        <p>
                                            Follow Us
                                        </p>
                                        <div style={{ display: 'flex' }} >
                                            <IconButton>
                                                <FacebookOutlined style={{ color: 'blue', fontSize: '35px' }} />
                                            </IconButton>

                                            <IconButton>
                                                <WhatsApp style={{ color: '#25D366', fontSize: '35px' }} />
                                            </IconButton>

                                            <IconButton>
                                                <Pinterest style={{ color: '#CB2128', fontSize: '35px' }} />
                                            </IconButton>

                                            <IconButton>
                                                <LinkedIn style={{ color: '#007FB1', fontSize: '35px' }} />
                                            </IconButton>
                                        </div>
                                    </p>
                                </div>

                            </Grid>

                            <Grid item xs={6} md={4} lg={2} >
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px', paddingTop: '15px', height: '15rem', justifyContent: 'space-between', alignItems: 'flex-start' }} >
                                    <div>
                                        <p style={{fontSize:'18px'}} >
                                            Company
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            about us
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            contact us
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize', }} >
                                            carrers
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize', }} >
                                            last news
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            latest discount
                                        </Button>

                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={6} md={4} lg={2} >
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px', paddingTop: '15px', height: '15rem', justifyContent: 'space-between', alignItems: 'flex-start' }} >
                                    <div>
                                        <p style={{fontSize:'18px'}} >
                                            Top Category
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            Fish & meat
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            soft drinks
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize', }} >
                                            baby care
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize', }} >
                                            beauty and health
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            fruit and vegetable
                                        </Button>

                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={6} md={4} lg={2} >
                                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '15px', paddingTop: '15px', height: '15rem', justifyContent: 'space-between', alignItems: 'flex-start' }} >
                                    <div>
                                        <p style={{fontSize:'18px'}} >
                                            My Account
                                        </p>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            Fish & meat
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            soft drinks
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize', }} >
                                            baby care
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize', }} >
                                            beauty and health
                                        </Button>

                                        <Button id="footer-buttons" variant="text" style={{ textTransform: 'capitalize' }} >
                                            fruit and vegetable
                                        </Button>

                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            </div>
        </>
    )
}