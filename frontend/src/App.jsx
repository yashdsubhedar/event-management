import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";

import Guests from "./pages/Guests";
import AddGuest from "./pages/AddGuest";
import EditGuest from "./pages/EditGuest";

import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/events" element={<Events />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/edit-event/:id" element={<EditEvent />} />

          <Route path="/guests" element={<Guests />} />
          <Route path="/add-guest" element={<AddGuest />} />
          <Route path="/edit-guest/:id" element={<EditGuest />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
