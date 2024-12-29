import React, { useState } from "react";
import axios from "axios";

const UserAuth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [message, setMessage] = useState("");

  const handleCreateUser = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/users", null, {
        params: { username, password, role },
      });
      setMessage("User created successfully: " + response.data.username);
    } catch (error) {
      setMessage("Error: " + (error.response?.data || error.message));
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/requests", {
        auth: { username, password },
      });
      setMessage("Login successful! Request count: " + response.data);
    } catch (error) {
      setMessage("Error: " + (error.response?.data || error.message));
    }
  };

  return (
    <div>
      <h3>User Authentication</h3>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
      </div>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default UserAuth;
