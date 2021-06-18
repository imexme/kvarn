import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Home/Header';
import Menu from './components/Home/Menu';
import HeaderBlock from './components/Home/HeaderBlock';
import './App.css';



function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Route>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} />
        <HeaderBlock />
      </div>
    </Route>
  );
}

export default App;
