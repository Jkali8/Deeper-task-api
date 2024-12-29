import React from "react";
import IntersectsButton from "./components/IntersectsButton";
import RequestCountButton from "./components/RequestCountButton";
import UserAuth from "./components/UserAuth";

function App() {
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
      <IntersectsButton />
      <RequestCountButton />
      <UserAuth />
    </div>
  );
}

export default App;
