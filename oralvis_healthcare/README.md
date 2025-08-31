# OralVis Healthcare Full-Stack Project

This is a **full-stack web application** for a fictional healthcare provider, **OralVis Healthcare**.  
The app supports two user roles:

- **Technician**: Uploads patient dental scans
- **Dentist**: Views scans and downloads PDF reports

The project demonstrates **React + Node.js/Express + SQLite + Cloudinary** integration, with JWT-based authentication.

---

## **Tech Stack**

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- jsPDF
- jwt-decode

### Backend
- Node.js
- Express.js
- SQLite
- Cloudinary (for image storage)
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)
- multer (file uploads)
- cors


---

## **Environment Variables**

### Backend (`backend/.env`)

PORT=5000
JWT_SECRET=your_jwt_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret


### Backend

cd backend
npm install
node index.js
# or nodemon index.js for auto-reload

### Frontend

cd frontend
npm install
npm run dev

### License

---

This **root README** is ready to go and includes **project overview, tech stack, setup instructions, and login credentials**.  

I can also provide a **combined `bash` script** to **run both backend and frontend together** if you want to make starting the project easier.  

Do you want me to do that?

