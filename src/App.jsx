import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import ScrollDots from "./components/ScrollDots";
import Footer from "./components/Footer";
import Home from "./components/Home"; // Your single-page sections
import AboutPage from "./pages"; // Your new separate route

import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
         
          {/* ScrollDots might only make sense on the Home page, but we keep it layout-global here */}
          <ScrollDots />
          
          <main>
            <Routes>
              {/* Route 1: The main landing page with all your sections */}
              <Route path="/" element={<Home />} />
              
              {/* Route 2: The completely separate page */}
              <Route path="/about" element={<AboutPage />} /> {/* Add this line */}

            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );  
};

export default App;