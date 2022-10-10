import Login from './Pages/login';
// import SignUp from './Pages/signUp';
import Home from './Pages/home';
// import Navbar from './Templates/Navbar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const theme = createTheme({
  palette: {
    default: {
      main: "#F06277",
    },
    primary: {
      main: "#FFB1BD",
    },
    secondary: {
      main: "#2A569F",
    },
    inherit: {
      main: "#969696",
    },
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element = { <Home/> } />
            <Route path="/login" element = { < Login /> } />
            <Route path="/home" element = { < Home /> } />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
