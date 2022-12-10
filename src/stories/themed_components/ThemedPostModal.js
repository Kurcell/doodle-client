import PostModal from "../../components/PostModal";
import { appTheme } from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { parseTesting } from "../../util/drawing";
import React from "react";

const ThemedPostModal = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <PostModal instructions={parseTesting()} />
    </ThemeProvider>
  );
};

export default ThemedPostModal;
