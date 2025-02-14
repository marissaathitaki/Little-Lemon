import React from "react";
import Navbar from "../components/Navbar";
import Header from "../layouts/Header";
import Specials from "../layouts/Specials";
import Testimonials from "../layouts/Testimonials";
import About from "../layouts/About";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div className="home">
      <div id="home">
        <Navbar />
      </div>
      <Header />
      <Specials />
      <Testimonials />
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
