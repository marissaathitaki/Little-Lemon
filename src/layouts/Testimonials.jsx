import React from "react";
import Alan from "../assets/Alan.jpg";
import Amanda from "../assets/Amanda.jpg";
import Sheila from "../assets/Sheila.jpg";
import John from "../assets/John.jpg";
import "../styles/Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Amanda Smith",
    rating: 9.8,
    review:
      '"The food was amazing! I would definitely recommend this restaurant to my friends."',
    img: Amanda,
  },
  {
    id: 2,
    name: "Alan Shefield",
    rating: 10,
    review:
      '"Great atmosphere, great food, great service! I would definitely come back again."',
    img: Alan,
  },
  {
    id: 3,
    name: "Sheila Jones",
    rating: 9.5,
    review:
      '"Best restaurant in town! The food was delicious and the service was excellent."',
    img: Sheila,
  },
  {
    id: 4,
    name: "John Miller",
    rating: 9.2,
    review: '"I strongly recommend this restaurant. Great food."',
    img: John,
  },
];

const Testimonials = ({ testimonials = testimonialsData }) => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonials-card">
            <img src={item.img} alt={item.name} />
            <div className="card-text">
              <strong>{item.rating}/10</strong>
              <p>{item.review}</p>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
