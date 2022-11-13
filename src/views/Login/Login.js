import React from 'react';
import { useNavigate } from "react-router-dom"
import { Box, Button, TextField, Typography } from "@mui/material";

function Login(props) {

    const navigate = useNavigate()

    const login = (event) => {
        event.preventDefault();
        let body = JSON.stringify({
            email: event.target.email.value,
            password: event.target.password.value,
            remember: false
        })
        console.log(body);
        fetch('http://localhost:5000/login', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body,
            credentials: 'include'
        })
            .then((response) => 
                response.json())
            .then((data) => {
                console.log(data)
                navigate('/')
            });
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    marginTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5">Log In</Typography>
                <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
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
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log In
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default Login;