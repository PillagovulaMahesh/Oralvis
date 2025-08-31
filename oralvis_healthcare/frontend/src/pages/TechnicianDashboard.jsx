import React from 'react';
import Header from '../components/Header';
import TechnicianUploadForm from '../components/TechnicianUploadForm';

const TechnicianDashboard = () => {
  return (
    <div>
      <Header role="Technician" />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Technician Dashboard</h2>
        <TechnicianUploadForm />
      </main>
    </div>
  );
};

export default TechnicianDashboard;
