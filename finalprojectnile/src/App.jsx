import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import Hero from "./components/Hero.jsx";
import Carousel from "./components/Carousel.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </div>
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

export default App;
