import { appTheme } from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import Post from "../../components/Post";

const ThemedPost = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Post />
    </ThemeProvider>
  );
};

export default ThemedPost;
