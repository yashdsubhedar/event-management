import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);

  // Load all events
  const loadEvents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/events");
      setEvents(res.data);
    } catch (error) {
      console.error("Error loading events", error);
    }
  };

  // Fetch events on page load (ESLint-safe)
  useEffect(() => {
    const fetchData = async () => {
      await loadEvents();
    };
    fetchData();
  }, []);

  // Delete event
  const deleteEvent = async (id) => {
    if (window.confirm("Delete this event?")) {
      await axios.delete(`http://localhost:8080/events/${id}`);
      loadEvents(); // refresh list
    }
  };

  return (
    <div>
      <h1 style={headerStyle}>Events</h1>

      <div style={tableContainer}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={th}>Title</th>
              <th style={th}>Date</th>
              <th style={th}>Time</th>
              <th style={th}>Venue</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.id} style={trStyle}>
                <td style={td}>{event.title}</td>
                <td style={td}>{event.date}</td>
                <td style={td}>{event.time}</td>
                <td style={td}>{event.venue}</td>
                <td style={td}>
                  <Link to={`/edit-event/${event.id}`}>
                    <button style={editBtn}>Edit</button>
                  </Link>

                  <button
                    style={deleteBtn}
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;

/* -----------------------------------
                STYLES
----------------------------------- */

const headerStyle = {
  fontSize: "32px",
  marginBottom: "20px",
  fontWeight: "bold",
};

const tableContainer = {
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  maxWidth: "900px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: "12px",
  fontSize: "16px",
  borderBottom: "2px solid #eee",
};

const td = {
  padding: "12px",
  fontSize: "15px",
};

const trStyle = {
  borderBottom: "1px solid #eee",
};

const editBtn = {
  background: "green",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  marginRight: "10px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ff4d4d",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};
