import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddGuest = () => {
  const navigate = useNavigate();

  const [guest, setGuest] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: ""
  });

  const [events, setEvents] = useState([]);

  // Load Events for dropdown
  useEffect(() => {
    axios.get("http://localhost:8080/events").then((res) => {
      setEvents(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setGuest({ ...guest, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/guests", guest);
    alert("Guest Added!");
    navigate("/guests");
  };

  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Add Guest</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "450px" }}>
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

        <select name="eventId" value={guest.eventId} onChange={handleChange} style={input}>
          <option value="">Select Event</option>
          {events.map((e) => (
            <option key={e.id} value={e.id}>
              {e.title}
            </option>
          ))}
        </select>

        <button style={btn}>Add Guest</button>
      </form>
    </div>
  );
};

export default AddGuest;

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "blue",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
