# Mindpages 🧠✨

Mindpages is a full-stack web application for **sharing and discovering ideas**.

## 📂 Project Structure
- backend/   → Express.js + MongoDB + Upstash Redis
- frontend/  → React + Vite + TailwindCSS
- package.json → root scripts to manage both frontend & backend

## 🔧 Requirements
- Node.js (>=18)
- MongoDB connection string
- Upstash Redis credentials

## 🚀 Setup

1. Clone the repo
   ```bash
   git clone https://github.com/justromeon/mindpages.git
   cd mindpages

2. Install dependencies
   ```bash
   npm run build

3. Configure environment variables
   - Create a `.env` file inside `backend/` using `.env.example` as reference.

4. Run the project
   ```bash
   # Start backend
   npm start

   # Start frontend (in another terminal)
   cd frontend && npm run dev