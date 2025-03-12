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

function Pizza({ pizzaObj }) {
  //   if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        {/* <span> {pizzaObj.price} </span> */}
        <span> {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price} </span>
      </div>
    </li>
  );
}

function Menu() {
  //   const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>We have {numPizzas} pizzas available</p>
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
        </>
      ) : (
        <p>Sorry, no pizzas available</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 10;
  const closeHours = 23;
  const isOpen = hour >= openHours && hour < closeHours;
  console.log("isOpen", isOpen);
  //   if (hour >= openHours && hour < closeHours) alert("We are open!");
  //   else alert("We are closed!");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHours={openHours} />
      ) : (
        <p>Wellcome later</p>
      )}
    </footer>
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We are open! from {openHours} until {closeHours}
      </p>
      <button onClick={() => alert("Thank you for your order!")}>
        Order Now
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
