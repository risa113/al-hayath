# Portfolio Website Setup Steps - Tamil

## உனக்கு என்ன வேண்டும்?

1. VS Code
2. Node.js
3. GitHub account
4. MongoDB Atlas account
5. Vercel / Netlify account
6. Render account

## Local Run

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

`.env` file-ல் MongoDB URI போடு.

### Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

## Admin Panel

Browser:

```txt
http://localhost:5173/admin
```

Default login:

```txt
admin@portfolio.com
admin123
```

Deploy பண்ணும் முன் password change பண்ணு. இல்லன்னா இது portfolio இல்ல, public playground.

## What is included?

- Home page
- About section
- Skills
- Education
- Projects
- Internship
- Certifications
- Contact form
- Resume download
- Chatbot
- Admin dashboard
- Backend API
- MongoDB models

## Next improvements

- Gemini API chatbot
- Project add/edit/delete UI in admin
- Email notification using Nodemailer
- Dark/light theme
- Custom domain
