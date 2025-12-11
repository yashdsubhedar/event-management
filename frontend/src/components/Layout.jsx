import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div style={wrapper}>
      <aside style={sidebar}>
        <h2 style={title}>Event Admin</h2>

        <nav style={nav}>
          <Link style={link} to="/">Dashboard</Link>
          <Link style={link} to="/events">Events</Link>
          <Link style={link} to="/add-event">Add Event</Link>
          <Link style={link} to="/guests">Guests</Link>
          <Link style={link} to="/add-guest">Add Guest</Link>
          <Link style={link} to="/settings">Settings</Link>
        </nav>
      </aside>

      <main style={content}>
        {children}
      </main>
    </div>
  );
};

export default Layout;

// ------------ STYLES ------------

const wrapper = {
  display: "flex",
  minHeight: "100vh",
  background: "#eef2f5",
};

const sidebar = {
  width: "220px",
  background: "white",
  padding: "30px 20px",
  boxShadow: "2px 0 10px rgba(0,0,0,0.08)",
};

const title = {
  marginBottom: "25px",
  fontSize: "22px",
  fontWeight: "700",
};

const nav = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const link = {
  fontSize: "16px",
  textDecoration: "none",
  color: "#333",
};

const content = {
  padding: "40px",
  width: "100%",
};
