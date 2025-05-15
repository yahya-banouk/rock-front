import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import type { RootState } from './redux/store';

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={
          isAuthenticated ? <Home /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;