import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    venue: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/events/${id}`).then((res) => {
      setEvent(res.data);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/events/${id}`, event);
    navigate("/events");
  };

  return (
    <div style={page}>
      <h1 style={heading}>Edit Event ✏️</h1>

      <form style={form} onSubmit={handleUpdate}>
        <label style={label}>Event Title</label>
        <input
          style={input}
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
          required
        />

        <label style={label}>Date</label>
        <input
          type="date"
          style={input}
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
          required
        />

        <label style={label}>Time</label>
        <input
          style={input}
          value={event.time}
          onChange={(e) => setEvent({ ...event, time: e.target.value })}
          required
        />

        <label style={label}>Venue</label>
        <input
          style={input}
          value={event.venue}
          onChange={(e) => setEvent({ ...event, venue: e.target.value })}
          required
        />

        <button style={btn}>Update Event</button>
      </form>
    </div>
  );
};

// ---------------- STYLES ----------------

const page = {
  background: "#eef2f5",
  padding: "40px",
  minHeight: "100vh",
};

const heading = {
  fontSize: "32px",
  marginBottom: "25px",
};

const form = {
  background: "white",
  padding: "25px",
  width: "420px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const label = {
  fontWeight: 600,
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #bcbcbc",
  fontSize: "15px",
};

const btn = {
  padding: "10px",
  background: "#0077cc",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

export default EditEvent;
