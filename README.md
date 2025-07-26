
```markdown
# Innovate Portal API

A secure RESTful API built with Node.js, Express, and MongoDB that provides **user authentication** and **bookmark management**. This project is part of the [Software Engineering SBA Module 14 Capstone] and demonstrates secure backend service design.

---

## 📌 Features

- ✅ User registration with hashed passwords
- ✅ User login with JWT authentication
- ✅ Protected routes with middleware
- ✅ CRUD operations for bookmarks
- ✅ MongoDB integration using Mongoose
- ✅ Environment variable configuration
- ✅ Modular MVC structure

---

## 🛠️ Tech Stack

| Layer       | Tools                             |
|-------------|------------------------------------|
| Language    | JavaScript (Node.js)              |
| Framework   | Express                           |
| Database    | MongoDB + Mongoose ORM            |
| Security    | bcryptjs, JWT, dotenv             |
| Testing     | Postman (manual API testing)      |
| Dev Tools   | Nodemon, VS Code, Git             |

---

## 📁 Folder Structure

```

innovate-portal-api/
│
├── src/
│   ├── config/             # MongoDB connection setup
│   ├── controllers/        # User & Bookmark controller logic
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   ├── utils/              # Auth middleware
│   └── index.js            # Entry point
│
├── .env.example            # Sample environment config
├── .gitignore
├── package.json
└── README.md               # You are here

````

---

## 📦 Installation & Setup

```bash
# Clone the repo and cd into it
git clone https://github.com/YOUR-USERNAME/innovate-portal-api.git
cd innovate-portal-api

# Install dependencies
npm install

# Create your .env file
cp .env.example .env
````

**`.env` File**

```env
MONGO_URI=mongodb://localhost:27017/securewebportal
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## 🚀 Run the App

```bash
npm run dev
```

> Nodemon will watch for file changes and restart the server automatically.

---

## 📬 API Endpoints

### 🔐 User Authentication

| Method | Endpoint              | Description           |
| ------ | --------------------- | --------------------- |
| POST   | `/api/users/register` | Register a new user   |
| POST   | `/api/users/login`    | Login and receive JWT |

### 🔖 Bookmarks (Requires Auth)

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| POST   | `/api/bookmarks`     | Create a bookmark      |
| GET    | `/api/bookmarks`     | Get all user bookmarks |
| GET    | `/api/bookmarks/:id` | Get a single bookmark  |
| PUT    | `/api/bookmarks/:id` | Update a bookmark      |
| DELETE | `/api/bookmarks/:id` | Delete a bookmark      |

Use `Authorization: Bearer <token>` header in protected routes.

---

## ✅ Test Instructions

Use Postman:

1. **Register a user**
2. **Login** to get token
3. **Add `Bearer <token>`** in header
4. **POST / GET / PUT / DELETE** bookmarks

---

## 🧠 Developer Notes

* Follows **MVC structure**
* Uses **middleware** to protect routes
* No hardcoded secrets — `.env` used
* Respects **SBA guidelines** for structure and modularity

---

## © Author

Developed by `Bolivar Vega` for educational purposes as part of Module 14 Capstone project.

```
