import React, { useState } from "react";
import axios from "axios";

const IntersectsButton = () => {
  const [result, setResult] = useState("");

  const handleIntersects = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/geometry/intersect", {
        square: { x: 0, y: 0, size: 5 },
        line: { x1: -1, y1: -1, x2: 10, y2: 10 },
      });
      setResult(response.data);
    } catch (error) {
      setResult("Error: " + (error.response?.data || error.message));
    }
  };

  return (
    <div>
      <button onClick={handleIntersects}>Intersects</button>
      <p>{result}</p>
    </div>
  );
};

export default IntersectsButton;
