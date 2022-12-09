import React, { useState, useEffect, useRef } from "react";
import Post from "../components/Post";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Arrow from "./Arrow";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);
  const postRef = useRef(null);

  const next = () => {
    console.log(currentPost);
    if (currentPost < posts.length - 1) {
      setCurrentPost(currentPost + 1);
    }
  };

  const prev = () => {
    console.log(currentPost);
    if (currentPost > 0) {
      setCurrentPost(currentPost - 1);
    }
  };

  const getPosts = () => {
    axios
      .get(process.env.REACT_APP_SOCIALS + "/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(`Error" ${error}`));
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log(posts);
    if (posts.length > 0) {
      postRef.current = (
        <Post
          screenname={posts[currentPost].screenname}
          username={posts[currentPost].username}
          date={posts[currentPost].createdat}
        />
      );
    }
  }, [posts, currentPost]);

  return (
    <Stack direction="row">
      <Arrow direction={"l"} onClick={prev} />
      <Box>{postRef.current}</Box>
      <Arrow direction={"r"} onClick={next} />
    </Stack>
  );
}

export default Feed;
