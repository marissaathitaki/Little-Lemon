import React from "react";
import Button from "../components/Button";
import "../styles/Specials.css";

const specialsData = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description: "A fresh mix of lettuce, olives, and feta cheese.",
    img: "../assets/salad.jpg",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$8.99",
    description: "Toasted bread with fresh tomato and basil.",
    img: "../assets/bruchetta.png",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.99",
    description: "A zesty lemon cake with a hint of sweetness.",
    img: "../assets/dessert.jpg",
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
          <div key={item.id} className="special-card">
            <div>
              <img src={item.img} alt={item.name} />
            </div>
            <div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
            <div>
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
