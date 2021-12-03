import { CallOutlined, CardGiftcardOutlined, LocalShippingOutlined, PaymentOutlined } from '@mui/icons-material';
import { Button, Grid, useMediaQuery, useTheme } from '@mui/material'
import { margin, width } from '@mui/system';
import React from 'react'
import { AppBarOne } from './app-bar'
import './home-page.css'
import { view } from '@risingstack/react-easy-state'
import { state } from './global-state'
import { ProductCard, DiscountedItemCards } from './product-card'
import {FooterKachaBazar} from './footer-kacha-bazar'
import { create } from 'domain';
import { createBrowserHistory } from 'history';


export const HomePage = view(() => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <Grid container >
                <Grid item xs={12} >
                    <div style={{ marginBottom: '5px' }} >
                        <AppBarOne />
                    </div>
                </Grid>
            </Grid>

            <div style={{ width: isMatch ? '90%' : '87%', margin: 'auto', paddingBottom: '100px' }} >

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: isMatch ? '10px' : '60px' }} >
                    {
                        isMatch ?

                            <div style={{ width: '100%' }} >
                                <div id="card-background-img" style={{ height: isMatch ? "14rem" : '21.5rem', width: '100%', display: 'flex', alignItems: 'center', padding: '10px', borderRadius: '10px', marginTop: '20px' }} >
                                    <div style={{ width: '100%', }} >
                                        <h1>
                                            Quality Freshness <br />
                                            Guaranteed!
                                        </h1>
                                        <p>
                                            intrinsicly fashion performance based products rather then other benifits ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                            :

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '24rem', width: '100%' }} >
                                <div id="card-background-img" style={{ height: '21.5rem', width: '60%', display: 'flex', alignItems: 'center', padding: '30px', marginRight: '15px', borderRadius: '10px' }} >
                                    <div style={{ width: '26rem', }} >
                                        <h1>
                                            Quality Freshness <br />
                                            Guaranteed!
                                        </h1>
                                        <p>
                                            intrinsicly fashion performance based products rather then other benifits ...
                                        </p> <br />
                                        <Button variant="contained" style={{ backgroundColor: '#10B981', textTransform: 'capitalize' }} >
                                            Shop now
                                        </Button>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '38%' }} >
                                    <div id="card-background-img-2" style={{ height: '10.5rem', borderRadius: '10px', marginBottom: '10px' }} >

                                    </div>
                                    <div id="card-background-img-3" style={{ height: '10.5rem', borderRadius: '10px' }} >

                                    </div>
                                </div>
                            </div>
                    }
                </div>

                {/* smaller card decks  */}

                <div>
                    {isMatch ? "" :
                        <Grid container spacing={2} >
                            <Grid item xs={3}  >
                                <div id="cards-deck-style" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FEE2E2' }} >
                                    <LocalShippingOutlined style={{ color: 'red' }} />
                                    <div style={{ marginLeft: '20px', lineHeight: '25px' }} >
                                        <span style={{ fontWeight: 'bold', fontSize: '18px' }} >
                                            Free Shipping
                                        </span> <br />
                                        <span style={{ fontWeight: 'lighter', fontSize: '14px' }} >
                                            from $20.00
                                        </span>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={3}  >
                                <div id="cards-deck-style" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#E0E7FF' }} >
                                    <CallOutlined style={{ color: 'red' }} />
                                    <div style={{ marginLeft: '20px', lineHeight: '25px' }} >
                                        <span style={{ fontWeight: 'bold', fontSize: '18px' }} >
                                            Suport 24/7
                                        </span> <br />
                                        <span style={{ fontWeight: 'lighter', fontSize: '14px' }} >
                                            At Aytime
                                        </span>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={3} >
                                <div id="cards-deck-style" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FEF3C7' }} >
                                    <PaymentOutlined style={{ color: 'red' }} />
                                    <div style={{ marginLeft: '20px', lineHeight: '25px' }} >
                                        <span style={{ fontWeight: 'bold', fontSize: '18px' }} >
                                            Secure Payment
                                        </span> <br />
                                        <span style={{ fontWeight: 'lighter', fontSize: '14px' }} >
                                            Total Safe
                                        </span>
                                    </div>
                                </div>
                            </Grid>

                            <Grid item xs={3}  >
                                <div id="cards-deck-style" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#D1FAE5' }} >
                                    <CardGiftcardOutlined style={{ color: 'red' }} />
                                    <div style={{ marginLeft: '20px', lineHeight: '25px' }} >
                                        <span style={{ fontWeight: 'bold', fontSize: '18px' }} >
                                            Latest Offer
                                        </span> <br />
                                        <span style={{ fontWeight: 'lighter', fontSize: '14px' }} >
                                            Upto 20% off
                                        </span>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    }
                </div>

                {/* Feature catagories section*/}

                <div style={{ marginTop: isMatch ? '20px' : '60px' }} >
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <div id="feature-category-style" style={{ width: isMatch ? '90% ' : '40%', margin: 'auto' }} >
                                <h2 style={{ fontWeight: 'bolder' }} >
                                    Featured Categories
                                </h2>
                                <p  >
                                    Choose your necessary products from this feature categories.
                                </p>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                {/* feature & categories deck */}

                <div style={{ marginTop: isMatch ? '20px' : '30px', height: isMatch ? 'auto' : '16rem', display: 'flex', justifyContent: 'space-evenly', paddingTop: '10px', paddingBottom: '20px', marginBottom: '20px', }} >
                    <Grid container spacing={2} >
                        <Grid item xs={6} md={2} >

                            <div id="hover-style" onClick={() => {
                                createBrowserHistory().push('/category/fish&meat');
                                window.location.reload()
                            }}  style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', border: '1px solid lightgray', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fy0zXYj5%2Fcarp-fish.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Fish & Meat
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRZ275n3f%2Fcabbage.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Fruit & Vegitable
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FpfscwF4%2Fshrimp.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Fresh Seafood
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FhBv30Rt%2Ffrying-pan.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Cooking Essentials
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FdgPzSt7%2Fbagel.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Breakfast
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FDz8LKDX%2Fsoft-drink.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Drinks
                                </p>
                            </div>
                        </Grid>

                        {/* second row  */}

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F181Qpm8%2Fmilk.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Milk & Dairy
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FxmGhNRF%2Fapple.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Organic food
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F65JSfy6H%2Fhoney-1.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Honey
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fmk09xvk4%2Fchili-sauce.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Souces & pickles
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FrmLvfsMC%2Fstrawberry-jam-1.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Jam % Jelly
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FHT7c6VT%2Fchips.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Snacks & Instant
                                </p>
                            </div>
                        </Grid>

                        {/* 3rd row */}

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2F0jVF5Cmc%2Fcookie.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Biscuits & Cakes
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FrdY6zL0%2Fcleaner.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Household & Tools
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6 ' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FQNqrnQBB%2Fbaby.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Baby Care
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2Fgjz1P7wx%2Fbeauty.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Beauty & Health
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.postimg.cc%2FRVVzrWfg%2Fcat.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Pet Care
                                </p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={2} >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '12px', borderColor: '#F3F4F6', borderRadius: '10px', border: '1px solid #F3F4F6' }} >
                                <img width="40px" height="=40px" src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqNCvxT0%2Fdumbbell.png&w=48&q=75" alt="fish" />
                                <p style={{ marginLeft: '10px' }} >
                                    Sports & Fitness
                                </p>
                            </div>
                        </Grid>

                    </Grid>
                </div>

                {/* Popular product for daily shoping HEADING */}

                <div style={{ height: isMatch ? 'auto' : '10rem', width: '100%', marginBottom: '20px', display: 'flex', alignItems: 'center' }} >
                    <Grid container >
                        <Grid item xs={12} >
                            <div id="heading-style" style={{ width: isMatch ? '90%' : '' }} >
                                <p>
                                    <span style={{ fontSize: '28px', fontWeight: 'bold' }}> Popular Products for Daily Shopping </span>  <br />
                                    <span>
                                        See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.

                                    </span>
                                </p>

                            </div>
                        </Grid>
                    </Grid>
                </div>

                {/* hot product list */}

                <div style={{ width: '100%', marginTop: '20px', height: 'auto' }} >


                    <ProductCard />


                </div>

                {/* taste Cards deck */}

                <div style={{ marginTop: '5rem', height: 'auto' }} >
                    <Grid container spacing={2} >

                        {
                            state.taseCardsDeck.map(x => (
                                <>
                                    <Grid item xs={12} md={6} lg={4} >

                                        <div id="tast-cards-style" >
                                            <p style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'capitalize' }} >
                                                {x.subheading}
                                            </p>

                                            <div style={{ marginTop: '5px', marginLeft: '3px', marginBottom: '10px' }} >
                                                <p style={{ fontSize: '28px', color: '#059669', fontWeight: 'bold', textTransform: 'capitalize', lineHeight: '30px' }} >
                                                    {x.heading}
                                                </p>
                                                <p style={{ color: 'gray', fontSize: '14px' }} >
                                                    {x.description}
                                                </p>
                                            </div>



                                            <Button variant="outlined" size="small" id="shop-now-btn" >
                                                Shop Now
                                            </Button>
                                        </div>
                                    </Grid>
                                </>
                            ))
                        }

                    </Grid>
                </div>

                {/* latest discount products HEADING */}


                <div style={{ height: isMatch ? 'auto' : '10rem', width: '100%', marginBottom: '20px', display: 'flex', alignItems: 'center', marginTop: '30px', paddingTop: '10px' }} >
                    <Grid container >
                        <Grid item xs={12} >
                            <div id="heading-style" style={{ width: isMatch ? '90%' : '' }} >
                                <p>
                                    <span style={{ fontSize: '28px', fontWeight: 'bold' }}> Latest Discounted Products </span>  <br />
                                    <span>
                                        See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping.

                                    </span>
                                </p>

                            </div>
                        </Grid>
                    </Grid>
                </div>

                {/* latest discount products cards deck */}

                <div style={{ width: '100%', marginTop: '20px', height: 'auto' }} >


                    <DiscountedItemCards />


                </div>




            </div> {/*footer above div */}

            {/* FOOTER */}

            <div style={{marginBottom:'100px'}} >
                <FooterKachaBazar/>
            </div>



        </>
    )
})