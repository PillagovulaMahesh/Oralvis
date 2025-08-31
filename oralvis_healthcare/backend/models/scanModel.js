const db = require('../config/db');

// Insert a new scan record
const createScan = (scanData, callback) => {
    const { patientName, patientId, scanType, region, imageUrl, uploadDate } = scanData;
    const query = `INSERT INTO scans (patientName, patientId, scanType, region, imageUrl, uploadDate) VALUES (?, ?, ?, ?, ?, ?)`;

    db.run(query, [patientName, patientId, scanType, region, imageUrl, uploadDate], function (err) {
        if (err) return callback(err);
        callback(null, { id: this.lastID, ...scanData });
    });
};

// Get all scans
const getAllScans = (callback) => {
    const query = `SELECT * FROM scans ORDER BY uploadDate DESC`;
    db.all(query, [], (err, rows) => {
        if (err) return callback(err);
        callback(null, rows);
    });
};

// Get scans by patientId (optional)
const getScansByPatientId = (patientId, callback) => {
    const query = `SELECT * FROM scans WHERE patientId = ? ORDER BY uploadDate DESC`;
    db.all(query, [patientId], (err, rows) => {
        if (err) return callback(err);
        callback(null, rows);
    });
};

module.exports = {
    createScan,
    getAllScans,
    getScansByPatientId
};
