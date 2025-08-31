import React from 'react';
import jsPDF from 'jspdf';

const PDFButton = ({ scan }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('OralVis Healthcare Scan Report', 10, 20);
    doc.setFontSize(12);
    doc.text(`Patient Name: ${scan.patientName}`, 10, 40);
    doc.text(`Patient ID: ${scan.patientId}`, 10, 50);
    doc.text(`Scan Type: ${scan.scanType}`, 10, 60);
    doc.text(`Region: ${scan.region}`, 10, 70);
    doc.text(`Upload Date: ${new Date(scan.uploadDate).toLocaleString()}`, 10, 80);

    // Add image
    const img = new Image();
    img.src = scan.imageUrl;
    img.onload = () => {
      doc.addImage(img, 'JPEG', 10, 90, 180, 120);
      doc.save(`Scan_${scan.patientId}.pdf`);
    };
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded"
    >
      Download PDF
    </button>
  );
};

export default PDFButton;
