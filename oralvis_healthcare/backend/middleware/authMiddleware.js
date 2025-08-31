const jwt = require('jsonwebtoken');
require('dotenv').config();

// Verify JWT Token & Role
const authMiddleware = (allowedRoles = []) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authorization token missing' });
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // { id, role }

            // Check if user's role is allowed
            if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Access denied: insufficient permissions' });
            }

            next();
        } catch (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
    };
};

module.exports = authMiddleware;
