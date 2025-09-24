## 📘 Frontend – Quiz App

This is the frontend for the Quiz App, built with **Next.js**, **ShadCN UI**, and **Clerk** for authentication. It handles the user interface, routing, and session management.

---

### 🛠 Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **ShadCN UI**
- **Clerk** (Authentication)
- **TypeScript**
- **pnpm**

---

### 🚀 Getting Started

#### 1. Install Dependencies

```bash
pnpm install
```

#### 2. Environment Variables

Create a `.env.local` file in this folder:

```env
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

✅ `.env.local` is already listed in `.gitignore`.

---

#### 3. Run the App

```bash
pnpm dev
```

---

### 🔐 Authentication (Clerk)

- Sign-up / Sign-in
- Session management
- Route protection via `middleware.ts`
- Environment variables stored in `.env.local`

---

### 📁 Folder Structure

```
frontend/
├── app/                # App Router pages
├── components/         # Reusable UI components
├── middleware.ts       # Clerk route protection
├── public/             # Static assets
├── styles/             # Global styles
├── .env.local          # Environment variables (gitignored)
└── README.md           # Frontend documentation
```