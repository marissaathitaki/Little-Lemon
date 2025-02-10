import React from "react";
import Navbar from "../layouts/Navbar";
import Header from "../layouts/Header";
import Specials from "../layouts/Specials";
import Testimonials from "../layouts/Testimonials";
import About from "../layouts/About";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

{
  /* <main>
        <section id="specials">
          
        </section>
        <section id="testimonials">
          
        </section>
        <section id="about">
          
        </section>
      </main> */
}
