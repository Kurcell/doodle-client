import React, { useState, useCallback, useEffect, useRef } from "react";
import Post from "../components/Post";
import Doodle from "../components/Doodle";
import Stack from "@mui/material/Stack";
import { Box, CircularProgress, Grid } from "@mui/material";
import Arrow from "./Arrow";
import axios from "axios";
import { parse } from "../util/drawing";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [doodles, setDoodles] = useState([]);
  const [currentPost, setCurrentPost] = useState(-1);
  const postRef = useRef(null);
  const doodleRef = useRef(null);

  const extractDoodles = (posts, doodleIds) => {
    for (let i = 0; i < posts.length; i++) {
      doodleIds.push(posts[i].doodle_id);
    }
  };

  const findDoodle = (doodles, doodleId) => {
    for (let i = 0; i < doodles.length; i++) {
      if (doodles[i].id === doodleId) {
        return doodles[i];
      }
    }

    return {
      id: -1,
      instructions: "",
    };
  };

  const filterDoodles = (allDoodles, doodleIds) => {
    let filteredDoodles = [];
    for (let i = 0; i < doodleIds.length; i++) {
      filteredDoodles.push(findDoodle(allDoodles, doodleIds[i]));
    }
    return filteredDoodles;
  };

  const getPosts = async () => {
    let doodleIds = [];
    await axios
      .get(process.env.REACT_APP_SOCIALS + "/posts/portfolio", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
        extractDoodles(response.data, doodleIds);
      })
      .then(() => setCurrentPost(0))
      .catch((error) => console.error(`Error" ${error}`));
    await axios
      .get(process.env.REACT_APP_DOODLES + "/doodles", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setDoodles(filterDoodles(response.data, doodleIds));
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0 && doodles.length > 0) {
      const parsedInstructions = parse(doodles[0].instructions);
      doodleRef.current = <Doodle instructions={parsedInstructions} />;
      postRef.current = <Post post={posts[0]}>{doodleRef.current}</Post>;
    }
  }, [posts, doodles]);

  const nextPost = useCallback(() => {
    if (currentPost + 1 < posts.length) {
      const parsedInstructions = parse(doodles[currentPost + 1].instructions);
      doodleRef.current = <Doodle instructions={parsedInstructions} />;
      postRef.current = (
        <Post post={posts[currentPost + 1]} instructions={parsedInstructions}>
          {doodleRef.current}
        </Post>
      );
      setCurrentPost((currentPost) => currentPost + 1);
    }
  }, [currentPost, postRef, posts, doodles]);

  const prevPost = useCallback(() => {
    if (currentPost > 0) {
      const parsedInstructions = parse(doodles[currentPost - 1].instructions);
      doodleRef.current = <Doodle instructions={parsedInstructions} />;
      postRef.current = (
        <Post post={posts[currentPost - 1]} instructions={parsedInstructions}>
          {doodleRef.current}
        </Post>
      );
      setCurrentPost((currentPost) => currentPost - 1);
    }
  }, [currentPost, postRef, posts, doodles]);

  return (
    <Box>
      {!postRef.current ? (
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          mt={7}
          sx={{ width: "550px", height: "800px" }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Stack spacing={5}>
          <Box>{postRef.current}</Box>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            mt={7}
          ></Grid>
        </Stack>
      )}
    </Box>
  );
}

export default Feed;
