# 🎉 CelebrateIt - Event Management Platform

A full-stack Event Management Platform built with **.NET Core 8** and **React.js**. CelebrateIt streamlines the booking process for users while providing administrators with powerful tools for service oversight and order tracking.

---

## ✨ Features

### 👤 Client Features
- **Browse Services**: Explore categories like Weddings, Birthdays, Catering, and Photography
- **Service Details**: View pricing, ratings, discounts, and descriptions
- **Booking System**: Book services with event details and secure payment options
- **Dashboard**: Track upcoming bookings and booking history
- **Profile Management**: Update personal information

### 🛡️ Admin Features
- **Service Management**: Add, update, and delete services across categories
- **Booking Oversight**: View and manage all bookings with status tracking
- **Category Management**: Organize services by event type
- **Feedback & Inquiries**: Review customer feedback and contact requests

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js, React-Bootstrap, React Router, Axios |
| **Backend** | .NET Core 8 Web API |
| **Database** | MySQL with Entity Framework Core |
| **Authentication** | JWT Token-based Auth |
| **Styling** | Custom CSS, Bootstrap 5 |

---

## 🚀 Getting Started

### Prerequisites
- [.NET SDK 8.0+](https://dotnet.microsoft.com/download)
- [Node.js 18+](https://nodejs.org/)
- [MySQL Server](https://www.mysql.com/)

### Backend Setup
```bash
cd CelebrateIt/CelebrateIt
dotnet restore
dotnet ef database update
dotnet run
```
> Backend runs at: `http://localhost:5078`

### Frontend Setup
```bash
cd myapp
npm install
npm start
```
> Frontend runs at: `http://localhost:3000`

---

## 📂 Project Structure

```
CelebrateIt-Event-Management-Platform/
├── CelebrateIt/                 # .NET Backend
│   └── CelebrateIt/
│       ├── Controllers/         # API Endpoints
│       ├── Services/            # Business Logic
│       ├── Repositories/        # Data Access
│       ├── DTOs/                # Data Transfer Objects
│       └── Model/               # Entity Models
│
└── myapp/                       # React Frontend
    ├── src/
    │   ├── components/          # React Components
    │   └── assets/              # CSS & Images
    └── public/
```

---

## 🔐 Authentication

The platform uses **JWT (JSON Web Tokens)** for secure authentication:
- **Role-based Access**: `USER` and `ADMIN` roles
- **Protected Routes**: Dashboard and Admin Panel require authentication
- **Token Storage**: Stored in localStorage

---

## 📸 Screenshots

| Home Page | Admin Dashboard |
|-----------|-----------------|
| Modern landing page with service highlights | Full service and booking management |

---

## 🧪 Testing

Run the verification script to test workflows:
```bash
cd myapp
node verify_workflows.js
```

Seed dummy data for testing:
```bash
node seed_categories.js
node seed_dummy_data.js
```

---

## 👥 Contributors

- **Sahil Randil** - Full Stack Developer

---

## 📄 License

This project is for educational purposes.

---

## 🔗 Links

- **Repository**: [github.com/Sahilrandil/CelebrateIt](https://github.com/Sahilrandil/CelebrateIt)
