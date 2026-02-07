# Naksh Jewels – Mini E-Commerce Module

This project is a mini e-commerce application built as part of the **Naksh Jewels ReactJS & Node.js Internship Assessment**.  
It demonstrates clean frontend architecture, backend API design, state management, and Docker-based deployment.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Context API + useReducer
- React Router
- Pure CSS (No UI libraries)

### Backend
- Node.js
- Express.js
- In-memory data (can be extended to MongoDB)
- Environment variables using `.env`

### DevOps
- Docker
- Docker Compose

---

## ✨ Features

### Frontend
- Product listing page
- Product card with image, name, and price
- Add to Cart functionality
- Cart page with remove item option
- Global state management using Context API
- Responsive design (mobile-friendly)
- Functional components only

### Backend
- `GET /api/products` – Fetch product list
- `POST /api/cart` – Add product to cart
- Request validation middleware
- Centralized error handling
- Environment-based configuration

### Docker
- Separate Dockerfiles for frontend and backend
- Single command startup using `docker-compose`

---

## 📁 Project Structure

