# Animated SaaS Landing Page 🚀

This project is a fully responsive animated SaaS landing page built using **React (Vite)** and **Node.js (Express + MongoDB)**.

## ✨ Features

### Frontend

* Pixel-accurate layout based on the provided design
* Fully responsive (Mobile, Tablet, Laptop, Desktop)
* Reusable component structure
* Shared signup logic between Hero CTA and Signup section
* Custom CSS animations (no CSS framework used)

### Animations

* Hero background shapes grow into position
* Hero illustration cards burst and float infinitely
* Benefits section staggered reveal on scroll
* Why section SVG line draw animation
* Why cards burst + floating animation
* Signup section fade reveal
* Triangle fan-in animation from the right

### Backend

* Express REST API
* MongoDB database for storing subscribers
* Email validation on server
* Duplicate email protection
* Coupon generation
* Automatic coupon email sent to the user via Nodemailer

---

## 🛠 Tech Stack

**Frontend**

* React (Vite)
* Custom CSS
* Intersection Observer API (scroll animations)

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose
* Nodemailer
* Validator

---

## 📁 Project Structure

```
LandingPage/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── assets/
│   │   └── styles/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── config/
│   └── server.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone repository

```
git clone <your-repo-link>
cd LandingPage
```

---

### 2️⃣ Backend Setup

Go to backend:

```
cd backend
npm install
```

Create `.env` file inside **backend** folder:

```
# Database
MONGO_URI=your_mongodb_uri_here

# Server
PORT=3000

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password_here
```

> Note: You must use a **Google App Password**, not your Gmail password.

Run backend:

```
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```
cd frontend
npm install
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 📧 How Signup Works

1. User enters email in Hero or Signup section
2. Frontend validates email
3. Request sent to `/api/signup`
4. Backend validates again
5. Email stored in MongoDB
6. Unique coupon generated
7. Coupon sent to user via email

---

## 🔒 Validations Implemented

**Frontend**

* Required email field
* Email format validation
* Loading and error states

**Backend**

* Email format validation
* Duplicate email check
* Server error handling

---


## 🎯 Key Implementation Details

* Shared signup API using a reusable React hook
* Intersection Observer used for scroll animations
* Custom keyframe animations instead of animation libraries
* SVG stroke animation for drawing effects
* Floating animation for illustration cards
* CORS handling for local frontend + backend communication



## Author

**Pranav Chavan**

---

## License

This project is for learning and assessment purposes.
