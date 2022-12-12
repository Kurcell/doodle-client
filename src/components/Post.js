import { useContext, useEffect, useRef, useCallback } from "react";
import AuthContext from "../context/AuthProvider";
import { Avatar, Typography, Box, IconButton } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import calculateTime from "../common/common";
import axios from "axios";

const Post = ({ post, children }) => {
  const { session } = useContext(AuthContext);
  const likeIconRef = useRef(<WorkspacePremiumIcon />);
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

  useEffect(() => {
    checkLiked();
  }, []);

  const checkLiked = useCallback(() => {
    axios
      .get(
        process.env.REACT_APP_SOCIALS +
          "/post/like/check/" +
          session.user.uid +
          "/" +
          post.pid
      )
      .then((response) => {
        if (response.data) {
          likeIconRef.current = (
            <WorkspacePremiumIcon sx={{ color: "#4169E1" }} />
          );
        } else {
          likeIconRef.current = <WorkspacePremiumIcon />;
        }
      })
      .catch((error) => console.error(`Error" ${error}`));
  }, [session, post, likeIconRef]);

  const like = useCallback(async () => {
    try {
      await axios
        .get(process.env.REACT_APP_SOCIALS + "/post/like", {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          params: { pid: post.pid },
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            // unliked
            likeIconRef.current = <WorkspacePremiumIcon />;
            console.log("unliked");
          } else if (response.status === 201) {
            // liked
            likeIconRef.current = (
              <WorkspacePremiumIcon sx={{ color: "#4169E1" }} />
            );
            console.log("liked");
          }
        });
      await axios
        .get(process.env.REACT_APP_SOCIALS + "/post/" + post.pid)
        .then((response) => {
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
              {response.data.likes}
            </Typography>
          );
          console.log("inside like count changer");
        });
    } catch (e) {
      console.error(`Error" ${e}`);
    }
  }, [post, likeIconRef, likeCountRef]);

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
            background: "#FFFFFF",
          }}
        >
          {children}
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
          {likeIconRef.current}
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
