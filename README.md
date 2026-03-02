# Personal Portfolio (React + Bootstrap 5)

## Setup

1. Install dependencies:
   npm install
2. Start development server:
   npm run dev
3. Build for production:
   npm run build

## EmailJS setup (Contact form)

1. Create `.env` from `.env.example`.
2. Add your EmailJS values:
   VITE_EMAILJS_SERVICE_ID
   VITE_EMAILJS_TEMPLATE_ID
   VITE_EMAILJS_PUBLIC_KEY
3. In EmailJS template, map these variables:
   from_name, from_email, subject, message
4. For Vercel, add the same `VITE_` variables in Project Settings -> Environment Variables.

## Required npm packages

- react
- react-dom
- react-router-dom
- bootstrap
- vite
- @vitejs/plugin-react
