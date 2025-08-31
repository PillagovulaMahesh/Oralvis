import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ScanCard from '../components/ScanCard';
import api from '../api/api';

const DentistDashboard = () => {
  const [scans, setScans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchScans = async () => {
      try {
        const res = await api.get('/scans');
        setScans(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch scans');
      } finally {
        setLoading(false);
      }
    };

    fetchScans();
  }, []);

  return (
    <div>
      <Header role="Dentist" />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4">Dentist Dashboard</h2>
        {loading && <p>Loading scans...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex flex-wrap">
          {scans.map((scan) => (
            <ScanCard key={scan.id} scan={scan} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DentistDashboard;
