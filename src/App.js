import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Admin from './components/Admin/Admin';
import Login from "./components/LogIn/Login/Login";
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
import PurchaseForm from "./components/PurchaseForm/PurchaseForm.js";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path='/checkOut/:plan'>
            <PurchaseForm />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>


  );
}

export default App;


