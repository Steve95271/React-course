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
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;
  // const pizzaNum = [];

  return (
    <main className="menu">
      <h2>Menu</h2>

      {pizzaNum > 0 ? (
        // React fragment. Using for retuen multiple tag.
        <>
          <p>
            Authentic Italian cuision. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>
          Sorry, we're still preparing the pizza menu. Please comback next time
          😃
        </p>
      )}
    </main>
  );

  // if (pizzaNum > 0) {
  //   return (
  //     <main className="menu">
  //       <h2>Menu</h2>
  //       <ul className="pizzas">
  //         {pizzaData.map((pizza) => (
  //           <Pizza pizzaObj={pizza} key={pizza.name} />
  //         ))}
  //       </ul>
  //     </main>
  //   );
  // } else {
  //   return (
  //     <p>
  //       Sorry, we're still preparing the pizza menu. Please comback next time 😃
  //     </p>
  //   );
  // }
}

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) {
    return (
      <li className="pizza">
        <p>We are never gone for long</p>
      </li>
    );
  }

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price} $</span>
      </div>
    </li>
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
