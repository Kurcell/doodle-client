import { Box, Button, TextField, Divider } from "@mui/material";
import axios from "axios";
import React from "react";

const LogInBox = ({ toggleLogIn }) => {
  const login = async (event) => {
    event.preventDefault();

    const body = JSON.stringify({
      email: event.target.email.value,
      password: event.target.password.value,
      remember: false,
    });

    try {
      await axios.post(process.env.REACT_APP_SOCIALS + "/login", body, {
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
        height: 424,
        padding: 2,
        backgroundColor: "secondary.light",
        boxShadow: 1,
        borderRadius: 2,
      }}
    >
      <Box component="form" onSubmit={login} noValidate>
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
          Log In
        </Button>
      </Box>
      <Divider sx={{ m: 5 }} />
      <Button
        sx={{ height: 56 }}
        fullWidth
        color="secondary"
        variant="contained"
        onClick={() => toggleLogIn(false)}
      >
        Register
      </Button>
    </Box>
  );
};

export default LogInBox;
