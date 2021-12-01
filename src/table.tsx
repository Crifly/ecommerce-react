import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { state } from './Global-state-holder-component'
import { view } from '@risingstack/react-easy-state'
import { Button, IconButton, Switch, TablePagination } from '@mui/material';
import { Circle, DeleteForever, ExpandMore, ModeEditOutline, PersonPinCircleTwoTone, RemoveRedEye } from '@mui/icons-material';
import { createBrowserHistory } from 'history';



export const AcccessibleTable = view(() => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead >
                    <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                        <TableCell align="left">#</TableCell>
                        <TableCell align="center">Order</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                        <TableCell align="center">Rasturant</TableCell>
                        <TableCell align="center">Payment Status</TableCell>
                        <TableCell align="center"> $ Total  </TableCell>
                        <TableCell align="center">Order Status</TableCell>
                        <TableCell align="center">Order Type</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        state.ordersList.filter(x => x.id >= 1).map(
                            x => (
                                <TableRow key={x.id}>
                                    <TableCell >
                                        {x.id}
                                    </TableCell>
                                    <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                    <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                    <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                    <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                    <TableCell sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                    <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                    <TableCell sx={{ color: '#07D0EA' }} align="center">  {x.orderStatus}</TableCell>
                                    <TableCell align="center">{x.orderType}</TableCell>
                                    <TableCell align="center">
                                        <Button variant="outlined" size="small" onClick={() => {
                                            createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                            window.location.reload();


                                        }} >
                                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                                <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                            </div>
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
})

// procesing table


export var ProcessingTable = view(() => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>Processing table</caption>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Order</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                            <TableCell align="center">Rasturant</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center"> $ Total  </TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Order Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.ordersList.filter(x => x.orderStatus != 'pending' && x.orderStatus != 'delivered').map(
                                x => (
                                    <TableRow key={x.id}>
                                        <TableCell >
                                            {x.id}
                                        </TableCell>
                                        <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                        <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                        <TableCell sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                        <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                        <TableCell sx={{ color: '#07D0EA' }} align="center">  {x.orderStatus}</TableCell>
                                        <TableCell align="center">{x.orderType}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();


                                            }} >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                                </div>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
})


// food on the way table



export var FoodOnTheWayTable = view(() => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>Food on the way table</caption>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Order</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                            <TableCell align="center">Rasturant</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center"> $ Total  </TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Order Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.ordersList.filter(x => x.orderStatus != 'pending' && x.orderStatus != 'delivered' && x.orderStatus != 'processing').map(
                                x => (
                                    <TableRow key={x.id}>
                                        <TableCell >
                                            {x.id}
                                        </TableCell>
                                        <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                        <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                        <TableCell sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                        <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                        <TableCell sx={{ color: '#07D0EA' }} align="center">  {x.orderStatus}</TableCell>
                                        <TableCell align="center">{x.orderType}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();


                                            }}  >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                                </div>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            )


                        }




                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
})




// deliverd order table




export var DeliveredOrderTable = view(() => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>Food on the way table</caption>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Order</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                            <TableCell align="center">Rasturant</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center"> $ Total  </TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Order Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.ordersList.filter(x => x.orderStatus != 'pending' && x.orderStatus != 'processing').map(
                                x => (
                                    <TableRow key={x.id}>
                                        <TableCell >
                                            {x.id}
                                        </TableCell>
                                        <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                        <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                        <TableCell sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                        <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                        <TableCell sx={{ color: '#07D0EA' }} align="center">  {x.orderStatus}</TableCell>
                                        <TableCell align="center">{x.orderType}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();


                                            }} >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                                </div>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            )


                        }




                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
})


// order canceled




export var OrderCancelledTable = view(() => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>Orders that has been cancelled.</caption>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Order</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                            <TableCell align="center">Rasturant</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center"> $ Total  </TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Order Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.ordersList.filter(x => x.orderStatus != 'pending' && x.orderStatus != 'processing' && x.orderStatus != 'delivered').map(
                                x => (
                                    <TableRow key={x.id}>
                                        <TableCell >
                                            {x.id}
                                        </TableCell>
                                        <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                        <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                        <TableCell sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                        <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                        <TableCell sx={{ color: '#07D0EA' }} align="center">  {x.orderStatus}</TableCell>
                                        <TableCell align="center">{x.orderType}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();


                                            }} >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                                </div>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            )


                        }




                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
})



// payment failed table


