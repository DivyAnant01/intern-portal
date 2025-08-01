import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user')
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Intern Dashboard</h1>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Referral Code:</strong> {user.referralCode}</p>
          <p><strong>Total Donations:</strong> ₹{user.totalDonations}</p>
          <h3>Rewards:</h3>
          <ul>
            {user.rewards.map((reward, i) => (
              <li key={i}>{reward}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/leaderboard">View Leaderboard</Link>
    </div>
  );
};

export default Dashboard;
