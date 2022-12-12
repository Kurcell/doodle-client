import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";
import Post from "../../components/Post";
import { parse } from "../../util/drawing";
import Doodle from "../../components/Doodle";

const IndividualPost = () => {
  const [post, setPost] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const postRef = useRef(null);
  let { pid } = useParams();

  const getPost = async () => {
    let doodleId;
    await axios
      .get(process.env.REACT_APP_SOCIALS + `/post/${pid}`)
      .then((response) => {
        setPost(response.data);
        doodleId = response.data.doodle_id;
      })
      .catch((error) => console.error(`Error" ${error}`));
    await axios
      .get(process.env.REACT_APP_DOODLES + `/doodle/${doodleId}`)
      .then((response) => {
        setInstructions(parse(response.data.instructions));
      })
      .catch((error) => console.error(`Error" ${error}`));
  };

  useEffect(() => {
    getPost();
  }, []);

  useEffect(() => {
    if (post && instructions) {
      postRef.current = (
        <Post post={post}>
          <Doodle instructions={instructions} />
        </Post>
      );
    }
  }, [post, instructions]);

  return !postRef.current ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      mt={7}
    >
      {postRef.current}
    </Grid>
  );
};
export default IndividualPost;