export var PaymentFailedTable = view(() => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>Payment Failed.</caption>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Order</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                            <TableCell align="center">Rasturant</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center"> $ Total  </TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Order Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.ordersList.filter(x => x.paymentStatus != 'unpaid' && x.paymentStatus != 'paid').map(
                                x => (
                                    <TableRow key={x.id}>
                                        <TableCell >
                                            {x.id}
                                        </TableCell>
                                        <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                        <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                        <TableCell sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                        <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                        <TableCell sx={{ color: '#07D0EA' }} align="center">  {x.orderStatus}</TableCell>
                                        <TableCell align="center">{x.orderType}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();


                                            }} >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                                </div>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            )


                        }




                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
})


// refund table



export var RefundTable = view(() => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>Payment Refund</caption>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Order</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                            <TableCell align="center">Rasturant</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center"> $ Total  </TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Order Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.ordersList.filter(x => x.paymentStatus != 'unpaid' && x.paymentStatus != 'paid' && x.paymentStatus != 'failed').map(
                                x => (
                                    <TableRow key={x.id}>
                                        <TableCell >
                                            {x.id}
                                        </TableCell>
                                        <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                        <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                        <TableCell sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                        <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                        <TableCell sx={{ color: '#07D0EA' }} align="center">  {x.orderStatus}</TableCell>
                                        <TableCell align="center">{x.orderType}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();


                                            }} >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                                </div>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            )


                        }




                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
})


// sheduled orders table



export var ShedulledTable = view(() => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>Shedulled Table</caption>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Order</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                            <TableCell align="center">Rasturant</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center"> $ Total  </TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Order Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.ordersList.filter(x => x.paymentStatus != 'paid').map(
                                x => (
                                    <TableRow key={x.id}>
                                        <TableCell >
                                            {x.id}
                                        </TableCell>
                                        <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                        <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                        <TableCell sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                        <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                        <TableCell sx={{ color: '#07D0EA' }} align="center">  {x.orderStatus}</TableCell>
                                        <TableCell align="center">{x.orderType}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();


                                            }} >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                                </div>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            )


                        }




                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
})


// all orders table 



export var AllOrdersTable = view(() => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <caption>All Orders</caption>
                    <TableHead >
                        <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                            <TableCell align="left">#</TableCell>
                            <TableCell align="center">Order</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center" style={{ marginRight: '30px' }} >Customer</TableCell>
                            <TableCell align="center">Rasturant</TableCell>
                            <TableCell align="center">Payment Status</TableCell>
                            <TableCell align="center"> $ Total  </TableCell>
                            <TableCell align="center">Order Status</TableCell>
                            <TableCell align="center">Order Type</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            state.ordersList.map(
                                x => (
                                    <TableRow key={x.id}>
                                        <TableCell >
                                            {x.id}
                                        </TableCell>
                                        <TableCell align="center" ><p style={{ color: 'blue' }} >{x.order} </p> </TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.date}</TableCell>
                                        <TableCell sx={{ color: 'gray' }} align="center">{x.costomer}</TableCell>
                                        <TableCell align="center"> <p style={{ fontSize: '14px', color: 'blue', borderRadius: '5px', maxWidth: '70px', margin: 'auto', backgroundColor: '#EAF2FF', padding: '0px' }} > {x.rasturant} </p> </TableCell>
                                        <TableCell style={{ color: x.paymentStatus === 'paid' ? '#15CABD' : '' }} sx={{ color: 'red' }} align="center">{x.paymentStatus}</TableCell>
                                        <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                        <TableCell style={{ color: x.orderStatus === 'cancelled' ? 'red' : x.orderStatus === 'accepted' ? '#15CABD' : '' }} sx={{ color: '#07D0EA', }} align="center">  {x.orderStatus}</TableCell>
                                        <TableCell align="center">{x.orderType}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();


                                            }}

                                            >
                                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                                    <RemoveRedEye /> <p style={{ fontSize: '12px', marginLeft: '5px', marginTop: '5px' }} >  view </p>
                                                </div>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                )
                            )


                        }




                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
})


// food Category 


