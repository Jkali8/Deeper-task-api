import React, { useState } from "react";
import axios from "axios";

const IntersectsButton = () => {
  const [square, setSquare] = useState({ x: "0", y: "0", sideLength: "4" });
  const [line, setLine] = useState({ x1: "-1", y1: "-1", x2: "5", y2: "5" });
  const [result, setResult] = useState("");

  const validateNumber = (value) => {
    return /^-?\d+(\.\d+)?$/.test(value);
  };

  const validateInputs = () => {
    const allInputs = [
      square.x,
      square.y,
      square.sideLength,
      line.x1,
      line.y1,
      line.x2,
      line.y2,
    ];

    const invalidInputs = allInputs.filter((value) => !validateNumber(value));

    if (invalidInputs.length > 0) {
      alert(
        "Please ensure all inputs are valid numbers. Examples: 123, -123, 123.45"
      );
      return false;
    }

    return true;
  };

  const handleIntersects = async () => {
    if (!validateInputs()) {
      return;
    }

    const parsedSquare = {
      x: parseFloat(square.x),
      y: parseFloat(square.y),
      sideLength: parseFloat(square.sideLength),
    };

    const parsedLine = {
      x1: parseFloat(line.x1),
      y1: parseFloat(line.y1),
      x2: parseFloat(line.x2),
      y2: parseFloat(line.y2),
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/geometry/intersect",
        {
          square: parsedSquare,
          line: parsedLine,
        }
      );
      handleResult(response.data);
    } catch (error) {
      setResult("Error: " + (error.response?.data || error.message));
    }
  };

  const handleResult = (intersects) => {
    if (!intersects || intersects.length === 0) {
      setResult("Objects do not intersect.");
    } else {
      const points = intersects.map(([x, y]) => `(${x}, ${y})`).join(", ");
      setResult(`Objects intersect at: ${points}`);
    }
  };

  const handleSquareChange = (e) => {
    const { name, value } = e.target;
    setSquare((prev) => ({ ...prev, [name]: value }));
  };

  const handleLineChange = (e) => {
    const { name, value } = e.target;
    setLine((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ textAlign: "center", margin: "20px", maxWidth: "400px" }}>
      <h3>Check Intersection</h3>
      <div style={{ marginBottom: "20px" }}>
        <h4>Square</h4>
        <label>
          X:{" "}
          <input
            type="text"
            name="x"
            value={square.x}
            onChange={handleSquareChange}
            style={{ marginRight: "10px", width: "80px" }}
          />
        </label>
        <label>
          Y:{" "}
          <input
            type="text"
            name="y"
            value={square.y}
            onChange={handleSquareChange}
            style={{ marginRight: "10px", width: "80px" }}
          />
        </label>
        <label>
          Size:{" "}
          <input
            type="text"
            name="sideLength"
            value={square.sideLength}
            onChange={handleSquareChange}
            style={{ width: "80px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <h4>Line</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
          }}
        >
          <label>
            X1:{" "}
            <input
              type="text"
              name="x1"
              value={line.x1}
              onChange={handleLineChange}
              style={{ width: "80px" }}
            />
          </label>
          <label>
            Y1:{" "}
            <input
              type="text"
              name="y1"
              value={line.y1}
              onChange={handleLineChange}
              style={{ width: "80px" }}
            />
          </label>
          <label>
            X2:{" "}
            <input
              type="text"
              name="x2"
              value={line.x2}
              onChange={handleLineChange}
              style={{ width: "80px" }}
            />
          </label>
          <label>
            Y2:{" "}
            <input
              type="text"
              name="y2"
              value={line.y2}
              onChange={handleLineChange}
              style={{ width: "80px" }}
            />
          </label>
        </div>
      </div>
      <div>
        <button
          onClick={handleIntersects}
          style={{
            padding: "10px 20px",
            margin: "20px auto",
            display: "block",
            textAlign: "center",
          }}
        >
          Intersects
        </button>
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>{result}</p>
      </div>
    </div>
  );
};

export default IntersectsButton;
