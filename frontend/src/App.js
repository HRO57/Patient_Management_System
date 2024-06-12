import React from "react";
import MyRouter from "./routes/Index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div >
      <Navbar />
      <div>
        <MyRouter />
      </div>
    </div>
  );
}

export default App;
