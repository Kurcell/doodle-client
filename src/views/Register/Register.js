import React from 'react'
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import axios from 'axios';

const Register = () => {
    const register = async (event) => {
        event.preventDefault();

        let body = JSON.stringify({
            username: event.target.username.value,
            screenname: event.target.screenname.value,
            email: event.target.email.value,
            password: event.target.password.value,
            remember: false
        })

        try {
            await axios.post(process.env.REACT_APP_API + '/register',
                body,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            window.location.reload(false);
        } catch (e) {
            console.log(e)
        }
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
                <Typography variant="h5">Register</Typography>
                <Box component="form" noValidate onSubmit={register} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="screenname"
                                required
                                fullWidth
                                id="screenname"
                                label="Screen Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Register;