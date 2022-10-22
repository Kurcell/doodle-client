import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import NavBar from "../../components/NavBar";
import themeOptions from '../../components/Theme';
import { ThemeProvider } from '@mui/material/styles';

function Login() {
    const handleSubmit = () => {
        console.log("submitted");
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={themeOptions}>
                <NavBar />

                <Box
                    sx={{
                        marginTop: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h5">Log In</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            </ThemeProvider>
        </React.Fragment>
    );
}

export default Login;