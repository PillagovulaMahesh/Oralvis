import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">OralVis Healthcare</h1>
      <div>
        <span className="mr-4">{role}</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
