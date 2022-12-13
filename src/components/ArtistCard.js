import { Box, Typography } from "@mui/material";

const ArtistCard = ({ profile, screenname, username }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "550px",
        height: "800px",
        background: "#B4946C",
        borderRadius: "10px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "36px",
          lineHeight: "44px",
          textAlign: "center",
          position: "absolute",
          width: "480px",
          height: "44px",
          left: "6.4%",
          top: "2.1%",
        }}
      >
        About the artist...
      </Typography>
      <Box
        sx={{
          position: "absolute",
          width: "500px",
          height: "500px",
          left: "4.5%",
          top: "12.3%",
          background: "#FFFFFF",
          borderRadius: "10px",
        }}
      >
        <img src={profile} style={{borderRadius: 10}} width={'100%'} height={'100%'} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "550px",
          height: "202px",
          left: "0%",
          bottom: "0%",
          background: "#B4946C",
          borderRadius: "10px",
        }}
      >
        <Typography
          component="div"
          sx={{
            fontSize: "28px",
            lineHeight: "29px",
            position: "absolute",
            width: "500px",
            height: "160px",
            left: "4.5%",
            bottom: "12.4%",
          }}
        >
          <Box fontWeight="bold" display="inline">
            {screenname}
          </Box>{" "}
          is a Dudol artist that is also known as{" "}
          <Box fontWeight="bold" display="inline">
            @{username}
          </Box>{" "}
          in inner circles. Their most liked work of art is displayed to the right.
        </Typography>
      </Box>
    </Box>
  );
};

export default ArtistCard;
