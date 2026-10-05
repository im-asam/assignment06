# 💪 FitLog

FitLog is a modern, dark-themed workout library and daily workout planning application built for people who want to train with intent and keep track of their workouts.

Browse workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and manage your daily training plan from one place.

---

## 🚀 Live Demo

[View Live Project](https://assignment06-bay.vercel.app/)

## 📦 GitHub Repository

[View Source Code](https://github.com/im-asam/assignment06)

---

## ✨ Features

- 🏋️ **Workout Library** — Browse all available workouts from the FitLog API.
- 🔎 **Workout Details** — View equipment, difficulty, sets, reps, duration, calories, rating, description, and instructions.
- 📋 **Today's Plan** — Add up to five workouts to your daily workout plan.
- ❤️ **Save for Later** — Save workouts and access them from the Saved tab.
- 🔔 **Toast Notifications** — Get feedback when adding, saving, removing, or completing workouts.
- 📊 **Plan Metrics** — Track total exercises, workout minutes, and calories.
- 🔃 **Sorting** — Sort workouts by duration, calories, or rating.
- ✅ **Mark as Done** — Mark planned workouts as completed.
- 🗑️ **Remove Workouts** — Remove workouts from Today's Plan or Saved.
- 💾 **Local Storage Persistence** — Plan and saved workouts remain available after page reload.
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- ❌ **Custom 404 Page** — Handles invalid and unknown routes gracefully.
- ⏳ **Loading State** — Shows loading feedback while workout data is being fetched.

---

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **JavaScript**
- **CSS**
- **Next.js App Router**
- **React Context API**
- **react-hot-toast**
- **REST API**
- **localStorage**

---

## 🔌 API

FitLog uses the FitLog Workout API to load workout data.

### All Workouts

`https://api.abcz.workers.dev/api/fitlog`

### Single Workout

`https://api.abcz.workers.dev/api/fitlog/:id`

The API provides workout information such as:

- Workout name
- Image
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories burned
- Sets
- Reps
- Rating
- Description
- Instructions

---

## 📄 Main Pages

### 🏠 Home

`/`

Contains the navigation bar, hero section, workout library, workout cards, loading state, and footer.

### 🏋️ Workout Details

`/exercise/:id`

Displays detailed workout information with options to add the workout to Today's Plan or save it for later.

### 📋 My Plan

`/my-plan`

Contains Today's Plan and Saved tabs, workout metrics, sorting, workout details, mark-as-done functionality, and remove functionality.

---

## 📋 Today's Plan

Today's Plan allows users to:

- Add workouts to their daily plan
- Keep a maximum of 5 workouts
- See total exercises
- See total workout duration
- See total calories
- Mark workouts as completed
- Remove workouts
- Receive toast feedback

---

## 💾 Data Persistence

FitLog uses browser `localStorage` to persist:

- Today's Plan workouts
- Saved workouts

This allows the selected workouts to remain available after refreshing the page.

---

## 📱 Responsive Design

The application is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

The layout, navigation, workout cards, exercise details, buttons, and footer adapt to different screen sizes.

---

## 📁 Project Structure

```text
fitlog/
├── app/
│   ├── exercise/
│   │   └── [id]/
│   │       └── page.js
│   ├── my-plan/
│   │   └── page.js
│   ├── not-found.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── Footer.jsx
│   ├── Library.jsx
│   └── Navbar.jsx
│
├── context/
│   └── PlanContext.jsx
│
├── data/
│   ├── exercises.js
│   └── workouts.js
│
├── utils/
│   └── api.js
│
├── public/
│   └── assets/
│
├── next.config.mjs
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/im-asam/assignment06.git
```

### 2. Open the project

```bash
cd assignment06
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

---

## 🏗️ Build for Production

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 🎯 Assignment

This project was created for **Programming Hero — Assignment-006: FitLog**.

The project includes the required workout library, dynamic workout details, Today's Plan, Saved functionality, responsive design, loading state, toast notifications, custom 404 page, localStorage persistence, sorting, mark-as-done, remove functionality, and deployment.

---

## 👨‍💻 Author

**Asam Uddin**

Built as part of the **Programming Hero Full Stack Web Development** course.

---

## 📜 License

This project was created for educational purposes.
