import React, { useState, useCallback, useEffect, useRef } from "react";
import Post from "../components/Post";
import Stack from "@mui/material/Stack";
import { Box, CircularProgress, Grid } from "@mui/material";
import Arrow from "./Arrow";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(-1);
  const postRef = useRef(null);

  const getPosts = async () => {
    await axios
      .get(process.env.REACT_APP_SOCIALS + "/posts")
      .then((response) => setPosts(response.data))
      .then(() => setCurrentPost(0))
      .catch((error) => console.error(`Error" ${error}`));
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      console.log(posts);
      postRef.current = <Post post={posts[0]} />;
    }
  }, [posts]);

  const nextPost = useCallback(() => {
    if (currentPost + 1 < posts.length) {
      console.log("pid: " + posts[currentPost + 1].pid);
      postRef.current = <Post post={posts[currentPost + 1]} />;
      setCurrentPost((currentPost) => currentPost + 1);
    }
  }, [currentPost, postRef, posts]);

  const prevPost = useCallback(() => {
    if (currentPost > 0) {
      console.log("pid: " + posts[currentPost - 1].pid);
      postRef.current = <Post post={posts[currentPost - 1]} />;
      setCurrentPost((currentPost) => currentPost - 1);
    }
  }, [currentPost, postRef, posts]);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      mt={7}
    >
      {!postRef.current ? (
        <CircularProgress />
      ) : (
        <Stack direction="row" justifyContent="space-between" spacing={30}>
          <Arrow direction={"l"} onClick={prevPost} />
          <Box>{postRef.current}</Box>
          <Arrow direction={"r"} onClick={nextPost} />
        </Stack>
      )}
    </Grid>
  );
}

export default Feed;
