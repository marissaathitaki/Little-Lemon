// import { useState } from 'react'
// import Header from './components/Header'
// import Nav from './components/Nav'
// import Main from './components/Main'
// import Footer from './components/Footer'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//        <Header/>
//         <Nav/>
//        <Main/>
//        <Footer/>
//     </>
//   )
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Booking from "./pages/Booking";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
