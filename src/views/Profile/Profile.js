import React, { useContext } from "react";
import { Grid } from "@mui/material";
import AuthContext from "../../context/AuthProvider";
import ArtistCard from "../../components/ArtistCard";

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
      <ArtistCard
        screenname={session.user.screenname}
        username={session.user.username}
      />
    </Grid>
  );
};

export default Profile;
