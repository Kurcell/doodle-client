import { Box } from "@mui/material";

const Stand = ({ children }) => {
  return (
    <Box sx={{ position: "relative", width: "500px", height: "766.36px" }}>
      <Box
        sx={{
          position: "absolute",
          left: "24.6%",
          top: "0%",
          height: "780px",
          width: "50px",

          background: "#B4946C",
          transform: "rotate(15deg)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "65.4%",
          top: "0%",
          height: "780px",
          width: "50px",

          background: "#B4946C",
          transform: "rotate(-15deg)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "45%",
          top: "0%",
          height: "700px",
          width: "50px",

          background: "#B4946C",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: "0%",
          top: "10%",
          height: "500px",
          width: "500px",

          background: "#FFFFFF",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Stand;
