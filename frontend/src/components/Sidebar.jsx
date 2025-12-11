import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        borderRight: "1px solid #ddd",
        background: "#fafafa",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Event Admin</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/add-event">Add Event</Link></li>
        <li><Link to="/guests">Guests</Link></li>
        <li><Link to="/add-guest">Add Guest</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

