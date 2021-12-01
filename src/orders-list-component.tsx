import { ExpandMore, Pending, Search, SearchOffOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, Table, TextField } from '@mui/material'
import { state } from './Global-state-holder-component'
import { view } from '@risingstack/react-easy-state'
import React from 'react'
import { AcccessibleTable, ProcessingTable, FoodOnTheWayTable, DeliveredOrderTable, OrderCancelledTable, PaymentFailedTable, RefundTable, ShedulledTable, AllOrdersTable } from './table'
import { AcceeptedOrdersTable } from './AcceptedOrdersTable'


export const OrdersList = view(() => {
    return (
        <>

            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Pending orders:
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly Table */}

                <div>
                    <AcccessibleTable />
                </div>

            </div>











        </>
    )
})



// Accepted orders function 



export const AcceptedOrders = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Accepted Orders
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly accepted orders table*/}

                <div>
                    <AcceeptedOrdersTable />
                </div>

            </div>

        </>
    )

}


// processing function

export const Processing = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Processing Orders
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly processing table orders table*/}

                <div>
                    <ProcessingTable />
                </div>

            </div>
        </>
    )
}


// food on the way


export const FoodOnTheWay = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Processing Orders
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly processing table orders table*/}

                <div>
                    <FoodOnTheWayTable />
                </div>

            </div>
        </>
    )
}


// delivered order function


export const DeliveredOrderFunction = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Delivered
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly processing table orders table*/}

                <div>
                    <DeliveredOrderTable />
                </div>

            </div>
        </>
    )
}


// order cancelled function


export const OrderCancelledFunction = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Cancelled
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly processing table orders table*/}

                <div>
                    <OrderCancelledTable />
                </div>

            </div>
        </>
    )
}


// payment failed function



export const PaymentFailedFunction = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Payment Failed
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly processing table orders table*/}

                <div>
                    <PaymentFailedTable />
                </div>

            </div>
        </>
    )
}


// payment refund function


export const RefundFunction = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Refund
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly processing table orders table*/}

                <div>
                    <RefundTable />
                </div>

            </div>
        </>
    )
}


// shedulled orders function



export const ShedulledFunction = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        Shedulled
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly processing table orders table*/}

                <div>
                    <ShedulledTable />
                </div>

            </div>
        </>
    )
}

// all orders function


export const AllOrdersFunction = () => {
    return (
        <>
            <Grid container>
                <Grid item lg={12}>
                    <div style={{ margin: '50px', fontSize: '30px', display: 'flex', wordWrap: 'break-word' }} >
                        All orders
                    </div>

                </Grid>

            </Grid>


            {/* Table container div */}



            <div style={{ border: '1px solid #EEF0F6', margin: '20px', paddingBottom: '40px', borderRadius: '10px', padding: '3px' }} >
                <div style={{ borderBottom: '1px solid #EEF0F6', display: 'flex', alignItems: 'center', marginBottom: '10px', marginTop: '10px', paddingBottom: "5px", paddingTop: '5px' }} >


                    <Grid container spacing={2} >
                        <Grid item lg={8} md={8} xs={12}  >

                            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '80%', margin: 'auto', }} >

                                <Search />

                                <TextField
                                    variant="standard"

                                    placeholder="search"

                                    style={{ paddingBottom: '10px' }}
                                />

                                <Button variant="contained" size="small"  >
                                    search
                            </Button>

                            </div>

                        </Grid>


                        <Grid item xs={12} md={4} lg={4} sm={6} >
                            <div style={{ display: 'flex', alignItems: 'center' }} >
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px', }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                                <Button size='small' variant="outlined" style={{ display: 'flex', alignItems: 'center', margin: '2px' }} >
                                    export <ExpandMore />
                                </Button>
                            </div>
                        </Grid>


                    </Grid>

                </div>


                {/* Now finnaly processing table orders table*/}

                <div>
                    <AllOrdersTable/>
                </div>

            </div>
        </>
    )
}