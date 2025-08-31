# OralVis Healthcare Backend

This is the **backend server** for the OralVis Healthcare Full-Stack project.  
It provides APIs for **user authentication**, **scan uploads**, and **retrieving scan data**.

---

## **Tech Stack**

- Node.js
- Express.js
- SQLite3
- JWT for authentication
- bcryptjs for password hashing
- Multer for file uploads
- Cloudinary for storing scan images
- CORS for cross-origin requests

---


---

## **Environment Variables (.env)**

Create a `.env` file in the root directory:

PORT=5000
JWT_SECRET=your_jwt_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
