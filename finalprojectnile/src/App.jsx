import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Card from "./components/Card.jsx";
import Search from "./components/Search.jsx";
import Hero from './components/Hero.jsx';
import Carousel from './components/Carousel.jsx';

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
    
    <Search onSearch={(query) => console.log("Search query:", query)} />

   <Hero title="Welcome to My Site" subtitle="This is a hero section" backgroundImage="https://i.ytimg.com/vi/RJy_AL-zzTQ/maxresdefault.jpg" />
    
    <Carousel
      images={[
        "https://i.ytimg.com/vi/RJy_AL-zzTQ/maxresdefault.jpg",
        "https://cdn.mos.cms.futurecdn.net/2a9e7b1c8c5f0e3b4d9f8a1b2c3d4e5.jpg",
        "https://www.nasa.gov/sites/default/files/thumbnails/image/potw2046a.jpg"
      ]}
      caption="Amazing Space Images"
    />
    
    <Card />
    
    </>
  )
}

export default App
