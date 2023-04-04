import { Routes, Route } from "react-router-dom";

import "./App.css";
import Application from "./components/application/application";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SingleApplication from "./components/application/singleApplication";
import MyResource from "./components/resource/resource";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
                
        <Route path="/" element={<Home />} />
                
        <Route path="/application" element={<Application />} />
        <Route path="/application/:id" element={<SingleApplication />} />
                
        <Route path="/resource" element={<MyResource />} />
        <Route path="*" element={<Home />} />
              
      </Routes>
    </div>
  );
}

export default App;
