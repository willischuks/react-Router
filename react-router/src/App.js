import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/homePage";
import MovieDescription from "./components/movieDescription/movieDescription";
import Account from './pages/account'
import Reviews from "./pages/reviews";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:id" element={< MovieDescription />} />
        <Route path="/account" element={< Account />} />
        <Route path="/reviews" element={< Reviews />} />
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
