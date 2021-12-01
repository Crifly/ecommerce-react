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
import { Avatar, Button, Switch } from '@mui/material';
import { Circle, RemoveRedEye } from '@mui/icons-material';
import { createBrowserHistory } from 'history';



export const RastaurantListFunction = view(() => {
    const [ checked,setChecked] = React.useState(true)
    const handleSwitch = () =>{
        if(checked == true ){
            setChecked(false)
        }
        else{
            setChecked(true)
        }
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <caption>Rastaurants list</caption>
                <TableHead >
                    <TableRow style={{ backgroundColor: '#F8FAFD' }} >

                        <TableCell align="left">#</TableCell>
                        <TableCell align="center">Logo</TableCell>
                        <TableCell align="center">Rastaurant</TableCell>
                        <TableCell align="center">Owner</TableCell>
                        <TableCell align="center" style={{ marginRight: '30px' }} >Zone</TableCell>
                        <TableCell align="center"> Active/InActive  </TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        state.rastauranstList.filter(x => x.id >= 1).map(
                            x => (
                                <TableRow key={x.id}>
                                  
                                    <TableCell align="left" >{x.id}  </TableCell>
                                    <TableCell sx={{ color: 'gray' }} align="center">
                                        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                                        <Avatar>
                                            <img src={x.logo} alt="" />
                                        </Avatar>
                                        </div>
                                    </TableCell>
                                    <TableCell sx={{ color: 'gray' }} align="center">{x.rastaurantName}</TableCell>
                                    <TableCell sx={{ color: 'red' }} align="center">{x.owner}</TableCell>
                                    <TableCell align="center"> <p>  {x.zone} </p> </TableCell>
                                    <TableCell align="center">
                                        <Switch checked={checked} onClick={()=>{
                                            handleSwitch()
                                        }} />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="outlined" size="small" onClick={() => {
                                                createBrowserHistory().push("/order-detailes" + '/' + x['id']);
                                                window.location.reload()
                                                

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