import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
    width: "500px",
    height: "766.36px",
  },
  left: {
    position: "absolute",
    left: "123px",
    top: "0px",
    height: "780px",
    width: "50px",

    background: "#B4946C",
    transform: "rotate(15deg)",
  },
  middle: {
    position: "absolute",
    left: "225px",
    top: "0px",
    height: "700px",
    width: "50px",

    background: "#B4946C",
  },
  right: {
    position: "absolute",
    left: "327px",
    top: "0px",
    height: "780px",
    width: "50px",

    background: "#B4946C",
    transform: "rotate(-15deg)",
  },
  canvas: {
    position: "absolute",
    left: "0px",
    top: "70px",
    height: "500px",
    width: "500px",

    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});

const Stand = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.left} />
      <Box className={classes.right} />
      <Box className={classes.middle} />
      <Box className={classes.canvas}> {children} </Box>
    </Box>
  );
};

export default Stand;
