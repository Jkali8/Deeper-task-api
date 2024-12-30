import React, { useState } from "react";
import axios from "axios";

const UserAuth = ({ onLogin, onLogout, isAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateUser = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/users", null, {
        params: { username, password },
      });
      setMessage("User created successfully: " + response.data.username);
      onLogin(username, password);
    } catch (error) {
        if (error.response?.status === 401) {
            setMessage("Error: User with this username already exists");
        } else {
            setMessage("Error: " + (error.response?.data || error.message));
        }
    }
  };

  const handleLogin = async () => {
    try {
      await axios.get("http://localhost:8080/api/admin/requests", {
        auth: { username, password },
      });
      setMessage("Login successful!");
      onLogin(username, password); 
    } catch (error) {
      if (error.response?.status === 401) {
        setMessage("Error: Invalid credentials.");
      } else {
        setMessage("Error: " + (error.response?.data || error.message));
      }
    }
  };

  const handleLogout = () => {
    setUsername("")
    setPassword("")
    setMessage("")
    onLogout(username,password)
  };


  return (
    <div>
      <h3>User Authentication</h3>
      {!isAuthenticated ? (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleCreateUser}>Create User</button>
          <button onClick={handleLogin}>Login</button>
        </>
      ) : (
        <>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      <p>{message}</p>
    </div>
  );
};

export default UserAuth;
