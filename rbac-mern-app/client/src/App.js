import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Home from "./components/Home";
import ManageUsers from "./components/ManageUsers";
import CreatePost from "./components/CreatePost";
import ViewContent from "./components/ViewContent";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          background: "#e3ece9",
          fontFamily: "'Poppins', 'Arial', sans-serif"
        }}
      >
        {/* Clickable site title */}
        <h1
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2rem",
            textAlign: "center",
            margin: "2rem 0",
            color: "#3778C2",
            cursor: "pointer"
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#3778C2" }}
            to="/home"
          >
            Role-Based Access Website
          </Link>
        </h1>

        {/* Navigation Bar */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "2rem"
          }}
        >
          <Link style={navStyle} to="/home">
            Home
          </Link>
          <Link style={navStyle} to="/">
            Login
          </Link>
          <Link style={navStyle} to="/register">
            Register
          </Link>
          {user && (
            <>
              <Link style={navStyle} to="/dashboard">
                Dashboard
              </Link>
              <Link style={navStyle} to="/profile">
                Profile
              </Link>
            </>
          )}
        </nav>

        {/* Route contents */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/create-post" element={<CreatePost user={user} />} />
          <Route path="/view-content" element={<ViewContent user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

const navStyle = {
  padding: "0.7rem 1.5rem",
  background: "#3778C2",
  color: "#fff",
  borderRadius: "2rem",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "background .2s",
  fontSize: "1rem"
};

export default App;
