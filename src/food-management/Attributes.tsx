import { AddCircleOutline, DeleteForever, EditTwoTone } from '@mui/icons-material'
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import {state} from '../Global-state-holder-component'


export const AttributesFunction = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <> 
            <div style={{margin:isMatch ? '5%' : '5%',}} >
                <Grid container >
                    <Grid item xs={12} >
                        <div style={{display:'flex',alignItems:'center',fontSize:'30px',height:'6rem',}} >
                            <AddCircleOutline/> 
                            <p>
                                Add Attributes
                            </p>
                        </div>
                        
                        <div style={{height:'5rem',display:'flex',flexDirection:'column',justifyContent:'space-around',}} >
                            <p>
                                Name
                            </p>
                            <TextField size='small' variant='outlined' color="primary" placeholder="New attribute"  />
                        </div>

                        <div style={{height:'6rem',display:'flex',alignItems:'center',borderBottom:'1px solid #E7EAF3'}} >
                            <Button variant="contained" color="primary" style={{padding:'10px'}} >
                                Submit
                            </Button>
                        </div>
                        
                        {/* LOWER SECTION */}

                        <div style={{height:'auto',border:'1px solid #E7EAF3',borderRadius:'10px',paddingBottom:'20px'}} >
                            <div style={{height:'2rem',display:'flex',alignItems:'center',justifyContent:'space-between',borderBottom:'2px solid #E7EAF3',padding:isMatch ? '10px' : '20px' }} >
                                <p  style={{maxWidth:'50%'}} >
                                    attribute list
                                </p>
                                <TextField  placeholder='search' variant='standard' style={{maxWidth:'50%',}} />
                            </div>

                            <div>
                                <TableContainer component={Paper} >
                                <Table sx={{minWidth:650,borderBottom: isMatch ? 'none' : '1px solid #E7EAF3'}}  >
                                    <TableHead  >
                                        <TableRow sx={{bgcolor:'#F8FAFD'}} >
                                            <TableCell style={{border:'none'}} > # </TableCell>
                                            <TableCell align="center" style={{border:'none'}}> NAME </TableCell>
                                            <TableCell align="right" style={{border:'none'}} > ACTIONS </TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody  >
                                        {
                                            state.attributesList.map(x => (
                                               <TableRow  >
                                                   <TableCell  style={{border:'none',color:'gray'}} > {x.id} </TableCell>
                                                   <TableCell align="center"  style={{border:'none',color:'gray'}} > {x.name} </TableCell>
                                                   <TableCell align="right" sx={{border:'none'}}> <EditTwoTone style={{border:'1px solid #E7EAF3',padding:'5px',borderRadius:'5px'}} /> <span style={{marginLeft:'5px'}} > <DeleteForever style={{border:'1px solid #E7EAF3',padding:'5px',borderRadius:'5px'}} /> </span> </TableCell>
                                               </TableRow> 
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                                </TableContainer>
                            </div>


                        </div>

                    </Grid>
                </Grid>

            </div>
        </>
    )
}