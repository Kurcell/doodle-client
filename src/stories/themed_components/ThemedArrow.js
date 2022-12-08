import { appTheme } from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import Arrow from "../../components/Arrow";

const ThemedPost = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Arrow />
    </ThemeProvider>
  );
};

export default ThemedPost;
