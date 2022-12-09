import Dollop from "../../components/Dollop";
import { appTheme } from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

const ThemedDollop = (color = "#94B49F") => {
  return (
    <ThemeProvider theme={appTheme}>
      <Dollop color={color} />
    </ThemeProvider>
  );
};

export default ThemedDollop;
