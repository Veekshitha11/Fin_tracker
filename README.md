FinTrack – Personal Finance Tracker
FinTrack is a full-stack web application that empowers users to track their expenses, income, and budgets. Built with the MERN stack (MongoDB, Express, React, Node.js), it helps you visualize your financial health and make smarter money decisions.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/88bf3b85-131d-4888-b4b9-0b702c4645c0" />

🚀 Features
User Authentication: Secure signup and login with JWT-based authentication.

Dashboard: Visual summaries of spending, income, and balance.

Transactions: Add, view, edit, and delete income/expense transactions.

Categories: Organize transactions by customizable categories (e.g., Food, Rent, Salary).

Responsive Design: Mobile-friendly UI deployed to Netlify.

APIs: RESTful endpoints for core finance operations.

MongoDB Atlas: Cloud-based database for scalability.

🖥️ Live Demo
Frontend: FinTrack on Netlify

Backend API: Render service

🛠️ Tech Stack
Layer	Technology
Frontend	React, Axios, Netlify
Backend	Express.js, Node.js, JWT
Database	MongoDB Atlas, Mongoose
Deployment	Netlify (frontend), Render (backend)
📦 Getting Started Locally
1. Clone this repository
bash
git clone https://github.com/Veekshitha11/Fin_tracker.git
cd Fin_tracker
2. Setup backend
bash
cd server
npm install
# Create a `.env` with:
# MONGODB_URI=your-mongodb-connection-string
# JWT_SECRET=your-secret-key
npm start
3. Setup frontend
bash
cd ../client
npm install
npm start
# By default runs at http://localhost:3000
4. Environment variables (frontend)
Create a .env file in /client for the API base URL if needed:

text
REACT_APP_API_URL=http://localhost:3001/api
🌱 Seed Default Categories
Create income/expense categories via API or database tool (required for "Select Category" dropdowns to work).

bash
# Example to create "Food" under "expense"
curl -X POST https://fin-tracker-8v0g.onrender.com/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"Food","type":"expense"}'
Repeat for "income" (e.g., "Salary").

🏗️ Folder Structure
text
Fin_tracker/
  client/    # React frontend
  server/    # Express backend
🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change or add.

📄 License
Open-source, MIT License.

Built by Veekshitha11
