import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TechnicianDashboard from './pages/TechnicianDashboard';
import DentistDashboard from './pages/DentistDashboard';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected routes */}
        <Route
          path="/technician"
          element={
            <ProtectedRoute allowedRoles={['Technician']}>
              <TechnicianDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dentist"
          element={
            <ProtectedRoute allowedRoles={['Dentist']}>
              <DentistDashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
