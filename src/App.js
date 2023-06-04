import React from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
