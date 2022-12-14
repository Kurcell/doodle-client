import "./App.css";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Error404 from "./views/Error404";
import Profile from "./views/Profile";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Easel from "./views/Easel";
import IndividualPost from "./views/IndividualPost";
import NavBar from "./components/NavBar";
import { appTheme, landingTheme } from "./components/Theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AuthContext from "./context/AuthProvider";

function App() {
  const { session } = useContext(AuthContext);
  return (
    <ThemeProvider theme={!session.authenticated ? landingTheme : appTheme}>
      <CssBaseline />
      <Router>
        {session.authenticated && <NavBar />}
        <Routes>
          <Route
            path="/"
            element={
              session.authenticated ? <Navigate to="/home" /> : <Landing />
            }
          />
          <Route
            path="/home"
            element={!session.authenticated ? <Navigate to="/" /> : <Home />}
          />
          <Route
            path="/easel"
            element={!session.authenticated ? <Navigate to="/" /> : <Easel />}
          />
          <Route
            path="/profile"
            element={!session.authenticated ? <Navigate to="/" /> : <Profile />}
          />
          <Route
            path="/post/:pid"
            element={
              !session.authenticated ? <Navigate to="/" /> : <IndividualPost />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
