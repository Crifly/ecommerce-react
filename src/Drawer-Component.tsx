import { ExpandLess, ExpandMore, Home, HomeOutlined, HowToVoteOutlined, NotesOutlined, RamenDining, Segment, SelectAll, ShoppingCart, StarBorder, ViewStream, ViewStreamOutlined } from '@mui/icons-material'
import { Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { yellow } from '@mui/material/colors'
import { createBrowserHistory } from 'history'
import React, { useState } from 'react'
import './Drawer-component-style.css'



export const Drawer = () => {

    const [isOrderOpen, setIsOrderOpen] = useState(false)
    const [isDispatchOpen, setIsDispatchOpen] = useState(false)
    const [isRastaurantOpen, setIsRastaurantopen] = useState(false)
    const [isFoodManagementOpen, setIsFoodManagementOpen] = useState(false)
    const [isAddonsOpen, setIsAddonsOpen] = useState(false)
    const [isFoodsOpen, setIsFoodsOpen] = useState(false)

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }} >
                <Button style={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize', color: '#C1E79F', margin: '10px' }} >
                    <div>
                        <HomeOutlined style={{ marginRight: '10px' }} />
                    </div>
                    <div>
                        Dashboard
                     </div>
                </Button>
            </div>



            <div style={{ paddingLeft: '20px' }} >
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#A5A496', fontSize: '12px', margin: '20px' }} >
                    order section
                </div>
                <div>
                    <List>
                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {
                                if (isOrderOpen == false) {
                                    setIsOrderOpen(true)
                                }
                                else {
                                    setIsOrderOpen(false)
                                }

                                setIsDispatchOpen(false)
                                setIsRastaurantopen(false)
                                setIsFoodManagementOpen(false)
                                setIsAddonsOpen(false)
                                setIsFoodsOpen(false)

                            }}

                        >
                            <div style={{ paddingRight: '20px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <ShoppingCart /> <span style={{ paddingLeft: '10px' }} > orders </span> <span style={{ marginLeft: '80px', display: 'flex', alignItems: 'center' }} >{isOrderOpen ? <ExpandLess /> : <ExpandMore />}</span>
                            </div>

                        </ListItemButton>


                        <Collapse in={isOrderOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <div >
                                        <ul style={{ marginLeft: '20%', backgroundColor: 'none', background: 'none' }} >
                                            <li style={{ fontSize: '13px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/orders-pending')
                                                window.location.reload()

                                            }} className="secondary-list-item-hover-style" >
                                                pendings
                                            </li>


                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/accepted-orders')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                Accepted
                                            </li>


                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/processing')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                Processing
                                            </li>

                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/food-on-the-way')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                Food on the way
                                            </li>


                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/delivered')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                Delivered
                                            </li>

                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/cancelled')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                Cancelled
                                            </li>

                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/payment-failed')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                Payment Failed
                                            </li>

                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/refund')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                Refund
                                            </li>

                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/Sheduled')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                Sheduled
                                            </li>

                                            <li style={{ fontSize: '13px', marginTop: '15px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/all')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                All
                                            </li>


                                        </ul>
                                    </div>
                                </ListItemButton>
                            </List>
                        </Collapse>



                    </List>
                </div>
            </div>


            {/* dispatch management */}



            <div style={{ paddingLeft: '20px' }} >
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#A5A496', fontSize: '10px' }} >
                    <Typography noWrap style={{ fontSize: '12px', marginLeft: '20px', marginTop: '10px' }} >
                        dispatch management
                    </Typography>
                </div>
                <div>
                    <List>
                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {
                                if (isDispatchOpen == false) {
                                    setIsDispatchOpen(true)
                                }
                                else {
                                    setIsDispatchOpen(false)
                                }

                                setIsOrderOpen(false)
                                setIsRastaurantopen(false)
                                setIsFoodManagementOpen(false)
                                setIsAddonsOpen(false)
                                setIsFoodsOpen(false)
                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <NotesOutlined /> <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Dispatch Management</Typography> <span style={{ marginLeft: '80px', display: 'flex', alignItems: 'center' }} >{isDispatchOpen ? <ExpandLess /> : <ExpandMore />}</span>
                            </div>

                        </ListItemButton>


                        <Collapse in={isDispatchOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <div >
                                    <ListItemButton className="list-item-button-hover-background-style" sx={{ pl: 4 }}>

                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/orders-pending')
                                                window.location.reload()

                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Searching For Dilevery
                                                </Typography>
                                            </li>
                                        </ul>

                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/orders-list/accepted-orders')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Ongoing Orders
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>





                                </div>

                            </List>
                        </Collapse>



                    </List>
                </div>
            </div>

            {/* Rasturant  */}

            <div style={{ paddingLeft: '20px' }} >
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#A5A496', fontSize: '10px' }} >
                    <Typography noWrap style={{ fontSize: '12px', marginLeft: '20px', marginTop: '10px' }} >
                        Rastaurant
                    </Typography>
                </div>
                <div>
                    <List>
                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {
                                if (isRastaurantOpen == false) {
                                    setIsRastaurantopen(true)
                                }
                                else {
                                    setIsRastaurantopen(false)
                                }

                                setIsOrderOpen(false)
                                setIsDispatchOpen(false)
                                setIsFoodManagementOpen(false)
                                setIsAddonsOpen(false)
                                setIsFoodsOpen(false)
                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <RamenDining /> <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Rastaurant</Typography> <span style={{ marginLeft: '80px', display: 'flex', alignItems: 'center' }} >{isRastaurantOpen ? <ExpandLess /> : <ExpandMore />}</span>
                            </div>

                        </ListItemButton>


                        <Collapse in={isRastaurantOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <div >
                                    <ListItemButton className="list-item-button-hover-background-style" sx={{ pl: 4 }}>

                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px' }} onClick={() => {
                                                createBrowserHistory().push('/rastaurant/add-rastaurant')
                                                window.location.reload()

                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Add Rastaurant
                                                </Typography>
                                            </li>
                                        </ul>

                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/rastaurant/rastaurant-list')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Rastaurant List
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>


                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/rastaurant/bulk-import')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Bulk Import
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>


                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/rastaurant/bulk-export')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Bulk Export
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>





                                </div>

                            </List>
                        </Collapse>



                    </List>
                </div>
            </div>

            {/* food Management */}


            <div style={{ paddingLeft: '20px' }} >
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#A5A496', fontSize: '10px' }} >
                    <Typography noWrap style={{ fontSize: '12px', marginLeft: '20px', marginTop: '10px' }} >
                        food management
                    </Typography>
                </div>
                <div>
                    <List>
                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {
                                if (isFoodManagementOpen == false) {
                                    setIsFoodManagementOpen(true)
                                }
                                else {
                                    setIsFoodManagementOpen(false)
                                }

                                setIsOrderOpen(false)
                                setIsDispatchOpen(false)
                                setIsRastaurantopen(false)
                                setIsAddonsOpen(false)
                                setIsFoodsOpen(false)
                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <Segment /> <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Category</Typography> <span style={{ marginLeft: '80px', display: 'flex', alignItems: 'center' }} >{isFoodManagementOpen ? <ExpandLess /> : <ExpandMore />}</span>
                            </div>

                        </ListItemButton>


                        <Collapse in={isFoodManagementOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <div >
                                    <ListItemButton className="list-item-button-hover-background-style" sx={{ pl: 4 }}>

                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/category')
                                                window.location.reload()

                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Category
                                                </Typography>
                                            </li>
                                        </ul>

                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/sub-category')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Sub Category
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>


                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/bulk-import')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Bulk Import
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>


                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/bulk-export')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Bulk Export
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>





                                </div>

                            </List>
                        </Collapse>



                    </List>
                </div>
            </div>

            {/* attributes */}


            <div style={{ paddingLeft: '20px' }} >

                <div>
                    <List>
                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {

                                createBrowserHistory().push('/attributes')
                                window.location.reload();

                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <SelectAll /> <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Attributes</Typography>
                            </div>












                        </ListItemButton>

                    </List>
                </div>
            </div>

            {/* addons */}

            <div style={{ paddingLeft: '20px' }} >

                <div>
                    <List>
                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {
                                if (isAddonsOpen == false) {
                                    setIsAddonsOpen(true)
                                }
                                else {
                                    setIsAddonsOpen(false)
                                }

                                setIsOrderOpen(false)
                                setIsDispatchOpen(false)
                                setIsRastaurantopen(false)
                                setIsFoodManagementOpen(false)
                                setIsFoodsOpen(false)
                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <ViewStream /> <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Addons</Typography> <span style={{ marginLeft: '80px', display: 'flex', alignItems: 'center' }} >{isAddonsOpen ? <ExpandLess /> : <ExpandMore />}</span>
                            </div>

                        </ListItemButton>


                        <Collapse in={isAddonsOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <div >
                                    <ListItemButton className="list-item-button-hover-background-style" sx={{ pl: 4 }}>

                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/addons/list')
                                                window.location.reload()

                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    List
                                                </Typography>
                                            </li>
                                        </ul>

                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/addons/bulk-import')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Bulk Import
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>


                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/addons/bulk-export')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Bulk Export
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>

                                </div>

                            </List>
                        </Collapse>



                    </List>
                </div>
            </div>

            {/* Foods */}

            <div style={{ paddingLeft: '20px' }} >

                <div>
                    <List>
                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {
                                if (isFoodsOpen == false) {
                                    setIsFoodsOpen(true)
                                }
                                else {
                                    setIsFoodsOpen(false)
                                }

                                setIsOrderOpen(false)
                                setIsDispatchOpen(false)
                                setIsRastaurantopen(false)
                                setIsFoodManagementOpen(false)
                                setIsAddonsOpen(false)
                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', color: isFoodsOpen ? '#C1E79F' : '', }} >
                                <ViewStream /> <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Foods</Typography> <span style={{ marginLeft: '80px', display: 'flex', alignItems: 'center' }} >{isFoodsOpen ? <ExpandLess /> : <ExpandMore />}</span>
                            </div>

                        </ListItemButton>


                        <Collapse in={isFoodsOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <div >
                                    <ListItemButton className="list-item-button-hover-background-style" sx={{ pl: 4 }}>

                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/foods/add-new')
                                                window.location.reload()

                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Add New
                                                </Typography>
                                            </li>
                                        </ul>

                                    </ListItemButton>


                                    <ListItemButton className="list-item-button-hover-background-style" sx={{ pl: 4 }}>

                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/foods/list')
                                                window.location.reload()

                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    List
                                                </Typography>
                                            </li>
                                        </ul>

                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/foods/bulk-import')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Bulk Import
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>


                                    <ListItemButton sx={{ pl: 4 }} >
                                        <ul style={{ marginLeft: '20%', }} >
                                            <li style={{ fontSize: '12px', marginTop: '5px' }} onClick={() => {
                                                createBrowserHistory().push('/food-management/foods/bulk-export')
                                                window.location.reload()
                                            }} className="secondary-list-item-hover-style" >
                                                <Typography noWrap style={{ fontSize: '12px' }} >
                                                    Bulk Export
                                                </Typography>
                                            </li>
                                        </ul>
                                    </ListItemButton>

                                </div>

                            </List>
                        </Collapse>



                    </List>
                </div>
            </div>

            {/* delivery man section */}

            <div style={{ paddingLeft: '20px' }} >
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#A5A496', fontSize: '10px' }} >
                    <Typography noWrap style={{ fontSize: '12px', marginLeft: '20px', marginTop: '10px' }} >
                        Delivery MAN SECTION
                    </Typography>
                </div>
                <div>
                    <List>
                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {

                                createBrowserHistory().push('/delivery-man-section/add-delivery-man')
                                window.location.reload();

                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <SelectAll /> <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Add Delivery Man</Typography>
                            </div>

                        </ListItemButton>

                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {

                                createBrowserHistory().push('/delivery-man-section/delivery-man')
                                window.location.reload();

                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <SelectAll /> <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Delivery Man</Typography>
                            </div>

                        </ListItemButton>

                        <ListItemButton style={{ background: 'none' }} className="list-item-button-hover-style"
                            onClick={() => {

                                createBrowserHistory().push('/delivery-man-section/reviews')
                                window.location.reload();

                            }}

                        >
                            <div style={{ paddingRight: '15px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', color: isOrderOpen ? '#C1E79F' : '', }} >
                                <Typography> <HowToVoteOutlined  /> </Typography>  <Typography style={{ fontSize: '14px', paddingLeft: '10px' }} noWrap >Reviews</Typography>
                            </div>

                        </ListItemButton>

                    </List>
                </div>
            </div>
        </>
    )
}