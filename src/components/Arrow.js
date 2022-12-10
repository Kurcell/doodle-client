import { Box, Button } from "@mui/material";

const Arrow = ({ direction, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Box
        sx={{
          position: "relative",
          width: "156px",
          height: "100px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "4%",
            top: "39%",
            width: "150px",
            height: "22px",
            background: "#773F1A",
            borderRadius: "11px",
          }}
        />
        {direction === "l" ? (
          <Box>
            <Box
              sx={{
                position: "absolute",
                left: "0%",
                top: "21%",
                width: "70px",
                height: "22px",
                background: "#773F1A",
                borderRadius: "11px",
                transform: "rotate(-45deg)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: "0%",
                top: "57%",
                width: "70px",
                height: "22px",
                background: "#773F1A",
                borderRadius: "11px",
                transform: "rotate(45deg)",
              }}
            />
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                position: "absolute",
                left: "59.5%",
                top: "21%",
                width: "70px",
                height: "22px",
                background: "#773F1A",
                borderRadius: "11px",
                transform: "rotate(45deg)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: "59.5%",
                top: "57%",
                width: "70px",
                height: "22px",
                background: "#773F1A",
                borderRadius: "11px",
                transform: "rotate(-45deg)",
              }}
            />
          </Box>
        )}
      </Box>
    </Button>
  );
};

export default Arrow;
