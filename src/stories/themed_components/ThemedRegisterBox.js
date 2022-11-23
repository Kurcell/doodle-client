import RegisterBox from "../../components/RegisterBox";
import {appTheme} from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

const ThemedRegisterBox = () => {
    return (<ThemeProvider theme={appTheme}><RegisterBox /></ThemeProvider>)
}

export default ThemedRegisterBox;
