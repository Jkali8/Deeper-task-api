import React, { useState } from "react";
import IntersectsButton from "./components/IntersectsButton";
import RequestCountButton from "./components/RequestCountButton";
import UserAuth from "./components/UserAuth";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (loggedInUsername, loggedInPassword) => {
    setUsername(loggedInUsername);
    setPassword(loggedInPassword);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setIsAuthenticated(false);
  };

  const appStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={appStyles}>
      <h1>Geometry API Frontend</h1>
      <UserAuth
        onLogin={handleLogin}
        onLogout={handleLogout}
        isAuthenticated={isAuthenticated}
      />
      <IntersectsButton/>
      <RequestCountButton
            username={username}
            password={password}
            isAuthenticated={isAuthenticated}
          />
    </div>
  );
}

export default App;
