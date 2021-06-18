import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './components/Home/index';
import LoginPage from './components/LoginPage/index';
import SignupPage from './components/SignupPage/index';
import AccountPage from './components/AccountPage/index';
import './App.css';


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

        <Route exact path="/login">
          {user && <Redirect to="/teslaaccount" />}
          {!user && <LoginPage />}
        </Route>

        <Route exact path="/signup">
          {user && <Redirect to="/teslaaccount" />}
          {!user && <SignupPage />}
        </Route>

        <Route exact path="/teslaaccount">
          {!user && <Redirect to="/login" />}
          {user && <AccountPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        </Route>

      </Switch>
    </div>
  );
}

export default App;
