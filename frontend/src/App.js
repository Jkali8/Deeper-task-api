import React from "react";
import IntersectsButton from "./components/IntersectsButton";
import RequestCountButton from "./components/RequestCountButton";
import UserAuth from "./components/UserAuth";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Geometry API Frontend</h1>
      <IntersectsButton />
      <RequestCountButton />
      <UserAuth />
    </div>
  );
}

export default App;
