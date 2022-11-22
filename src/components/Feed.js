import React, {useState, useEffect} from "react";
import Post from "../components/Post";
import { Grid } from "@mui/material";

function Feed(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_SOCIALS + '/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [])

  return (
    <>
      <Grid container spacing={4} marginTop="1vh">
        {posts.map((post) => {
          return <Post post={post} />
        })}
      </Grid>
    </>
  );
}

export default Feed;