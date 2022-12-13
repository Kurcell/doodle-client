import { appTheme } from "../../components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ArtistCard from "../../components/ArtistCard";

const ThemedArtistCard = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <ArtistCard />
    </ThemeProvider>
  );
};

export default ThemedArtistCard;
