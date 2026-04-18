---
trigger: always_on
---

# 🚀 K2 Treks & Adventures – AI Workspace Rules

## 🧠 Project Overview

This project is a **full-stack web application** for **K2 Adventures**, an adventure tourism and outdoor training organization based in Central Maharashtra, India.

The platform will showcase all the information regarding company, treks organised by company, company brochures and policies etc and allow users to submit enquiries/bookings via forms.

---

## 🏗️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas (Cloud)
* Mongoose ODM

---

## 📁 Project Structure

```
k2-treks-app/
├── frontend/
├── backend/
├── AGENT_RULES.md
```

### Backend Structure

```
backend/src/
├── app.js
├── routes/
├── controllers/
├── models/
├── config/
```

### Frontend Structure

```
frontend/src/
├── components/
├── pages/
├── assets/
├── services/
├── hooks/
```

---

## 🎯 Core Features

1. Trek Listings (Sahyadri & Himalayan)
2. Trek Details Page
3. **Customer Enquiry / Booking Form**
4. Contact System
5. Corporate & Institutional Programs
6. Specialized Programs

---

## 📚 Domain Context

K2 Treks & Adventures:

* Founded by an Indian Air Force Veteran
* Focus on safety, discipline, and structured training
* Operates PAN-India

---

## 📌 Data Guidelines

### Trek Data:

* Name
* Location
* Difficulty
* Duration
* Price
* Description
* Images
* Category

---

### Customer Enquiry / Booking Data:

(No authentication required)

* Name
* Email
* Phone Number
* Selected Trek
* Message / Notes
* Preferred Date (optional)

---

## 🧩 Coding Rules

### General

* Write clean, modular code
* Avoid over-engineering
* Use meaningful naming
* Fronend should be scalable according to screen size

---

### Frontend Rules

* Use functional components
* Use Tailwind CSS
* Keep components reusable
* Use services folder for API calls
* Build clean form UI for customer submissions
* Fronend should not break if screen size changes
---

### Backend Rules

* Follow MVC pattern
* Keep routes thin
* Logic inside controllers
* Use async/await
* Handle errors properly

---

### API Design Rules

Use RESTful endpoints:

* GET /api/treks
* GET /api/treks/:id
* POST /api/enquiry

---

## 🔐 Authentication Rules

* ❌ No login/signup system required
* ❌ No user authentication

---

## 🗄️ Database Rules

* Use MongoDB Atlas (cloud)
* Do NOT store production data locally
* Local DB only for development
* Use Mongoose schemas

---

## 📦 Assets & References

All reference materials are stored in:

```
./frontend/root/src/assets/
```

---

## 🎨 UI/UX Guidelines

* Theme: Adventure / Nature
* Colors: Light + earthy tone + Aesthetic
* Style: Clean, bold, immersive
* Include feature to trigger between light and dark theme
* Use strong visuals for treks

---

## ⚠️ Important Constraints

* Do not generate unnecessary files
* Do not introduce unnecessary libraries
* Do not break structure

---

## ☁️ Deployment & Infrastructure Rules

### Database

* Use MongoDB Atlas (Cloud) for production
* Never rely on local database for deployed app

---

### Backend Hosting

* Use Render or Railway

---

### Frontend Hosting

* Use Vercel

---

### Media Storage

* Use Cloudinary for images
* Do not store images in database

---

### Environment Variables

* Store secrets in `.env`
* Never expose credentials

---

### AI Instruction

When generating code:

* Assume cloud deployment
* Prefer production-ready solutions
* Do not suggest authentication flows
* Focus on form-based data handling

---

## 🔄 Development Approach

* Build feature-by-feature
* Keep the development modular and use reusable components
* Ensure each part works before moving ahead

---

## 🧭 Final Instruction to AI

Always prioritize:

1. Simplicity
2. Scalability
3. Clean architecture
4. Real-world usability

This is a production-level project.

---