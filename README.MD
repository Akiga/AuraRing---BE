# AuraRing Backend

REST API for AuraRing Landing Page.

## Features

- REST API
- Store subscriber emails
- Email validation
- Prevent duplicate emails
- MongoDB Database
- MVC Architecture

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```
backend/
│
├── config/
├── controllers/
├── models/
├── routes/
├── .env
├── index.js
└── package.json
```

---

## Installation

```bash
git clone https://github.com/Akiga/AuraRing---BE.git

cd backend

npm install

npm start
```

---

## Environment Variables

Create `.env`

```env
PORT=5000

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

Success Response

```json
{
  "success": true,
  "message": "Subscribed successfully"
}
```

---

### Get Subscribers

```
GET /api/subscribe
```

Example Response

```json
[
  {
    "_id": "...",
    "email": "example@gmail.com",
    "createdAt": "2026-07-03T03:35:15.717Z"
  }
]
```

---

## Author

Mạnh Huỳnh