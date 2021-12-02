import React, { useState } from 'react'
import { view } from '@risingstack/react-easy-state'
import { state } from './global-state'
import { Button, Dialog, DialogContent, DialogTitle, Fade, Grid, IconButton } from '@mui/material'
import { AddOutlined, AddShoppingCartOutlined, Lock, RemoveOutlined } from '@mui/icons-material'
import { number } from 'yup/lib/locale'
import { width } from '@mui/system'


export const ProductCard = view(() => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleClose = () => {
        setIsDialogOpen(false)
    }
    const handleClick = () => {

        state.setIsTrue()
        state.addCartItem()


    }

    const handleMinusButton = () => {
        state.subtractCartItem()
        if (state.cartItem == 0) {
            state.setIsFalse()
        }
    }
    const handlePlusBtn = () => {
        state.addCartItem()
    }



    return (
        <>


            <div>
                <Grid container spacing={2} >
                    {
                        state.popularProductsForDailyShoping.map(x => (
                            <Grid item xs={6} md={4} lg={2} >
                                <div  id="product-card" style={{ border: '1px solid #F1F2F3', borderRadius: '10px', paddingLeft: '15px', width: '100%', paddingRight: '15px', paddingBottom: '15px' }} >
                                    <div onClick={() => { state.getID = x.id; setIsDialogOpen(true) }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}  >
                                        <img id="img-zoom-in" width="150px" height="150px" src={x.prdctImg} alt="img" />
                                    </div>
                                    <p style={{ color: 'gray', fontSize: '14px', marginTop: '2px' }} >
                                        {x.description}
                                    </p>
                                    <p style={{ textTransform: 'capitalize', fontSize: '14px' }} >
                                        {x.productName}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }} >
                                        <p style={{ fontWeight: 'bolder', fontSize: '20px', marginTop: '5px' }} >
                                            {x.productPrice}
                                        </p>

                                        <div  >
                                            {
                                                state.getQuantityInCart(x.id) == 0 ? <IconButton onClick={() => {
                                                    state.getID = x.id;
                                                    state.IncreaseCardItem(x.id)

                                                }} > <AddShoppingCartOutlined /> </IconButton> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} > <IconButton onClick={() => {
                                                    state.DecreaseItems(x.id)

                                                }} > <RemoveOutlined /> </IconButton> <p> {state.getQuantityInCart(x.id)} </p> <IconButton onClick={() => {
                                                    state.IncreaseCardItem(x.id)
                                                }} > <AddOutlined /> </IconButton> </div>
                                            }
                                        </div>
                                    </div>

                                </div>

                                {/* dialog */}




                            </Grid>

                        ))
                    }
                </Grid>



                {
                    state.popularProductsForDailyShoping.filter(x => x.id == state.getID).map(x => (

                        <Dialog sx={{ borderRadius: '20px' }} open={isDialogOpen} onClose={handleClose} fullWidth maxWidth="md"  >

                            <DialogContent>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '5px' }} >
                                    <div style={{ width: '50%' }} >
                                        <img width="70%" height="70%" src={x.prdctImg} alt="" />
                                    </div>

                                    <div style={{ width: "50%",height:'17rem' }} >
                                        <p style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '20px' }} >
                                            {x.productName}
                                        </p>
                                        <p>
                                            {
                                                x.detailDescription
                                            }
                                        </p>
                                        <p style={{marginTop:'15px',fontSize:'22px',fontWeight:'bold'}} >
                                            {
                                                x.productPrice
                                            }
                                        </p>

                                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'5rem'}} >
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:'45%',border:'1px solid lightgray',paddingLeft:'10px',paddingRight:'10px',borderRadius:'10px',paddingTop:'2px',paddingBottom:'2px' }} >
                                                <IconButton>
                                                    <RemoveOutlined />
                                                </IconButton>
                                                <p>
                                                    {state.getQuantityInCart(x.id)}
                                                </p>
                                                <IconButton>
                                                    <AddOutlined />
                                                </IconButton>

                                            </div>
                                            <div style={{width:'50%'}} >
                                                <Button variant="contained" style={{backgroundColor:'#12B981',color:'white',paddingLeft:'40px',paddingRight:'40px',borderRadius:'10px',paddingTop:'10px',paddingBottom:'10px'}} >
                                                    Add To Cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>

                        </Dialog>

                    ))

                }


            </div>

        </>
    )
})


// product cards for didcounted items


