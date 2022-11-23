import NavBar from "../../components/NavBar";
import themeOptions from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../../views/Home";

const ThemedNavBar = () => {
    return (
        <ThemeProvider theme={themeOptions}>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ThemeProvider>
    )
}

export default ThemedNavBar;