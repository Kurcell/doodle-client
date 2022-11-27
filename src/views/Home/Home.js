import React, { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import Feed from "../../components/Feed";

const Home = () => {
  const { session } = useContext(AuthContext);
  return (
    <div>
      {session.loading ? (
        <>Loading feed...</>
      ) : (
        <>
          <Feed />
        </>
      )}
    </div>
  );
};

export default Home;
