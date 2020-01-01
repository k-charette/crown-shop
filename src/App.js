import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from "./components/header/Header"
import Homepage from "./pages/homepage/Homepage"
import Shop from "./pages/shop/Shop"
import Registration from "./pages/registration/Registration"
import { auth } from "./firebase/firebase.utils"
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  
  useEffect(() => {
      let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        setCurrentUser( {currentUser: user })
      })

      return () => unsubscribeFromAuth()
  }, [])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/registration" component={Registration}/>
      </Switch>
    </div>
  );
}

export default App;
