import React from "react";
import Button from "../components/Button";
import saladImg from "../assets/salad.jpg";
import bruschettaImg from "../assets/bruchetta.png";
import dessertImg from "../assets/dessert.jpg";
import "../styles/Specials.css";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    img: saladImg,
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$8.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    img: bruschettaImg,
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img: dessertImg,
  },
];

const Specials = ({ specials = specialsData }) => {
  return (
    <div className="specials">
      <h2>This Week's Specials!</h2>
      <div className="menu-button">
        <Button to="#">Online Menu</Button>
      </div>
      <div className="specials-list">
        {specials.map((item) => (
          <div key={item.id} className="specials-card">
            <div className="card-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="dish-price">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
            <div className="order">
              <p>Order Online</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
