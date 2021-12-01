import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button, Grid } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export const BulkExportFunction = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <> 
            <div style={{ margin: isMatch ? '10px' : '80px',border:'1px solid #EEF0F6',paddingBottom: isMatch ? '20px' : '40px',borderRadius:'10px' }}>
                <Grid container >
                    <Grid item  xs={12}>
                        <div style={{borderBottom:'1px solid #EEF0F6',padding:isMatch ? '15px' : '20px'}} >
                            <p style={{fontSize:'18px',fontWeight:'bold'}} >
                                Export Rastaurants
                            </p>
                        </div>
                        <div  style={{padding:isMatch ? '20px' : '20px'}} >
                            <p>
                                Type
                            </p>
                            <Button  variant="outlined" color="inherit"  fullWidth style={{margin:'10px',maxWidth:isMatch ? '100%' :'30%',textTransform:'capitalize',display:'flex',alignItems:'center',justifyContent:'space-between' }} >
                                  <p>all Type</p> <ExpandMore/> 
                            </Button>
                        </div>
                        <div style={{borderBottom:'1px solid #EEF0F6',paddingBottom:'20px'}} >
                            <Button  size="small" variant="contained" color="primary" style={{paddingTop:'10px',paddingBottom:'10px'}} >
                                submit
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}