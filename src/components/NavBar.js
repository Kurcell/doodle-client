import React, { useState, useContext } from 'react';
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import BrushIcon from '@mui/icons-material/Brush';
import { Link } from "react-router-dom";
import AuthContext from '../context/AuthProvider';
import axios from 'axios';

const Header = () => {
    const { session } = useContext(AuthContext)
    const routes = ["/", "/profile", "/settings", "/easel"];
    const [selectedTab, setSelectedTab] = useState(routes[0]);

    const logout = async () => {
        try {
            await axios.get(process.env.REACT_APP_SOCIALS + '/logout',
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
            window.location.reload(false);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <BrushIcon />
                    <Tabs
                        value={selectedTab}
                        onChange={(e, selectedTab) => setSelectedTab(selectedTab)}
                        textColor="inherit"
                        indicatorColor="secondary">
                        <Tab label="home" value={routes[0]} component={Link} to={routes[0]} />
                        {session.authenticated && <Tab label="easel" value={routes[3]} component={Link} to={routes[3]} />}
                        {session.authenticated && <Tab label="profile" value={routes[1]} component={Link} to={routes[1]} />}
                        {session.authenticated && <Tab label="settings" value={routes[2]} component={Link} to={routes[2]} />}
                    </Tabs>
                    {!session.loading ? session.authenticated ?
                        <>
                            <Typography
                                sx={{
                                    marginLeft: "auto",
                                    display: session.authenticated
                                }}>
                                {session.user.screenname}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={logout}
                                sx={{ marginLeft: "10px" }}>
                                Log out
                            </Button>
                        </>
                        :
                        <>
                            <Button
                                variant="contained"
                                color="secondary"
                                component={Link}
                                to="/login"
                                sx={{ marginLeft: "auto" }}>
                                Login
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                component={Link}
                                to="/register"
                                sx={{ marginLeft: "10px" }}>
                                Register
                            </Button>
                        </>
                        :
                        <></>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
