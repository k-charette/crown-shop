import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header"
import Registration from "./pages/registration/Registration"

import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/registration" component={Registration}/>
      </Switch>
    </div>
  );
}

export default App;
