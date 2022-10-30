import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./views/Login";
import Register from "./views/Register";
import Error404 from "./views/Error404";
import Profile from "./views/Profile";
import Settings from "./views/Settings";
import Home from "./views/Home";
import Easel from "./views/Easel";
import NavBar from "./components/NavBar";
import themeOptions from "./components/Theme";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
    return (
          <ThemeProvider theme={themeOptions}>
              <CssBaseline />
              <Router>
                  <NavBar/>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/easel" element={<Easel />}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/register" element={<Register/>}/>
                      <Route path="*" element={<Error404/>}/>
                      <Route path="/profile" element={<Profile/>}/>
                      <Route path="/settings" element={<Settings/>}/>
                  </Routes>
              </Router>
          </ThemeProvider>
    );
}

export default App;
