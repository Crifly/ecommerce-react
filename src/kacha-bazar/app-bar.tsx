
import { ExpandMore, Notifications, NotificationsNoneOutlined, PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Toolbar, Box, Container, CssBaseline, Typography, useScrollTrigger, useMediaQuery, useTheme, TextField, IconButton, Button, } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import { addLeadingSlash } from 'history/PathUtils';
import React from 'react'
import { view } from '@risingstack/react-easy-state'
import { state } from './global-state';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';



const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: any) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export const AppBarOne = view(() => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <ElevationScroll>
                    <AppBar style={{ backgroundColor: '#10B981' }} >
                        <Toolbar style={{ margin: '0', padding: '0' }} >
                            {isMatch ?

                                <div style={{ width: isMatch ? '90%' : '60%', margin: 'auto' }} >
                                    <input type="text" name="" id="" placeholder="Search For Products (e.g fish,oil,apple)" style={{ width: '100%', height: '42px', borderRadius: '5px', border: 'none', paddingLeft: '20px', paddingRight: '20px' }}

                                    />
                                </div>
                                :
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', }} >

                                    <div style={{ height: '5rem', display: 'flex', alignItems: 'center', width: '100%', margin: 'auto', backgroundColor: '#10B981', paddingLeft: '110px', paddingRight: '110px' }} >
                                        <div>
                                            <img width="110px" height="110px" src="https://kachabazar-store.vercel.app/_next/image?url=%2Flogo%2Flogo-light.svg&w=128&q=75" alt="logo" />
                                        </div>
                                        <div style={{ width: '63%', marginLeft: '10%' }} >
                                            <input type="text" name="" id="" placeholder="Search For Everything (e.g fish,oil,apple)" style={{ width: '100%', height: '42px', borderRadius: '5px', border: 'none', paddingLeft: '20px', paddingRight: '20px' }}

                                            />
                                        </div>

                                        <div style={{ paddingLeft: '6%', width: "20%", margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                            <IconButton>
                                                <NotificationsNoneOutlined style={{ color: 'white', fontSize: '30px' }} />
                                            </IconButton>
                                            <IconButton>
                                                <StyledBadge  badgeContent={state.totalCartItems()} color="success" >
                                                <ShoppingCartOutlined style={{ color: 'white', fontSize: '30px' }} />
                                                </StyledBadge>
                                            </IconButton>
                                            <IconButton>
                                                <PersonOutlineOutlined style={{ color: 'white', fontSize: '30px' }} />
                                            </IconButton>
                                        </div>
                                    </div>

                                    <div style={{ width: '100%', borderBottom: '1px solid lightgray', backgroundColor: 'whiteSmoke' }} >
                                        <div style={{ width: '87%', margin: 'auto', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '32rem', height: '2rem' }} >

                                                <Button variant="text" style={{ color: 'black', textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', height: '2rem' }} >
                                                    <p> Categories </p> <ExpandMore style={{ fontSize: '16px' }} />
                                                </Button>
                                                <Button variant="text" style={{ color: 'black', textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', height: '2rem' }} >
                                                    <p> About us </p>
                                                </Button>
                                                <Button variant="text" style={{ color: 'black', textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', height: '2rem' }} >
                                                    <p> contact us </p>
                                                </Button>
                                                <Button variant="text" style={{ color: 'black', textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', height: '2rem' }} >
                                                    <p> pages </p> <ExpandMore style={{ fontSize: '16px' }} />
                                                </Button>
                                                <Button variant="text" style={{ color: 'black', textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', height: '2rem' }} >
                                                    <p> offers </p>
                                                </Button>

                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                                                <Button variant="text" style={{ color: 'black', textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', height: '2rem' }} >
                                                    <p> privacy policy </p>
                                                </Button>
                                                <Button variant="text" style={{ color: 'black', textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', height: '2rem' }} >
                                                    <p> term & conditions </p>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            }
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar />

            </React.Fragment>
        </>
    )
})
