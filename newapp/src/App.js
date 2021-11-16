import './App.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Sucess from './pages/Sucess';
import { useSelector } from 'react-redux';
require('dotenv').config()

function App() {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Switch>
       
        <Route path="/products/:category">
            <ProductList />
        </Route>
        <Route path="/product/:id">
        <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/sucess">
          <Sucess />
        </Route>
        <Route path="/login">
         {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
         {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
