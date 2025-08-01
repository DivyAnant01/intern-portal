const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy User Data
const userData = {
  name: "Divy Anant",
  referralCode: "divyanant2025",
  totalDonations: 15000,
  rewards: ["T-shirt", "Badge", "Certificate"]
};

// Dummy Leaderboard Data (Bonus)
const leaderboardData = [
  { name: "Divy Anant", donations: 15000 },
  { name: "Aman Kumar", donations: 12000 },
  { name: "Pooja Shah", donations: 10000 }
];

// Routes
app.get('/api/user', (req, res) => {
  res.json(userData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
