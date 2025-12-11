import { useState } from "react";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  return (
    <div>
      <h1 style={{ marginBottom: "30px" }}>Settings</h1>

      {/* --- Profile Section --- */}
      <div style={sectionBox}>
        <h3>Admin Profile</h3>

        <div style={row}>
          <label style={label}>Name:</label>
          <input
            style={input}
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>

        <div style={row}>
          <label style={label}>Email:</label>
          <input
            style={input}
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </div>

        <button style={btn}>Save Profile</button>
      </div>

      {/* --- Password Section --- */}
      <div style={sectionBox}>
        <h3>Change Password</h3>

        <input
          style={input}
          placeholder="Current Password"
          type="password"
          onChange={(e) =>
            setPasswords({ ...passwords, current: e.target.value })
          }
        />

        <input
          style={input}
          placeholder="New Password"
          type="password"
          onChange={(e) =>
            setPasswords({ ...passwords, newPass: e.target.value })
          }
        />

        <input
          style={input}
          placeholder="Confirm New Password"
          type="password"
          onChange={(e) =>
            setPasswords({ ...passwords, confirm: e.target.value })
          }
        />

        <button style={btn}>Update Password</button>
      </div>

      {/* --- Preferences Section --- */}
      <div style={sectionBox}>
        <h3>System Preferences</h3>

        <div style={row}>
          <label style={label}>Email Notifications:</label>
          <select style={input}>
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>

        <div style={row}>
          <label style={label}>Theme:</label>
          <select style={input}>
            <option>Light</option>
            <option>Dark (coming soon)</option>
          </select>
        </div>

        <button style={btn}>Save Changes</button>
      </div>
    </div>
  );
};

// Styling used
const sectionBox = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "10px",
  marginBottom: "30px",
  width: "450px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const input = {
  padding: "10px",
  width: "100%",
  border: "1px solid #c6c6c6",
  borderRadius: "6px",
  fontSize: "14px",
  marginTop: "6px",
  marginBottom: "14px",
};

const btn = {
  padding: "10px",
  background: "#0077cc",
  border: "none",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "15px",
  width: "100%",
};

const row = {
  marginBottom: "14px",
};

const label = {
  fontWeight: 600,
};

export default Settings;