export const DiscountedItemCards = () => {
    const handleClick = () => {

        state.setIsTrue()
        state.addCartItem()


    }

    const handleMinusButton = () => {
        state.subtractCartItem()
        if (state.cartItem == 0) {
            state.setIsFalse()
        }
    }
    const handlePlusBtn = () => {
        state.addCartItem()
    }

    return (
        <>
            <div>
                <Grid container spacing={2} >
                    {
                        state.discountedItemsList.map(x => (
                            <Grid item xs={6} md={4} lg={2} >
                                <div id="product-card" style={{ border: '1px solid #F1F2F3', borderRadius: '10px', paddingLeft: '15px', width: '100%', paddingRight: '15px', paddingBottom: '15px' }} >

                                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center' }}  >
                                        <div style={{ position: 'absolute', backgroundColor: '#F97316', marginLeft: '8rem', marginTop: '-6rem', zIndex: '1', paddingLeft: '7px', paddingRight: '7px', paddingTop: '2px', borderRadius: '5px', color: 'white' }} >
                                            <p style={{ fontSize: '12px' }} >
                                                {x.off}
                                            </p>
                                        </div>
                                        <img id="img-zoom-in" width="150px" height="150px" src={x.prdctImg} alt="img" />
                                    </div>
                                    <p style={{ color: 'gray', fontSize: '14px', marginTop: '2px' }} >
                                        {x.description}
                                    </p>
                                    <p style={{ textTransform: 'capitalize', fontSize: '14px' }} >
                                        {x.productName}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }} >
                                        <p style={{ fontWeight: 'bolder', fontSize: '20px', marginTop: '5px' }} >
                                            {x.productPrice}
                                        </p>

                                        <div  >
                                            {
                                                state.getQuantityInCart(x.id) == 0 ? <IconButton onClick={() => {
                                                    state.getID = x.id;
                                                    state.IncreaseCardItem(x.id)

                                                }} > <AddShoppingCartOutlined /> </IconButton> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} > <IconButton onClick={() => {
                                                    state.DecreaseItems(x.id)

                                                }} > <RemoveOutlined /> </IconButton> <p> {state.getQuantityInCart(x.id)} </p> <IconButton onClick={() => {
                                                    state.IncreaseCardItem(x.id)
                                                }} > <AddOutlined /> </IconButton> </div>
                                            }
                                        </div>
                                    </div>

                                </div>
                            </Grid>

                        ))
                    }
                </Grid>




            </div>
        </>
    )
}


// fish and meat category cards 

export const CategoryFishAndMeatCards = view( () =>{
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleClose = () => {
        setIsDialogOpen(false)
    }
    const handleClick = () => {

        state.setIsTrue()
        state.addCartItem()


    }

    const handleMinusButton = () => {
        state.subtractCartItem()
        if (state.cartItem == 0) {
            state.setIsFalse()
        }
    }
    const handlePlusBtn = () => {
        state.addCartItem()
    }
    return(
        <> 
            <div>
                <Grid container columns={15} spacing={2} >
                    {
                        state.popularProductsForDailyShoping.map(x => (
                            <Grid item xs={6} md={4} lg={3} >
                                <div  id="product-card" style={{ border: '1px solid #F1F2F3', borderRadius: '10px', paddingLeft: '15px', width: '100%', paddingRight: '15px', paddingBottom: '15px',backgroundColor:'white',padding:'16px' }} >
                                    <div onClick={() => { state.getID = x.id; setIsDialogOpen(true) }} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}  >
                                        <img  id="img-zoom-in" width="130px" height="130px" src={x.prdctImg} alt="img" style={{backgroundColor:'none',background:'none'}} />
                                    </div>
                                    <p style={{ color: 'gray', fontSize: '14px', marginTop: '2px' }} >
                                        {x.description}
                                    </p>
                                    <p style={{ textTransform: 'capitalize', fontSize: '14px' }} >
                                        {x.productName}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }} >
                                        <p style={{ fontWeight: 'bolder', fontSize: '20px', marginTop: '5px' }} >
                                            {x.productPrice}
                                        </p>

                                        <div  >
                                            {
                                                state.getQuantityInCart(x.id) == 0 ? <IconButton onClick={() => {
                                                    state.getID = x.id;
                                                    state.IncreaseCardItem(x.id)

                                                }} > <AddShoppingCartOutlined /> </IconButton> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} > <IconButton onClick={() => {
                                                    state.DecreaseItems(x.id)

                                                }} > <RemoveOutlined /> </IconButton> <p> {state.getQuantityInCart(x.id)} </p> <IconButton onClick={() => {
                                                    state.IncreaseCardItem(x.id)
                                                }} > <AddOutlined /> </IconButton> </div>
                                            }
                                        </div>
                                    </div>

                                </div>

                                {/* dialog */}




                            </Grid>

                        ))
                    }
                </Grid>



                {
                    state.popularProductsForDailyShoping.filter(x => x.id == state.getID).map(x => (

                        <Dialog sx={{ borderRadius: '20px' }} open={isDialogOpen} onClose={handleClose} fullWidth maxWidth="md"  >

                            <DialogContent>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '5px' }} >
                                    <div style={{ width: '50%' }} >
                                        <img width="70%" height="70%" src={x.prdctImg} alt="" />
                                    </div>

                                    <div style={{ width: "50%",height:'17rem' }} >
                                        <p style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '20px' }} >
                                            {x.productName}
                                        </p>
                                        <p>
                                            {
                                                x.detailDescription
                                            }
                                        </p>
                                        <p style={{marginTop:'15px',fontSize:'22px',fontWeight:'bold'}} >
                                            {
                                                x.productPrice
                                            }
                                        </p>

                                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'5rem'}} >
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:'45%',border:'1px solid lightgray',paddingLeft:'10px',paddingRight:'10px',borderRadius:'10px',paddingTop:'2px',paddingBottom:'2px' }} >
                                                <IconButton>
                                                    <RemoveOutlined />
                                                </IconButton>
                                                <p>
                                                    {state.getQuantityInCart(x.id)}
                                                </p>
                                                <IconButton>
                                                    <AddOutlined />
                                                </IconButton>

                                            </div>
                                            <div style={{width:'50%'}} >
                                                <Button variant="contained" style={{backgroundColor:'#12B981',color:'white',paddingLeft:'40px',paddingRight:'40px',borderRadius:'10px',paddingTop:'10px',paddingBottom:'10px'}} >
                                                    Add To Cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>

                        </Dialog>

                    ))

                }


            </div>
        </>
    )
})