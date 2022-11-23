import React from "react";
import LogInBox from "../../components/LogInBox";
import { Typography, Grid, Box } from "@mui/material";
import DudolTransparentBlack from "../../assets/DudolTransparentBlack.png"

const Landing = () => {
    return (<Grid sx={{pt: 25}} container spacing={0}>
                <Grid item xs={8}>
                    <Box xs={{pt:10}}>
                        <img style={{width:700, height:240}} src={DudolTransparentBlack} alt={"Dudol Logo"}/>
                        <Typography sx={{position:"absolute", left:"15%"}} variant="h4">The People's Gallery</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}><LogInBox /></Grid>
            </Grid>);
}

export default Landing;