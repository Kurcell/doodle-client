import './App.css';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./views/Login";
import Register from "./views/Register";
import Error404 from "./views/Error404";
import Profile from "./views/Profile";
import Settings from "./views/Settings";
import Home from "./views/Home";
import Landing from "./views/Landing"
import Easel from "./views/Easel";
import NavBar from "./components/NavBar";
import {appTheme} from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AuthContext from './context/AuthProvider';

function App() {
    const { session } = useContext(AuthContext);
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Router>
                {session.authenticated && <NavBar />}
                <Routes>
                    <Route path="/" element={session.authenticated ? <Navigate to="/home" /> : <Landing />} />
                    <Route path="/home" element={!session.authenticated ? <Navigate to="/" /> : <Home />} />
                    <Route path="/easel" element={!session.authenticated ? <Navigate to="/" /> : <Easel />} />
                    <Route path="/login" element={session.authenticated || session.loading ? <Navigate to="/" /> : <Login />} />
                    <Route path="/register" element={session.authenticated ||session.loading ? <Navigate to="/" /> : <Register />} />
                    <Route path="*" element={<Error404 />} />
                    <Route path="/profile" element={!session.authenticated ? <Navigate to="/" /> : <Profile />} />
                    <Route path="/settings" element={!session.authenticated ? <Navigate to="/" /> : <Settings />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
