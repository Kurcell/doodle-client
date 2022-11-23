import LogInBox from "../../components/LogInBox";
import {appTheme} from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

const ThemedLogInBox = () => {
    return (<ThemeProvider theme={appTheme}><LogInBox /></ThemeProvider>)
}

export default ThemedLogInBox;
