import React from "react";
import "../styles/About.css";
import About1 from "../assets/About1.jpg";
import About2 from "../assets/About2.jpg";

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon Restaurant</h2>
        <h3>Chicago</h3>
        <p>
          At Little Lemon, we bring the heart and soul of Mediterranean cuisine
          to your table with fresh, locally sourced ingredients and timeless
          recipes. Nestled in the heart of the community, our family-owned
          restaurant is a celebration of bold flavors, warm hospitality, and a
          passion for authentic cooking. Whether you're here for a casual lunch,
          a cozy dinner, or a special occasion, we invite you to savor our
          handcrafted dishes inspired by the sun-kissed coasts of the
          Mediterranean. From zesty citrus-infused specialties to traditional
          favorites, every bite is a journey of taste and tradition. Join us at
          Little Lemon, where every meal is made with love and served with a
          smile!
        </p>
      </div>
      <div className="img-container">
        <img className="Img1" src={About1} alt="About1" />
        <img className="Img2" src={About2} alt="About2" />
      </div>
    </section>
  );
}

export default About;
