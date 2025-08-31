const db = require('../config/db');
const cloudinary = require('../config/cloudinary');

// Upload Scan (Technician)
exports.uploadScan = async (req, res) => {
    try {
        const { patientName, patientId, scanType, region } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ message: 'Scan image is required.' });
        }

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(file.path, {
            folder: 'oralvis_scans'
        });

        const imageUrl = result.secure_url;
        const uploadDate = new Date().toISOString();

        // Insert into SQLite
        const query = `INSERT INTO scans (patientName, patientId, scanType, region, imageUrl, uploadDate) VALUES (?, ?, ?, ?, ?, ?)`;
        db.run(
            query,
            [patientName, patientId, scanType, region, imageUrl, uploadDate],
            function (err) {
                if (err) {
                    console.error(err.message);
                    return res.status(500).json({ message: 'Failed to save scan data.' });
                }
                return res.status(201).json({ message: 'Scan uploaded successfully', scanId: this.lastID });
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error during upload.' });
    }
};

// Get All Scans (Dentist)
exports.getAllScans = (req, res) => {
    const query = `SELECT * FROM scans ORDER BY uploadDate DESC`;
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ message: 'Failed to retrieve scans.' });
        }
        res.json(rows);
    });
};
