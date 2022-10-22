import React from 'react'
import NavBar from '../../components/NavBar';
import themeOptions from '../../components/Theme';
import { ThemeProvider } from '@mui/material/styles';


const Home = () => {
    return (
        <ThemeProvider theme={themeOptions}>
            <div>
                <NavBar />
            </div>
        </ThemeProvider>
    )
}

export default Home;