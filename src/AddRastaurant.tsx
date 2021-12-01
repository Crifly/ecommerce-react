import { AddCircleOutlined, FiberPinTwoTone, Margin } from '@mui/icons-material';
import { Button, Grid, TextField, } from '@mui/material'
import { makeStyles, } from '@mui/styles'
import { view } from '@risingstack/react-easy-state';
import React, { useState, } from 'react'
import './AddRastaurant.css'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useStyle = makeStyles({



    iconStyle: {
        marginRight: '10px'
    },

    textFieldHeadinStyle: {
        fontSize: '14px',
        marginBottom: '10px',

    },

    textAreaStyle: {
        // width:'100%',

    }


});



export const AddRastaurantFunction = view(() => {
    const style = useStyle();
    const [rastaurantName, setRastaurantName] = useState<any>('');
    const [fullName, setFullName] = useState([]);
    const theme = useTheme();

    const handleSubmit = () => {
        setFullName(rastaurantName);

    }

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {/* Header */}

            <Grid container >
                <Grid item xs={12} >
                    <div className="headingStyle"   >
                        <AddCircleOutlined className={style.iconStyle} />
                        <p> Add Rastaurant  </p>
                    </div>
                </Grid>
            </Grid>

            {/* body section */}

            <Grid container >

                <Grid item md={6} xs={12} >
                    <form className="container-div-style"  style={{height:'auto'}} >
                        <div  className="text-feid-div-style" >
                            <p className={style.textFieldHeadinStyle} >
                                Rastaurant Name
                        </p>
                            <TextField type="text" value={rastaurantName} onChange={(e) => setRastaurantName(e.target.value)} size="small" variant="outlined" color="primary" fullWidth placeholder="rastaurant name" />
                        </div>

                        <div className="text-feid-div-style" style={{ height: 'auto' }} >
                            <p className={style.textFieldHeadinStyle} >
                                Rastaurant Adress
                        </p>
                            <textarea color="primary" placeholder="adress" style={{ width: '100%' }} />
                        </div>

                        <div className="text-feid-div-style"  >
                            <p className={style.textFieldHeadinStyle} >
                                VAT/Tax(%)
                        </p>

                            <TextField size="small" variant="outlined" color="primary" fullWidth placeholder="VAT/TAX" />
                        </div>

                        <div className="text-feid-div-style" >
                            <p className={style.textFieldHeadinStyle} >
                                Raststaurant logo
                        </p>

                            <TextField size="small" variant="outlined" color="primary" fullWidth placeholder="Choose File" />
                        </div>



                    </form>


                </Grid>

                <Grid item md={6} xs={12} >
                    <div className="container-div-style" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <div style={{ width: '200px', height: '200px', margin: 'auto', backgroundColor: 'blue' }} >
                            <img width="100%" height="100%" src="https://demo.6amtech.com/stackfood/public/assets/admin/img/400x400/img2.jpg" alt="" />
                        </div>
                    </div>
                </Grid>


            </Grid>

            {/* Lower portion */}


            <div style={{ margin: '10px', }} >
                <Grid container  >

                    <Grid item xs={12} md={5} >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '21rem' }} >
                            <div className="text-feid-div-style" style={{ margin: 'auto', width: '70%', }} >
                                <p className={style.textFieldHeadinStyle} >
                                    choseFile
                                 </p>

                                <TextField size="small" variant="outlined" color="primary" fullWidth placeholder="chose file" />
                            </div>

                            <div className="text-feid-div-style" style={{ margin: 'auto', width: '70%' }} >
                                <p className={style.textFieldHeadinStyle} >
                                    longitude
                                 </p>

                                <TextField size="small" variant="outlined" color="primary" fullWidth placeholder="EX:-92.3456" />
                            </div>

                            <div className="text-feid-div-style" style={{ margin: 'auto', width: '70%' }} >
                                <p className={style.textFieldHeadinStyle} >
                                    latitude
                                </p>

                                <TextField size="small" variant="outlined" color="primary" fullWidth placeholder="EX:-103.45678" />
                            </div>

                        </div>
                    </Grid>

                    <Grid item xs={12} md={7} >

                        <div style={{ height: '20rem', margin: '20px' }} >
                            <img width="100%" height="100%" src="https://www.francomasia.com/wp-content/uploads/2019/01/Map-Direction-Francom-Asia.jpg" alt="" />
                        </div>
                    </Grid>

                </Grid>

                {/* upload cover photo */}



            </div>

            <div style={{ margin: '10px', borderBottom: '1px solid lightgray', paddingBottom: '10px' }} >
                <Grid container>
                    <Grid item xs={12}>
                        <p style={{ marginBottom: '20px' }} >
                            chose cover photo
                        </p>
                        <div style={{ width: "100%", border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                            <p style={{ color: 'gray', marginLeft: '10px' }} >
                                chose file
                            </p>
                            <Button variant="contained">
                                Browse
                            </Button>
                        </div>
                    </Grid>

                    <Grid item xs={12} >
                        <div style={{ height: '12rem', maxWidth: '28%', margin: 'auto', marginTop: '20px', marginBottom: '20px', }} >
                            <img style={{ borderRadius: '10px' }} width="100%" height="100%" src="https://demo.6amtech.com/stackfood/public/assets/admin/img/400x400/img2.jpg" alt="" />

                        </div>
                    </Grid>


                </Grid>
            </div>

            <div style={{ margin: isMatch ? '10px' : '30px', paddingBottom: isMatch ? '2rem' : '4rem', borderBottom: '1px solid #E7EAF3' }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} >
                        <div style={{ maxWidth: '90%', margin: 'auto' }} >
                            <p style={{ marginBottom: '6px' }} >
                                First Name
                            </p>
                            <TextField fullWidth variant="outlined" size="small" placeholder="First Name" />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <div style={{ maxWidth: '90%', margin: 'auto' }} >
                            <p style={{ marginBottom: '6px' }} >
                                Last Name
                            </p>
                            <TextField fullWidth variant="outlined" size="small" placeholder="Last Name" />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <div style={{ maxWidth: '90%', margin: 'auto' }} >
                            <p style={{ marginBottom: '6px' }} >
                                Phone
                            </p>
                            <TextField fullWidth variant="outlined" size="small" placeholder="EX:-+920303......." />
                        </div>
                    </Grid>


                </Grid>
            </div>

            {/* Email and password varification */}

            <div style={{ margin: isMatch ? '10px' : '30px', paddingBottom: isMatch ? '2rem' : '2rem', }} >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4} >
                        <div style={{ maxWidth: '90%', margin: 'auto' }} >
                            <p style={{ marginBottom: '6px' }} >
                                Email
                            </p>
                            <TextField type="email" fullWidth variant="outlined" size="small" placeholder="email" />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <div style={{ maxWidth: '90%', margin: 'auto' }} >
                            <p style={{ marginBottom: '6px' }} >
                                Password
                            </p>
                            <TextField type="password" fullWidth variant="outlined" size="small" placeholder="password" />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} >
                        <div style={{ maxWidth: '90%', margin: 'auto' }} >
                            <p style={{ marginBottom: '6px' }} >
                                Confirm Password
                            </p>
                            <TextField type="password" fullWidth variant="outlined" size="small" placeholder="retype password" />
                        </div>
                    </Grid>


                </Grid>

                <Grid item xs={12} >
                    <div style={{ margin: isMatch ? '20px' : '30px', paddingBottom: isMatch ? '2rem' : '2rem', }} >
                        <Button variant="contained" color="primary" >
                            Submit
                        </Button>
                    </div>
                </Grid>
            </div>


        </>
    )
})