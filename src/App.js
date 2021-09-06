import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Fresa from './pages/Fresa'
import Castor from './pages/Castor'
import Hydrohead from './pages/Hydrohead'
import Saws from './pages/Saws'
import Sharpen from './pages/Sharpen';
import Knife from './pages/Knife';
import Other from './pages/Other';
import Accessories from './pages/Accessories';


import Spinner from './components/UI/Spinner';
import HomePage from './components/Home/index';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Suspense fallback={<div className='centered'><Spinner /></div>}>

        <Switch>
          <Route path="/" exact>
            <HomePage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>

          <Route path="/fresa" exact >
            <Redirect to="/fresa" component={Fresa} />
            <Fresa isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>

          <Route path="/castor"  >
            <Redirect to="/castor" component={Castor} />
            <Castor isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>


          <Route path="/hydrohead"  >
            <Redirect to="/hydrohead" component={Hydrohead} />
            <Hydrohead isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>

          <Route path="/sharpen"  >
            <Redirect to="/sharpen" component={Sharpen} />
            <Sharpen isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>

          <Route path="/saws"  >
            <Redirect to="/saws" component={Saws} />
            <Saws isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>



          <Route path="/knife"  >
            <Redirect to="/knife" component={Knife} />
            <Knife isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>


          <Route path="/accessories"  >
            <Redirect to="/accessories" component={Accessories} />
            <Accessories isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>

          <Route path="/other"  >
            <Redirect to="/other" component={Other} />
            <Other isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>




          {/* {user && <Redirect to="/account" />}
            {!user && <LoginPage />} */}
          {/* 
          <Route exact path="/signup">
            {user && <Redirect to="/account" />}
            {!user && <SignupPage />}
          </Route> */}

          {/* <Route exact path="/account"> */}
          {/* {user && <AccountPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
            {!user && <Redirect to="/login" />} */}

          {/* </Route> */}


        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
