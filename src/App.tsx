import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import HomePage from './Home';
import ContentPage from './Content';
import LoginForm from './Login'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </Router>
  );
}

export default App;