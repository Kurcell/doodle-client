import React, { useState } from 'react';
import { AppBar, Box, Button, Tab, Tabs, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
import DudolIcon from "../icons/DudolIcon";

const Header = () => {
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
                    <DudolIcon />
                    <Tabs
                        value={selectedTab}
                        onChange={(e, selectedTab) => setSelectedTab(selectedTab)}
                        textColor="inherit"
                        indicatorColor="secondary">
                        <Tab disableRipple label="home" value={routes[0]} component={Link} to={routes[0]} />
                        <Tab disableRipple label="easel" value={routes[3]} component={Link} to={routes[3]} />
                        <Tab disableRipple label="profile" value={routes[1]} component={Link} to={routes[1]} />
                        <Tab disableRipple label="settings" value={routes[2]} component={Link} to={routes[2]} />
                    </Tabs>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={logout}
                        sx={{ marginLeft: "auto" }}>
                        Log out
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
