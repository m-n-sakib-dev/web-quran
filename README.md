# 📖 Web Quran App

A modern, full-stack Quranic application built with **Next.js 15**, **Express.js**, and **MySQL**. This project was developed as a technical assessment, focusing on performance (SSG), state management (Zustand), and professional UI/UX standards.

## 🚀 Live Demo
**Frontend & API:** [https://vercel.app](https://vercel.app)

---

## ✨ Features

- **Full-Stack Integration:** Next.js frontend communicating with a managed Express.js backend.
- **SSG (Static Site Generation):** Surah lists and details are pre-rendered for lightning-fast load speeds and SEO.
- **Advanced State Management:** Uses **Zustand** with persistence to manage user settings across sessions.
- **Dynamic Settings Panel:**
  - **Arabic Font Selection:** Switch between multiple scripts (Amiri, Noto Naskh).
  - **Font Size Control:** Real-time font size adjustment for both Arabic and Translation text.
  - **Persistence:** All settings are saved to `localStorage` automatically.
- **Dark Mode Support:** Fully responsive Dark/Light mode toggle with system preference syncing.
- **Responsive Design:** Mobile-first UI built with **Tailwind CSS v4** and **DaisyUI**.

---

## 🛠️ Tech Stack

**Frontend:**
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4, DaisyUI
- **State Management:** Zustand
- **Theme:** next-themes

**Backend:**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MySQL (Hosted on Aiven)
- **ORM/Driver:** mysql2 (Connection Pooling)

**Deployment:**
- **Platform:** Vercel (Monorepo setup for Frontend + Serverless Functions)

---

## 📁 Project Structure

```text
web-quran/
├── api/                  # Express.js Backend
│   ├── config/           # Database Connection
│   ├── controllers/      # Business Logic
│   ├── routes/           # API Endpoints
│   └── index.js          # Entry Point (Vercel Function)
├── client/               # Next.js Frontend
│   ├── src/app/          # App Router (Pages & Layouts)
│   ├── src/components/   # Reusable UI Components
│   ├── src/store/        # Zustand Store
│   └── src/utils/        # API Base Configuration
├── vercel.json           # Deployment Configuration
└── README.md
