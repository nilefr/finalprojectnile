import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Info from "./pages/Info";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";



function App() {
  return (
    <>
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    <Search onSearch={(query) => console.log("Search query:", query)} />
    
    

   
   
    
    
    </>
  )
}

export default App;
