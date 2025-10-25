

# 🚀 FinTrack — Modern Personal Finance Tracker

**FinTrack** is a powerful finance management application that helps you track your income, expenses, and analyze your financial habits. Carefully designed with the MERN stack for ease of use, advanced functionality, and secure data handling.

***

## 🌟 Key Features

- **User Authentication & Security:**  
  - Secure registration and login using JWT tokens.
  - Private user data stored in the cloud—always encrypted.

- **Dynamic Dashboard:**  
  - Real-time statistics on your expenses, income, and savings.
  - Spend trends and category-wise breakdowns.

- **Transaction Management:**  
  - Add, view, update, and delete expense/income transactions.
  - Filter transactions by category, date, and type.

- **Category Organization:**  
  - Manage customizable categories (Food, Salary, Rent, Travel, etc).
  - Categories are used to organize all financial records.

- **Responsive UI:**  
  - Fully mobile-friendly, with a clean, intuitive interface.
  - Ready for use on phones, tablets, and desktops.

- **RESTful API:**  
  - All data operations handled by a secure Express/MongoDB backend.
  - Exposed endpoints for transactions, categories, user authentication, and dashboards.

- **Cloud Hosted:**  
  - **Frontend:** [Netlify live app](https://bucolic-torte-a947b7.netlify.app/)
  - **Backend:** [Render API](https://fin-tracker-8v0g.onrender.com/)

***

## 📸 Screenshots

<img width="1920" height="1080" alt="Screenshot 2025-10-25 120258" src="https://github.com/user-attachments/assets/1db84ec2-02b7-4a31-a8ac-d684ef1d9947" />
<img width="1920" height="1080" alt="Screenshot 2025-10-25 120041" src="https://github.com/user-attachments/assets/beb6f49c-4654-489b-8e79-f1e4cf1c7df2" />



## 🛠️ Technology Stack

| Layer      | Details                        |
|------------|-------------------------------|
| Frontend   | React, Axios, Netlify         |
| Backend    | Node.js, Express.js, JWT      |
| Database   | MongoDB Atlas, Mongoose       |
| Deployment | Netlify (client), Render (API)|
| Auth       | JWT, bcrypt (password hashing)|

***

## 💻 Getting Started — Local Development

### 1. **Clone the Repository**

```bash
git clone https://github.com/Veekshitha11/Fin_tracker.git
cd Fin_tracker
```

### 2. **Backend Setup**

```bash
cd server
npm install
```

- Create a `.env` file in `/server` with:
```
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-super-secret-key
```

- Start the backend:
```bash
npm start
# Default: http://localhost:3001
```

### 3. **Frontend Setup**

```bash
cd ../client
npm install
```
- Optionally, create a `.env` for API Path override:
```
REACT_APP_API_URL=http://localhost:3001/api
```
- Start the frontend:
```bash
npm start
# Default: http://localhost:3000
```

***

## 🌱 Initial Data — Seed Default Categories

To use the Category selector, first create categories (this is usually via frontend admin, but you can use cURL):

```bash
# Add "Food" category (expense)
curl -X POST https://fin-tracker-8v0g.onrender.com/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"Food","type":"expense"}'

# Add "Salary" category (income)
curl -X POST https://fin-tracker-8v0g.onrender.com/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"Salary","type":"income"}'
```

Alternatively, add categories directly in the MongoDB Atlas dashboard.

***

## 🗂️ Project Structure

```
Fin_tracker/
│
├── client/       # React app (frontend)
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── api/
│   └── public/
│
└── server/       # Express API (backend)
    ├── routes/
    ├── controllers/
    ├── models/
    ├── config/
    └── index.js / server.js
```

***

## 🔒 Security & Environment

- All user passwords are securely hashed using bcrypt.
- JWT authentication keeps APIs protected—never expose your secret key.
- All sensitive config (database URL, JWT secret) is managed via environment variables.

***

## 🤝 Contributing

We welcome your ideas!  
Open an Issue for bugs or suggestions.  
Submit a Pull Request for new features or improvements.

***

## 📄 License

This project is open source under the MIT license.

***

## 👤 Author

Developed by [Veekshitha11](https://github.com/Veekshitha11).  
If you find FinTrack useful, star ⭐️ the repo or share feedback!

***

Feel free to further customize with screenshots, badges, and your own personality! This README gives contributors and users a great first impression and a clear getting started path.

