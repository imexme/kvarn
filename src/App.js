import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import HomePage from './components/Home/index';
import LoginPage from './components/LoginPage/index';
import SignupPage from './components/SignupPage/index';
import AccountPage from './components/AccountPage/index';
import './App.css';
import { auth } from './firebase/firebase';

function App() {
  const { user } = useSelector(state => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [dispatch])


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
