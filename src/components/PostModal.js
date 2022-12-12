import {
  Box,
  Button,
  Modal,
  Fade,
  Typography,
  Stack,
  CircularProgress,
  Fab,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Doodle from "../components/Doodle";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import { parse } from "../util/drawing";
import { Navigate } from "react-router-dom";

const modalStyle = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "780px",
  height: "750px",
  bgcolor: "secondary.light",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const PostModal = ({ instructions }) => {
  const [open, setOpen] = useState(false);
  const [posting, setPosting] = useState(false);
  const [posted, setPosted] = useState(false);
  const [postId, setPostId] = useState(-1);
  const [parsedInstructions, setParsedInstructions] = useState([]);
  const { session } = useContext(AuthContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setParsedInstructions(parse(instructions));
  }, [instructions]);

  const createPost = async (event) => {
    event.preventDefault();
    setPosting(true);

    const doodleBody = JSON.stringify({
      instructions: instructions,
    });

    try {
      let doodleId;
      await axios
        .post(process.env.REACT_APP_DOODLES + "/doodle", doodleBody, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => (doodleId = response.data.id))
        .catch((error) => console.error(`Error" ${error}`));
      const postBody = JSON.stringify({
        user_id: session.user.uid,
        doodle_id: doodleId,
      });
      await axios
        .post(process.env.REACT_APP_SOCIALS + "/post", postBody, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          setPostId(response.data.pid);
          setPosted(true);
        })
        .catch((error) => console.error(`Error" ${error}`));
    } catch (e) {
      console.log(e);
    }
  };

  return !posting ? (
    <div>
      <Fab color="primary" sx={fabStyle} onClick={handleOpen}>
        <PostAddIcon />
      </Fab>
      <Modal
        aria-labelledby="post-modal"
        aria-describedby="modal-confirming-post"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography variant="h3" align="center">
              Post Preview
            </Typography>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                height: "572px",
                width: "572px",
                background: "#B4946C",
                boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  height: "500px",
                  width: "500px",
                  background: "#FFFFFF",
                }}
              >
                <Doodle instructions={parsedInstructions} />
              </Box>
            </Box>
            <Stack
              sx={{ position: "absolute", top: "90%" }}
              justifyContent="center"
              direction="row"
              spacing={2}
            >
              <Button
                sx={{ height: "54px", width: "340px" }}
                color="secondary"
                variant="contained"
                fullWidth
                onClick={handleClose}
              >
                CANCEL
              </Button>
              <Button
                sx={{ height: "54px", width: "340px" }}
                color="primary"
                variant="contained"
                fullWidth
                onClick={createPost}
              >
                POST
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  ) : posted ? (
    <Navigate to={`/post/${postId}`} />
  ) : (
    <CircularProgress />
  );
};

export default PostModal;
