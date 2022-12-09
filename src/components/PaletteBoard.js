import { Box } from "@mui/material";

const PaletteBoard = ({ children }) => {
  return (
    <Box sx={{ position: "relative", width: "516px", height: "500px" }}>
      <Box
        sx={{
          position: "absolute",
          top: "0%",
          left: "0%",
          width: "400px",
          height: "500px",
          borderRadius: "50%",

          background: "#B4946C",
          boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.25)",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "61%",
          width: "200px",
          height: "250px",
          borderRadius: "50%",

          background: "#D3C9B7",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "72.4%",
          left: "27.1%",
          width: "100px",
          height: "100px",
        }}
      >
        {children[3]}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "52.4%",
          left: "7.75%",
          width: "100px",
          height: "100px",
        }}
      >
        {children[2]}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          left: "7.75%",
          width: "100px",
          height: "100px",
        }}
      >
        {children[1]}
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "5.6%",
          left: "27.1%",
          width: "100px",
          height: "100px",
        }}
      >
        {children[0]}
      </Box>
    </Box>
  );
};

export default PaletteBoard;
