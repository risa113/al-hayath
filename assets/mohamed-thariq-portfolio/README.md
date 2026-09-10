# Mohamed Thariq H Portfolio Website

Full-stack portfolio website with:
- React + Tailwind frontend
- Node.js + Express backend
- MongoDB database
- Admin panel
- Contact enquiry storage
- Portfolio assistant chatbot
- Resume download
- Profile photo included

## Folder Structure

```txt
mohamed-thariq-portfolio/
├── frontend/
└── backend/
```

## 1. Backend Setup

```bash
cd backend
npm install
```

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Update `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=change_this_secret
ADMIN_EMAIL=admin@portfolio.com
ADMIN_PASSWORD=admin123
FRONTEND_URL=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

## 2. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

Run frontend:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

## Admin Login

Default values from backend `.env`:

```txt
Email: admin@portfolio.com
Password: admin123
```

Change them before deployment. Obviously. Leaving default passwords online is basically inviting strangers to rearrange your furniture.

## Deploy

Frontend:
- Vercel or Netlify

Backend:
- Render or Railway

Database:
- MongoDB Atlas

Set deployed frontend API URL in `frontend/.env`:

```env
VITE_API_URL=https://your-backend.onrender.com/api
```

Set deployed frontend URL in backend environment:

```env
FRONTEND_URL=https://your-frontend.vercel.app
```
