// App.tsx
import Navbar from "./components/navbar/navbar.tsx";
import Menu from "./components/menu/menu.tsx";
import Footer from "./components/footer/footer.tsx";
import Home from "./pages/home/home.tsx";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Add more components for each menu item as needed

const App = () => {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menu-container">
            <Menu />
          </div>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home/>} />
              {/* Add more routes for each menu item as needed */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
