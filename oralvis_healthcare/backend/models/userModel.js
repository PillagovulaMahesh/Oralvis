const db = require('../config/db');
const bcrypt = require('bcryptjs');

// Create a new user (Technician or Dentist)
const createUser = (email, password, role, callback) => {
    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = `INSERT INTO users (email, password, role) VALUES (?, ?, ?)`;
    db.run(query, [email, hashedPassword, role], function (err) {
        if (err) {
            return callback(err);
        }
        callback(null, { id: this.lastID, email, role });
    });
};

// Find user by email
const findUserByEmail = (email, callback) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.get(query, [email], (err, row) => {
        if (err) return callback(err);
        callback(null, row);
    });
};

// Get all users (optional)
const getAllUsers = (callback) => {
    const query = `SELECT id, email, role FROM users`;
    db.all(query, [], (err, rows) => {
        if (err) return callback(err);
        callback(null, rows);
    });
};

module.exports = {
    createUser,
    findUserByEmail,
    getAllUsers
};
