import React, {useState} from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar} from "@mui/material";
import BrushIcon from '@mui/icons-material/Brush';
import {Link} from "react-router-dom";

const Header = () => {
    const [selectedTab, setSelectedTab] = useState("home");

    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <BrushIcon/>

                    <Tabs
                        value={selectedTab}
                        onChange={(e, selectedTab)=> setSelectedTab(selectedTab)}
                        textColor= "inherit"
                        indicatorColor="secondary">
                        <Tab label="home" value="home"/>
                        <Tab label="profile" value="profile"/>
                        <Tab label="settings" value="settings"/>
                    </Tabs>

                    <Button variant="contained" color="secondary" sx={{marginLeft: "auto"}}>
                        <Link to="/login">Log In</Link>
                    </Button>

                    <Button variant="contained" color="secondary" sx={{marginLeft: "10px"}}>
                        <Link to="/register">Register</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header;
