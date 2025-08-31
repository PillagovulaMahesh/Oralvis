import React from 'react';
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

/**
 * ProtectedRoute component
 * @param {ReactNode} children - Component to render
 * @param {Array} allowedRoles - Array of allowed roles, e.g., ['Technician', 'Dentist']
 */
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // No token, redirect to login
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const userRole = decoded.role;

    if (!allowedRoles.includes(userRole)) {
      // Role not allowed, redirect to login or unauthorized page
      return <Navigate to="/login" replace />;
    }

    return children; // User is authorized
  } catch (err) {
    // Invalid token
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
