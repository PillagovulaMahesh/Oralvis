import React from 'react';
import PDFButton from './PDFButton';

const ScanCard = ({ scan }) => {
  return (
    <div className="border rounded shadow p-4 m-2 w-72">
      <img
        src={scan.imageUrl}
        alt="scan"
        className="w-full h-40 object-cover rounded mb-2"
      />
      <p><strong>Patient Name:</strong> {scan.patientName}</p>
      <p><strong>Patient ID:</strong> {scan.patientId}</p>
      <p><strong>Scan Type:</strong> {scan.scanType}</p>
      <p><strong>Region:</strong> {scan.region}</p>
      <p><strong>Upload Date:</strong> {new Date(scan.uploadDate).toLocaleString()}</p>
      <div className="mt-2 flex justify-between">
        <a
          href={scan.imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded"
        >
          View Full Image
        </a>
        <PDFButton scan={scan} />
      </div>
    </div>
  );
};

export default ScanCard;