export const FoodCategory = view(() => {
    const [isOn, setIsOn] = React.useState(true)
    const handleIsOn = () => {
        if (isOn == true && state.foodCategoryList.find(x => x.id == x.id)) {
            setIsOn(false)
        }
        else {
            setIsOn(true)
        }
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>Catogary list</caption>
                <TableHead style={{ borderTop: '1px solid #EEF0F6' }}>
                    <TableRow style={{ backgroundColor: '#F8FAFD' }} >
                        <TableCell align="left">#</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center" style={{ marginRight: '30px' }} >Periority</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        state.foodCategoryList.filter(x => x.id >= 1).map(
                            x => (
                                <TableRow key={x.id}>
                                    <TableCell >
                                        {x.id}
                                    </TableCell>
                                    <TableCell align="center" ><p style={{ color: 'blue' }} >{x.Name} </p> </TableCell>
                                    <TableCell sx={{ color: 'gray' }} align="center">
                                        <Switch key={x.id} checked={isOn} onClick={() => {
                                            handleIsOn()



                                        }} />
                                    </TableCell>
                                    <TableCell sx={{ color: 'gray' }} align="center"><Button size="small" variant="contained" color="inherit" >Normal <ExpandMore style={{ marginLeft: '20px' }} /> </Button></TableCell>
                                    <TableCell align="center">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                            <IconButton size="small" style={{ border: '1px solid #EEF0F6', borderRadius: '0px', }} ><ModeEditOutline /> </IconButton > <IconButton size="small" style={{ border: '1px solid #EEF0F6', borderRadius: '0px', marginLeft: '10px' }} > <DeleteForever /> </IconButton>
                                        </div>
                                    </TableCell>

                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
})

// Addon list


export const AddonList = view(() => {
    const [isOn, setIsOn] = React.useState(true)
    const handleIsOn = () => {
        if (isOn == true) {
            setIsOn(false)
        }
        else {
            setIsOn(true)
        }
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <TableContainer   >
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>Addon List</caption>
                <TableHead style={{ borderTop: '1px solid #EEF0F6' }}>
                    <TableRow style={{ backgroundColor: '#F8FAFD' }} >
                        <TableCell sx={{ border: 'none' }} align="left">#</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Name</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Price</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Rastaurant</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Status</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        state.addonsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(
                            x => (
                                <TableRow key={x.id}>
                                    <TableCell sx={{ color: 'gray', border: 'none' }} >
                                        {x.id}
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center" ><p style={{ color: 'gray' }} >{x.name} </p> </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center" ><p style={{ color: 'gray' }} >{x.price} </p> </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center" ><p style={{ color: 'gray' }} >{x.restaurant} </p> </TableCell>
                                    <TableCell sx={{ color: 'gray', border: 'none' }} align="center">
                                        <Switch key={x.id} checked={isOn} onClick={() => {
                                            handleIsOn()



                                        }} />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                            <IconButton size="small" style={{ border: '1px solid #EEF0F6', borderRadius: '0px', }} ><ModeEditOutline /> </IconButton > <IconButton size="small" style={{ border: '1px solid #EEF0F6', borderRadius: '0px', marginLeft: '10px' }} > <DeleteForever /> </IconButton>
                                        </div>
                                    </TableCell>

                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={state.addonsList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
})


// foods list

export const FoodsList = view(() => {
    const [isOn, setIsOn] = React.useState(true)
    const handleIsOn = () => {
        if (isOn == true) {
            setIsOn(false)
        }
        else {
            setIsOn(true)
        }
    }

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <TableContainer   >
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                
                <TableHead style={{ borderTop: '1px solid #EEF0F6' }}>
                    <TableRow style={{ backgroundColor: '#F8FAFD' }} >
                        <TableCell sx={{ border: 'none' }} align="left">#</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Name</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Category</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Rastaurant</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Price</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Status</TableCell>
                        <TableCell sx={{ border: 'none' }} align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        state.FoodsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(
                            x => (
                                <TableRow key={x.id}>
                                    <TableCell sx={{ color: 'gray', border: 'none' }} >
                                        {x.id}
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center" ><p style={{ color: 'gray' }} >{x.name} </p> </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center" ><p style={{ color: 'gray' }} >{x.category} </p> </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center" ><p style={{ color: 'gray' }} >{x.restaurant} </p> </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center" ><p style={{ color: 'gray' }} >{x.price} </p> </TableCell>
                                    <TableCell sx={{ color: 'gray', border: 'none' }} align="center">
                                        <Switch key={x.id} checked={x.status == 'on'} onClick={() => {
                                            handleIsOn()



                                        }} />
                                    </TableCell>
                                    <TableCell sx={{ border: 'none' }} align="center">
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                            <IconButton size="small" style={{ border: '1px solid #EEF0F6', borderRadius: '0px', }} ><ModeEditOutline /> </IconButton > <IconButton size="small" style={{ border: '1px solid #EEF0F6', borderRadius: '0px', marginLeft: '10px' }} > <DeleteForever /> </IconButton>
                                        </div>
                                    </TableCell>

                                </TableRow>
                            )
                        )
                    }
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={state.addonsList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
})