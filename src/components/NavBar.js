import React, {useState} from 'react';
import {AppBar, Box, Button, Tab, Tabs, Toolbar} from "@mui/material";
import BrushIcon from '@mui/icons-material/Brush';
import {Link} from "react-router-dom";

const Header = () => {
    const routes = ["/", "/profile", "/settings", "/easel"];
    const [selectedTab, setSelectedTab] = useState(routes[0]);

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <BrushIcon/>

                    <Tabs
                        value={selectedTab}
                        onChange={(e, selectedTab)=> setSelectedTab(selectedTab)}
                        textColor="inherit"
                        indicatorColor="secondary">
                        <Tab label="home" value={routes[0]} component={Link} to={routes[0]}/>
                        <Tab label="easel" value={routes[3]} component={Link} to={routes[3]}/>
                        <Tab label="profile" value={routes[1]} component={Link} to={routes[1]}/>
                        <Tab label="settings" value={routes[2]} component={Link} to={routes[2]}/>
                    </Tabs>

                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/login"
                        sx={{marginLeft: "auto"}}>
                        Log in
                    </Button>

                    <Button
                        variant="contained"
                        color="secondary"
                        component={Link}
                        to="/register"
                        sx={{marginLeft: "10px"}}>
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
