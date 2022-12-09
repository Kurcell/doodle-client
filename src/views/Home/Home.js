import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import Feed from "../../components/Feed";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const { session } = useContext(AuthContext);
  return (
    <div>
      {session.loading ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <Feed />
      )}
    </div>
  );
};

export default Home;
