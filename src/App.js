import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
              <h1>Welcome to SafeSwap</h1>
              <p>Your secure platform to buy and sell goods.</p>
              <a href="/register">Go to Register</a>
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
