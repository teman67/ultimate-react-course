import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

function Header() {
  return (
    // <h1 style={{ color: "red", fontSize: "52px", textTransform: "uppercase" }}>
    //   Fast React Pizza
    // </h1>
    <header className="header">
      <h1>Fast React Pizza</h1>
    </header>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <span> {props.pizzaObj.price} </span>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          //   <Pizza
          //     name={pizza.name}
          //     ingeredients={pizza.ingredients}
          //     photoName={pizza.photoName}
          //     price={pizza.price}
          //   />
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
        name="Pizza Margarita"
        ingeredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        // price="10"
        price={10}
      />
      <Pizza
        name="Pizza Spinach"
        ingeredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        // price="13"
        price={13}
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 9;
  const closeHours = 23;
  const isOpen = hour >= openHours && hour < closeHours;
  console.log("isOpen", isOpen);
  //   if (hour >= openHours && hour < closeHours) alert("We are open!");
  //   else alert("We are closed!");

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open! until {closeHours}</p>
          <button onClick={() => alert("Thank you for your order!")}>
            Order Now
          </button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
