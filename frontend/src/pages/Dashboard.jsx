import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEvents: 0,
    totalGuests: 0,
    upcoming: 0,
    completed: 0,
  });

  // ---------------- FETCH DASHBOARD DATA ----------------
  const loadDashboard = async () => {
    try {
      const res = await axios.get("http://localhost:8080/dashboard", {
        headers: { "Cache-Control": "no-cache" }
      });
      setStats(res.data);
    } catch (err) {
      console.error("Dashboard error:", err);
    }
  };

  // ---------------- LOAD ONCE ----------------
  useEffect(() => {
    const load = async () => {
      await loadDashboard();
    };
    load();
  }, []);


  return (
    <div>
      <h1 style={heading}>Dashboard 🎉</h1>

      <div style={cards}>
        <div style={card}>
          <h3>Total Events</h3>
          <p style={number}>{stats.totalEvents}</p>
        </div>

        <div style={card}>
          <h3>Guests Registered</h3>
          <p style={number}>{stats.totalGuests}</p>
        </div>

        <div style={card}>
          <h3>Upcoming</h3>
          <p style={number}>{stats.upcoming}</p>
        </div>

        <div style={card}>
          <h3>Completed</h3>
          <p style={number}>{stats.completed}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// ---------- STYLES ----------
const heading = {
  fontSize: "32px",
  fontWeight: "700",
  marginBottom: "30px",
};

const cards = {
  display: "flex",
  gap: "25px",
};

const card = {
  width: "200px",
  padding: "25px",
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
};

const number = {
  fontSize: "32px",
  marginTop: "10px",
  fontWeight: "700",
};
