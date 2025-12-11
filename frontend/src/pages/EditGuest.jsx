import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditGuest = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [guest, setGuest] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: ""
  });

  const [events, setEvents] = useState([]);

  // Load guest by ID
  const loadGuest = async () => {
    const res = await axios.get(`http://localhost:8080/guests/${id}`);
    const g = res.data;

    setGuest({
      name: g.name,
      email: g.email,
      phone: g.phone,
      eventId: g.event ? g.event.id : ""
    });
  };

  // Load Events for dropdown
  const loadEvents = async () => {
    const res = await axios.get("http://localhost:8080/events");
    setEvents(res.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadGuest();
      await loadEvents();
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:8080/guests/${id}`, guest);
    alert("Guest Updated Successfully!");
    navigate("/guests");
  };

  return (
    <div>
      <h1 style={header}>Edit Guest</h1>

      <form onSubmit={handleSubmit} style={formBox}>
        <input
          type="text"
          name="name"
          placeholder="Guest Name"
          value={guest.name}
          onChange={handleChange}
          style={input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={guest.email}
          onChange={handleChange}
          style={input}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={guest.phone}
          onChange={handleChange}
          style={input}
        />

        {/* EVENT DROPDOWN */}
        <select
          name="eventId"
          value={guest.eventId}
          onChange={handleChange}
          style={input}
        >
          <option value="">Select Event</option>
          {events.map((e) => (
            <option key={e.id} value={e.id}>
              {e.title}
            </option>
          ))}
        </select>

        <button style={btn}>Update Guest</button>
      </form>
    </div>
  );
};

export default EditGuest;

/* ----------- STYLES ------------ */

const header = {
  fontSize: "30px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const formBox = {
  maxWidth: "450px",
  background: "white",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "green",
  color: "white",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

