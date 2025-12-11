import axios from "axios";
import { useEffect, useState } from "react";

const Guests = () => {
  const [guests, setGuests] = useState([]);

  // ---------------- FETCH GUESTS FIRST BEFORE useEffect ----------------
  const fetchGuests = async () => {
    try {
      const res = await axios.get("http://localhost:8080/guests", {
        headers: { "Cache-Control": "no-cache" }
      });
      setGuests(res.data);
    } catch (err) {
      console.error("Error loading guests:", err);
    }
  };

  // ---------------- LOAD ON PAGE OPEN ----------------
  useEffect(() => {
    const load = async () => {
      await fetchGuests();
    };
    load();
  }, []);

  // ---------------- DELETE GUEST ----------------
  const deleteGuest = async (id) => {
    if (window.confirm("Delete this guest?")) {
      await axios.delete(`http://localhost:8080/guests/${id}`);
      fetchGuests();
    }
  };

  return (
    <div>
      <h1 style={heading}>Guests</h1>

      <div style={tableWrapper}>
        <table style={table}>
          <thead>
            <tr>
              <th style={th}>Name</th>
              <th style={th}>Email</th>
              <th style={th}>Phone</th>
              <th style={th}>Event</th>
              <th style={th}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {guests.map((g) => (
              <tr key={g.id} style={row}>
                <td style={td}>{g.name}</td>
                <td style={td}>{g.email}</td>
                <td style={td}>{g.phone}</td>

                {/* Show event name or — */}
                <td style={td}>{g.event ? g.event.title : "—"}</td>

                <td style={td}>
                  <a href={`/edit-guest/${g.id}`} style={editBtn}>Edit</a>
                  <button onClick={() => deleteGuest(g.id)} style={deleteBtn}>
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

export default Guests;

// ----------- STYLES ------------
const heading = {
  fontSize: "32px",
  marginBottom: "20px",
  fontWeight: "700",
};

const tableWrapper = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  width: "85%",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  padding: "12px",
  borderBottom: "2px solid #ddd",
  fontWeight: "700",
  textAlign: "left",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const row = {
  fontSize: "15px",
};

const editBtn = {
  marginRight: "10px",
  padding: "6px 14px",
  background: "green",
  color: "white",
  borderRadius: "6px",
  textDecoration: "none",
};

const deleteBtn = {
  padding: "6px 14px",
  background: "red",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
