# OralVis Healthcare Frontend

This is the **frontend** for the OralVis Healthcare Full-Stack project.  
It is built using **React** (with **Vite**) and provides interfaces for:

- **Login** for Technicians and Dentists
- **Technician Dashboard** to upload patient scans
- **Dentist Dashboard** to view scans and download PDF reports

---

## **Tech Stack**

- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- jsPDF (for PDF generation)
- jwt-decode (for token decoding)


---

## **Environment Variables (.env)**

Create a `.env` file in the root directory:

VITE_API_URL=http://localhost:5000/api


# Clone frontend
git clone <your-repo-url>
cd oralvis-healthcare/frontend

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

