import React, { useState } from "react";
import axios from "axios";

const IntersectsButton = () => {
    const [square, setSquare] = useState({ x: 0, y: 0, sideLength: 5 });
    const [line, setLine] = useState({ x1: -1, y1: -1, x2: 10, y2: 10 });
  
    const [result, setResult] = useState("");
  
    const handleIntersects = async () => {
      try {
        const response = await axios.post("http://localhost:8080/api/geometry/intersect", {
          square,
          line,
        });
        setResult(response.data);
      } catch (error) {
        setResult("Error: " + (error.response?.data || error.message));
      }
    };
  
    const handleSquareChange = (e) => {
      const { name, value } = e.target;
      setSquare((prev) => ({ ...prev, [name]: parseFloat(value) }));
    };
  
    const handleLineChange = (e) => {
      const { name, value } = e.target;
      setLine((prev) => ({ ...prev, [name]: parseFloat(value) }));
    };
  
    return (
      <div style={{ textAlign: "center", margin: "20px" }}>
        <h3>Check Intersection</h3>
        <div >
          <h4>Square</h4>
          <label>
            X: <input type="number" name="x" value={square.x} onChange={handleSquareChange} />
          </label>
          <label>
            Y: <input type="number" name="y" value={square.y} onChange={handleSquareChange} />
          </label>
          <label>
            Size:{" "}
            <input type="number" name="sideLenght" value={square.sideLength} onChange={handleSquareChange} />
          </label>
        </div>
        <div>
          <h4>Line</h4>
          <label>
            X1: <input type="number" name="x1" value={line.x1} onChange={handleLineChange} />
          </label>
          <label>
            Y1: <input type="number" name="y1" value={line.y1} onChange={handleLineChange} />
          </label>
          <label>
            X2: <input type="number" name="x2" value={line.x2} onChange={handleLineChange} />
          </label>
          <label>
            Y2: <input type="number" name="y2" value={line.y2} onChange={handleLineChange} />
          </label>
        </div>
        <button onClick={handleIntersects}>Intersects</button>
        <p>{result}</p>
      </div>
    );
  };

export default IntersectsButton;
