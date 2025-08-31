const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const { uploadScan, getAllScans } = require('../controllers/scanController');

// POST /api/scans/upload (Technician only)
router.post(
    '/upload',
    authMiddleware(['Technician']),
    upload.single('scanImage'), // 'scanImage' is the field name from frontend form
    uploadScan
);

// GET /api/scans (Dentist only)
router.get(
    '/',
    authMiddleware(['Dentist']),
    getAllScans
);

module.exports = router;
