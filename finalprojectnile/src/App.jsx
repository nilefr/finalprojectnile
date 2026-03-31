import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";


function App() {
  

  return (
    <>
    <h1 className="text-4xl font-bold text-blue-600
	bg-yellow-100 p-8 rounded-xl">
  Tailwind is working!
</h1>

    <h1>Welcome to My React App</h1>
       <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
