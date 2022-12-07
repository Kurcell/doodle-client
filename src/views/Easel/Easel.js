import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Canvas from "../../components/Canvas";
import Palette from "../../components/Palette";

const Easel = () => {
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("#000000");
  const [instructions, setInstructions] = useState("");

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box sx={{ pl: "25%", pt: "5%" }}>
          <Canvas
            lineWidth={lineWidth}
            lineColor={lineColor}
            instructions={instructions}
            setInstructions={setInstructions}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ pt: "20%", pl: "10%" }}>
          <Palette setLineWidth={setLineWidth} setLineColor={setLineColor} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Easel;
