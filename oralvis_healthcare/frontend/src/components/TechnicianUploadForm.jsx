import React, { useState } from 'react';
import api from '../api/api';

const TechnicianUploadForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    scanType: 'RGB',
    region: 'Frontal',
    scanImage: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'scanImage') setFormData({ ...formData, scanImage: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await api.post('/scans/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Scan uploaded successfully!');
      setFormData({
        patientName: '',
        patientId: '',
        scanType: 'RGB',
        region: 'Frontal',
        scanImage: null,
      });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Upload failed');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Patient Scan</h2>
      {message && <p className="mb-2 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          placeholder="Patient ID"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <select
          name="scanType"
          value={formData.scanType}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        >
          <option value="RGB">RGB</option>
        </select>
        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        >
          <option value="Frontal">Frontal</option>
          <option value="Upper Arch">Upper Arch</option>
          <option value="Lower Arch">Lower Arch</option>
        </select>
        <input
          type="file"
          name="scanImage"
          accept="image/png, image/jpeg"
          onChange={handleChange}
          className="w-full mb-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default TechnicianUploadForm;
