import React, { useContext } from "react";
import { Grid, Stack } from "@mui/material";
import AuthContext from "../../context/AuthProvider";
import ArtistCard from "../../components/ArtistCard";
import ArtistGallery from "../../components/ArtistGallery";

const Profile = () => {
  const { session } = useContext(AuthContext);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      mt={7}
    >
      <Stack direction="row" justifyContent="space-between" spacing={10}>
        <ArtistCard
          screenname={session.user.screenname}
          username={session.user.username}
        />
        <ArtistGallery />
      </Stack>
    </Grid>
  );
};

export default Profile;
