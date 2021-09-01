import React, { useState, useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Fresa from './pages/Fresa'
import Spinner from './components/UI/Spinner';
import HomePage from './components/Home/index';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Suspense fallback={<div className='centered'><Spinner /></div>}>

        <Switch>
          <Route path="/" exact>
            <HomePage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </Route>

          <Route exact path="/fresa" >
             <Redirect to="/fresa" component={Fresa}/>
            <Fresa isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </Route>

            {/* {user && <Redirect to="/teslaaccount" />}
            {!user && <LoginPage />} */}
{/* 
          <Route exact path="/signup">
            {user && <Redirect to="/teslaaccount" />}
            {!user && <SignupPage />}
          </Route> */}

          {/* <Route exact path="/teslaaccount"> */}
            {/* {user && <AccountPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
            {!user && <Redirect to="/login" />} */}

          {/* </Route> */}

        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
