# AuraRing Landing Page

A modern landing page for AuraRing built with React and Express.js. Users can subscribe with their email, and the information is stored in MongoDB.

## Demo

Frontend:
https://your-vercel-link.vercel.app

Backend:
https://your-render-link.onrender.com

---

## Features

- Responsive landing page
- Modern UI with Tailwind CSS
- Email subscription
- Email validation
- Duplicate email prevention
- Toast notifications
- RESTful API
- MongoDB database

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Sonner

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```
landing-page/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── ...
```

---

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

---

## Environment Variables

Backend

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Frontend

```env
VITE_API_URL=http://localhost:5000/api
```

---

## API

### Subscribe

```
POST /api/subscribe
```

Request

```json
{
  "email": "example@gmail.com"
}
```

Response

```json
{
  "success": true,
  "message": "Subscribed successfully"
}
```


---

## Future Improvements

- Admin Dashboard
- Authentication
- Email confirmation
- Analytics
- Dark Mode

---

## Author

Mạnh Huỳnh