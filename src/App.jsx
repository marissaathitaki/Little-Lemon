import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}
export default App;
