import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import homeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";
import SignInScreen from "./screens/SignInScreen";
function App() {
  const cart=useSelector(state=>state.cart)
  const {cartItems}=cart
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Разпродажба
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length>0&&(
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
            <Link to="/signin">Sign in</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SignInScreen} exact></Route>
          <Route path="/" component={homeScreen} exact></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
