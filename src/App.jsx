import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Layout/Header/Header";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/AboutSection";
import Service from "./Pages/Services"
import Contact from "./Pages/Contact";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        
         
      </Routes>
    </Router>
  );
}

export default App;
