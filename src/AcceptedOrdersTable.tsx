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
import { Button } from '@mui/material';
import { Circle, RemoveRedEye } from '@mui/icons-material';
import { createBrowserHistory } from 'history';



export const AcceeptedOrdersTable = view( () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>A basic table example with a caption</caption>
                <TableHead >
                    <TableRow style={{backgroundColor:'#F8FAFD'}} >
                        
                        <TableCell align="left">#</TableCell>
                        <TableCell align="center">Order</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center" style={{marginRight:'30px'}} >Customer</TableCell>
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
                        state.ordersList.filter(x => x.orderStatus !='pending' && x.orderStatus !='processing' && x.orderStatus !='delivered' && x.orderStatus !='cancelled' ).map(
                            x => (
                                <TableRow key={x.id}>
                                <TableCell >
                                  {x.id}
                                </TableCell>
                                <TableCell align="center" ><p style={{color:'blue'}} >{x.order} </p> </TableCell>
                                <TableCell sx={{color:'gray'}} align="center">{x.date}</TableCell>
                                <TableCell sx={{color:'gray'}} align="center">{x.costomer}</TableCell>
                                <TableCell align="center"> <p style={{fontSize:'14px',color:'blue',borderRadius:'5px',maxWidth:'70px',margin:'auto',backgroundColor:'#EAF2FF',padding:'0px'}} > {x.rasturant} </p> </TableCell>
                                <TableCell sx={{color:'red'}} align="center">{x.paymentStatus}</TableCell>
                                <TableCell align="center"> <p> $ {x.total} </p> </TableCell>
                                <TableCell sx={{color:'#07D0EA'}} align="center">  {x.orderStatus}</TableCell>
                                <TableCell align="center">{x.orderType}</TableCell>
                                <TableCell align="center">
                                    <Button  variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload();
                                                

                                            }} >
                                       <div style={{display:'flex',alignItems:'center'}} >
                                         <RemoveRedEye/> <p style={{fontSize:'12px',marginLeft:'5px',marginTop:'5px'}} >  view </p>
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

