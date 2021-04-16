import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import CheckOut from './components/CheckOut/CheckOut';
import EditProducts from './components/EditProducts/EditProducts';
import Admin from './components/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/editProducts">
            <EditProducts />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
