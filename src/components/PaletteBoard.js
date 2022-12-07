import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
    width: "516px",
    height: "500px",
  },
  wood: {
    position: "absolute",
    top: "0%",
    left: "0%",
    width: "400px",
    height: "500px",
    borderRadius: "50%",

    background: "#B4946C",
    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.25)",
  },
  firstDollop: {
    position: "absolute",
    top: "5.6%",
    left: "27.1%",
    width: "100px",
    height: "100px",
  },
  secondDollop: {
    position: "absolute",
    top: "25%",
    left: "7.75%",
    width: "100px",
    height: "100px",
  },
  thirdDollop: {
    position: "absolute",
    top: "52.4%",
    left: "7.75%",
    width: "100px",
    height: "100px",
  },
  fourthDollop: {
    position: "absolute",
    top: "72.4%",
    left: "27.1%",
    width: "100px",
    height: "100px",
  },
  negative_space: {
    position: "absolute",
    top: "25%",
    left: "61%",
    width: "200px",
    height: "250px",
    borderRadius: "50%",

    background: "#D3C9B7",
  },
});

const PaletteBoard = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.wood}></Box>
      <Box className={classes.negative_space} />
      <Box className={classes.fourthDollop}>{children[3]}</Box>
      <Box className={classes.thirdDollop}>{children[2]}</Box>
      <Box className={classes.secondDollop}>{children[1]}</Box>
      <Box className={classes.firstDollop}>{children[0]}</Box>
    </Box>
  );
};

export default PaletteBoard;
