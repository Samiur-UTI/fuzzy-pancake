import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css';
import HomePage from './components/Home/HomePage';
import PrivacyPolicy from './components/Privacy/PrivacyPage';
import TermsAndConditions from './components/Terms/TermsPage';
import AuthForm from './components/Auth/Auth';


function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {/* My Scheduler - Removed to add Logo */}
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/privacy-policy">Privacy Policy</Button>
            <Button color="inherit" component={Link} to="/terms-and-conditions">Terms and Conditions</Button>
            <Button color="inherit" component={Link} to="/sign-up">Register</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>

          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/sign-up" element={<AuthForm isLogin={false}/>}/>
          <Route path="/login" element={<AuthForm isLogin={true}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
