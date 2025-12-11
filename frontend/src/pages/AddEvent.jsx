import axios from "axios";
import { useState } from "react";

const AddEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    venue: "",
  });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:8080/events", event);
    alert("Event saved!");
  };

  return (
    <div>
      <h1>Add Event</h1>

      <div style={form}>
        <input name="title" placeholder="Event Title" onChange={handleChange} />
        <input name="date" type="date" onChange={handleChange} />
        <input name="time" placeholder="Time (e.g. 5 PM)" onChange={handleChange} />
        <input name="venue" placeholder="Venue" onChange={handleChange} />

        <button style={btn} onClick={handleSubmit}>Save Event</button>
      </div>
    </div>
  );
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "300px",
};

const btn = {
  background: "#0284c7",
  padding: "8px",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default AddEvent;

