import React from "react";
import Navbar from "../layouts/Navbar";
import Header from "../layouts/Header";
import Specials from "../layouts/Specials";
import Testimonials from "../layouts/Testimonials";
import About from "../layouts/About";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <section id="specials">
          <Specials />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
