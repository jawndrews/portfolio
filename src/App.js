import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #6c63ff;
    --secondary: #8a7fff;
    --dark: #121212;
    --light: #f5f5f5;
    --light-alt: #bebebe;
    --gray: #888888;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--dark);
    color: var(--light);
    line-height: 1.6;
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--secondary);
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  button {
    cursor: pointer;
    background: var(--primary);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--secondary);
    }
  }
  
  section {
    padding: 5rem 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
