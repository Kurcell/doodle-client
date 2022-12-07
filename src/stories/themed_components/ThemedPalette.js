import Palette from "../../components/Palette";
import { appTheme } from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

const ThemedPalette = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Palette />
    </ThemeProvider>
  );
};

export default ThemedPalette;
