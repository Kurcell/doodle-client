import { Box, IconButton, Slider, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BrushIcon from "@mui/icons-material/Brush";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import Grow from "@mui/material/Grow";
import { ChromePicker } from "react-color";
import { useState } from "react";

const Dollop = ({
  color,
  openColorPicker,
  setOpenColorPicker,
  setLineWidth,
  setLineColor,
}) => {
  const [dollopColor, setDollopColor] = useState(color);
  const [dollopSize, setDollopSize] = useState(5);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!openColorPicker || open) {
      setOpen((prev) => !prev);
      setOpenColorPicker((prev) => !prev);
      if (!openColorPicker) {
        setLineColor(dollopColor);
        setLineWidth(dollopSize);
      }
    }
  };

  const extractHex = (colorObject) => {
    if (open) {
      setDollopColor(colorObject.hex);
      setLineColor(colorObject.hex);
    }
  };

  const handleSizeSlider = (event, newSize) => {
    if (open) {
      setDollopSize(newSize);
      setLineWidth(newSize);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: dollopColor,
        position: "relative",
        width: "100px",
        height: "100px",
        borderRadius: "50%",

        boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.25)",
      }}
    >
      {dollopColor === "#94B49F" ? (
        <IconButton
          color="secondary.dark"
          sx={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: "50px",
            height: "50px",
          }}
          onClick={handleClick}
        >
          {open ? <CloseIcon /> : <BrushIcon />}
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          sx={{
            position: "absolute",
            top: "25%",
            left: "25%",
            width: "50px",
            height: "50px",
          }}
          onClick={handleClick}
        >
          {open ? <CloseIcon /> : <BrushIcon />}
        </IconButton>
      )}
      <Grow in={open} style={{ transformOrigin: "0 0 0" }}>
        <Box
          sx={{
            position: "absolute",
            top: "60%",
            left: "50%",
            width: "300px",
            height: "300px",

            background: "#773F1A",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "5%",
              left: "12.5%",
              width: "230px",
              height: "250px",
            }}
          >
            <ChromePicker
              color={dollopColor}
              disableAlpha
              onChange={extractHex}
            />
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <LineWeightIcon color="#D3C9B7" />
              </Grid>
              <Grid item xs>
                <Slider
                  color={"secondary"}
                  aria-label="Brush Size"
                  valueLabelDisplay="auto"
                  value={typeof dollopSize === "number" ? dollopSize : 5}
                  onChange={handleSizeSlider}
                  min={1}
                  max={50}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grow>
    </Box>
  );
};

export default Dollop;
