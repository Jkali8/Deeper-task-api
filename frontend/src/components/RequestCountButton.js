import React, { useState } from "react";
import axios from "axios";

const RequestCountButton = ({ username, password, isAuthenticated }) => {
  const [count, setCount] = useState("");

  const handleRequestCount = async () => {
    if (!isAuthenticated) {
        console.log(isAuthenticated)
      setCount("Error: You must be logged in to view the request count.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8080/api/admin/requests", {
        auth: { username, password },
      });
      setCount(`${response.data}`);
    } catch (error) {
      setCount("Error: " + (error.response?.data || error.message));
    }
  };

  return (
    <div>
      <button onClick={handleRequestCount}>
        Request Count
      </button>
      <p>{count}</p>
    </div>
  );
};

export default RequestCountButton;
