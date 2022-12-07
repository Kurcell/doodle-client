import {
  Avatar,
  Typography,
  CardHeader,
  CardMedia,
  Card,
  Grid,
} from "@mui/material";
import calculateTime from "../common/common";

const Post = (props) => {
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card variant="outlined" width="100%">
        <CardHeader
          avatar={
            <Avatar
              src={
                "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              }
            />
          }
          title={
            <Typography>
              {props.post.screenname}
              <span style={{ fontColor: "red" }}>
                @{props.post.username}
              </span> · {calculateTime(props.post.createdat)}
            </Typography>
          }
        />
        <CardMedia>
          <img
            width="100%"
            src={
              "https://static.vecteezy.com/system/resources/previews/005/338/359/non_2x/archimedean-spiral-curve-shape-doodle-icon-for-apps-and-websites-i-vector.jpg"
            }
            alt=""
          />
        </CardMedia>
      </Card>
    </Grid>
  );
};

export default Post;
