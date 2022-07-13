import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//import BasicExample from './Component/Sidebar.js'
//import Dashboard from './Component/Dashboard.jsx';
import { SideBar } from "./Component/cdbSidebar";
import HeaderBar from "./Component/HeaderBar/HeaderBar";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
// import SideBar from "./Component/Sidebar.jsx"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <div className="content">
          <HeaderBar />
          <div className="maincontent">
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<ContactPage />} path="/contact" />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
