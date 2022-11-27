import React, { useContext } from "react";
import { Typography } from "@mui/material";
import AuthContext from "../../context/AuthProvider";

const Profile = () => {
  const { session } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Typography>
        I am {session.user.screenname} @{session.user.username}
      </Typography>
    </React.Fragment>
  );
};

export default Profile;
