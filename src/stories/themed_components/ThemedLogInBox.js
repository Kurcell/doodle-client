import LogInBox from "../../components/LogInBox";
import themeOptions from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

const ThemedLogInBox = () => {
    return (<ThemeProvider theme={themeOptions}><LogInBox /></ThemeProvider>)
}

export default ThemedLogInBox;
