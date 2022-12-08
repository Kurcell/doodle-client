import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Arrow from "./Arrow";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_SOCIALS + "/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Stack direction="row">
      <Arrow direction={"l"} />
      <Box>
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </Box>
      <Arrow direction={"r"} />
    </Stack>
  );
}

export default Feed;
