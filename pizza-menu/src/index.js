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
    <main className="menu">
      <Header />
      <Menu />
      <OpenOrClose />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Menu</h2>
      <div className="pizzas">
        <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          picture="pizzas/focaccia.jpg"
          alt="Focaccia pizza puctire"
          price={6}
        />
        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          picture="pizzas/margherita.jpg"
          alt="Pizza Margherita"
          price={12}
        />
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          picture="pizzas/spinaci.jpg"
          alt="Pizza Spinaci"
          price={9}
        />
      </div>
    </main>
  );
}

function Pizza(props) {
  console.log(props);

  return (
    <div className="pizza">
      <img src={props.picture} alt={props.alt}></img>
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 5} $</span>
      </div>
    </div>
  );
}

function OpenOrClose() {
  const openhour = 9;
  const closehour = 21;
  const currentTime = new Date().getHours();
  // console.log(currentTime);

  if (currentTime >= openhour && currentTime <= closehour) {
    return <h3>Welcome, we are opening</h3>;
  } else {
    return <h3>Sorry, we are closed</h3>;
  }
}

function Footer() {
  const [time, setTime] = React.useState(new Date().toLocaleString());

  React.useEffect(function () {
    setInterval(function () {
      setTime(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
