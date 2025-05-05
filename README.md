# 📝 Laravel + Vue 3 + TailwindCSS CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application built using **Laravel** for the backend and **Vue 3** for the frontend, styled with **Tailwind CSS**, and enhanced with **toast notifications**.

## 🚀 Features

- ✅ Create, Read, Update, Delete posts
- 💅 Beautiful, responsive UI with Tailwind CSS
- 🔁 Axios-powered communication between frontend and backend
- 🔔 Real-time toast notifications using Vue Toastification
- ⚙️ Modular and maintainable folder structure
- 🔐 Prepared for API-based authentication integration

---

## 🛠 Tech Stack

| Technology      | Role             |
|----------------|------------------|
| Laravel         | RESTful API (Backend) |
| Vue 3           | Frontend SPA     |
| Tailwind CSS    | UI Styling       |
| Axios           | HTTP Requests    |
| Vue Toastification | Notifications |

---

## 📁 Project Structure

laravelvueapp/
├── app/ # Laravel application (controllers, models, etc.)
├── client/ # Vue 3 frontend
│ ├── src/
│ │ ├── components/ # Vue components
│ │ └── App.vue
│ ├── tailwind.config.js
│ └── postcss.config.cjs
├── routes/
│ └── api.php # API routes
├── database/
│ └── migrations/
├── public/
└── .env # Environment variables

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### ✅ Backend (Laravel)

1. **Install dependencies**

```bash
composer install
Set up environment file

bash
Copy
Edit
cp .env.example .env
Update .env to match your MySQL configuration:

env
Copy
Edit
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravelvueapp
DB_USERNAME=root
DB_PASSWORD=
Generate app key & migrate database

bash
Copy
Edit
php artisan key:generate
php artisan migrate
Run Laravel development server

bash
Copy
Edit
php artisan serve
✅ Frontend (Vue 3 + Tailwind)
Navigate to the frontend directory

bash
Copy
Edit
cd client
Install Node.js dependencies

bash
Copy
Edit
npm install
Run the Vite development server

bash
Copy
Edit
npm run dev
🔄 API Endpoints
Method	Endpoint	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create a new post
PUT	/api/posts/:id	Update a post
DELETE	/api/posts/:id	Delete a post