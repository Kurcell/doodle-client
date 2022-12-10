import { useContext, useEffect, useState, useRef } from "react";
import AuthContext from "../context/AuthProvider";
import { Avatar, Typography, Box, IconButton } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import calculateTime from "../common/common";
import axios from "axios";

const Post = ({ post }) => {
  const { session } = useContext(AuthContext);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const likeCountRef = useRef(
    <Typography
      sx={{
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        left: "92.3%",
        top: "92%",
        height: "24px",
        width: "44px",
      }}
    >
      {post.likes}
    </Typography>
  );

  const like = async () => {
    setLiked((prev) => !prev);

    let body = JSON.stringify({
      uid: session.user.uid,
      pid: post.pid,
    });

    try {
      await axios.put(process.env.REACT_APP_SOCIALS + "/post/like", body);
      await axios
        .get(process.env.REACT_APP_SOCIALS + "/post/" + post.pid)
        .then((response) => setLikeCount(response.data.likes));
    } catch (e) {
      console.error(`Error" ${e}`);
    }
  };

  useEffect(() => {
    likeCountRef.current = (
      <Typography
        sx={{
          fontSize: "14px",
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          left: "92.3%",
          top: "92%",
          height: "24px",
          width: "44px",
        }}
      >
        {likeCount}
      </Typography>
    );
  }, [likeCount]);

  return (
    <Box sx={{ position: "relative", width: "572px", height: "703px" }}>
      <Box
        sx={{
          position: "absolute",
          left: "0%",
          top: "0%",
          height: "572px",
          width: "572px",
          background: "#B4946C",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "6.1%",
            top: "6.1%",
            height: "500px",
            width: "500px",
          }}
        >
          <img
            width="100%"
            src={
              "https://static.vecteezy.com/system/resources/previews/005/338/359/non_2x/archimedean-spiral-curve-shape-doodle-icon-for-apps-and-websites-i-vector.jpg"
            }
            alt=""
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "92.3%",
          top: "84.5%",
          height: "44px",
          width: "44px",
          borderRadius: "50%",
          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <IconButton
          sx={{ position: "absolute", left: "5%", top: "5%" }}
          onClick={like}
        >
          {liked ? (
            <WorkspacePremiumIcon sx={{ color: "#4169E1" }} />
          ) : (
            <WorkspacePremiumIcon />
          )}
        </IconButton>
      </Box>
      <Box>{likeCountRef.current}</Box>
      <Box
        sx={{
          position: "absolute",
          left: "32.1%",
          top: "87.6%",
          width: "204px",
          height: "87px",
          background: "#FFFFFF",
          boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Avatar
          sx={{ position: "absolute", left: "7.8%", top: "27.6%" }}
          src={
            "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          }
        />
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "29px",
            position: "absolute",
            left: "31.4%",
            top: "18.4%",
            height: "28px",
            width: "124px",
          }}
        >
          {post.screenname}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            position: "absolute",
            left: "31.4%",
            top: "50.6%",
            height: "24px",
            width: "124px",
          }}
        >
          @{post.username}
        </Typography>
        <Typography
          sx={{
            fontWeight: "light",
            fontSize: "14px",
            position: "absolute",
            display: "flex",
            justifyContent: "flex-end",
            left: "63.7%",
            top: "69%",
            height: "17px",
            width: "61px",
          }}
        >
          {calculateTime(post.createdat)}
        </Typography>
      </Box>
    </Box>
  );
};

export default Post;
