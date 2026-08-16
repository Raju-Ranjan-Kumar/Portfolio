import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="min-h-screen bg-ink font-body text-ivory">
        <Navbar />
        <Home />
        <About />
        <Experiance />
        <PortFolio />
        <Resume />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
