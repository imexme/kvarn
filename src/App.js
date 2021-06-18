import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './components/Home/index';
import LoginPage from './components/LoginPage/index';
import './App.css';
import SignupPage from './components/SignupPage/index';


function App() {
  const { user } = useSelector(state => state.user);
  console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Switch>

        <Route path="/" exact>
          <HomePage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </Route>

        <Route path="/login">
          {user && <Redirect to="/teslaaccount" />}
          {!user && <LoginPage />}
        </Route>

        <Route path="/signup">
          {user && <Redirect to="/teslaaccount" />}
          {!user && <SignupPage />}
        </Route>

        <Route path="/teslaaccount">
          <h1>Tesla Account</h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
