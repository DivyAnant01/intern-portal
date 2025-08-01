import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leaderboard')
      .then(res => setLeaders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>₹{user.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};

export default Leaderboard;
