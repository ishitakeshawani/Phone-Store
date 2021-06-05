import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Modal from "./components/Modal";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
    <React.Fragment>
      <AuthProvider>

        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/productList" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </AuthProvider>
    </React.Fragment>
  )
}

export default App;
