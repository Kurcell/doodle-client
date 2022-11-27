import {
  Box,
  Button,
  Grid,
  TextField,
  Divider,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PersonIcon from "@mui/icons-material/Person";

const RegisterBox = ({ toggleLogIn }) => {
  const register = async (event) => {
    event.preventDefault();

    let body = JSON.stringify({
      username: event.target.username.value,
      screenname: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      remember: false,
    });

    try {
      await axios.post(process.env.REACT_APP_SOCIALS + "/register", body, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      window.location.reload(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      sx={{
        width: 384,
        height: 484,
        padding: 2,
        backgroundColor: "secondary.light",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <Box component="form" onSubmit={register} noValidate>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              variant="filled"
              autoFocus
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="family-name"
              variant="filled"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          variant="filled"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          variant="filled"
          sx={{ mb: 5 }}
        />
        <Button
          sx={{ height: 56 }}
          type="submit"
          fullWidth
          color="secondary"
          variant="contained"
        >
          Register
        </Button>
      </Box>
      <Divider sx={{ m: 5 }} />
      <Button
        sx={{ height: 56 }}
        fullWidth
        color="secondary"
        variant="contained"
        onClick={() => toggleLogIn(true)}
      >
        Log In
      </Button>
    </Box>
  );
};

export default RegisterBox;
