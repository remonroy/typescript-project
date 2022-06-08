import React from "react";
import "./App.css";
import UserFind from "./components/page/UserFind";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserFind />} />
          {/* <Route
            path="/users"
            element={
              <PrivetRoute>
                <UserFind />
              </PrivetRoute>
            }
          /> */}
        </Routes>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
