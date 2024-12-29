import React, { useState } from "react";
import axios from "axios";

const RequestCountButton = () => {
  const [count, setCount] = useState("");

  const handleRequestCount = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/requests", {
        auth: { username: "kali", password: "pass" },
      });
      setCount(response.data);
    } catch (error) {
      setCount("Error: " + (error.response?.data || error.message));
    }
  };

  return (
    <div>
      <button onClick={handleRequestCount}>Request Count</button>
      <p>{count}</p>
    </div>
  );
};

export default RequestCountButton;
