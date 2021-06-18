import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/index';
import LoginPage from './components/LoginPage/index';
import './App.css';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Switch>

        <Route path="/" exact>
          <HomePage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
