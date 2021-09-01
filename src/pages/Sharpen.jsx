 import React from "react";
 import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
  
 
 
 function Index() {    return <h2>Home</h2>;  }   function Product({ match }) 
  {   return <h2>This is a page for product with ID: {match.params.id} </h2>;
 }
  function AppRouter() {
   return (
     <Router>
       <div>
         <nav>
           <ul>
            <li>
               <Link to="/">Home</Link>
             </li>
           </ul>
         </nav>
 
         <Route path="/" exact component={Index} />
         <Route path="/products/:id" component={Product} />
       </div>
     </Router>
   );
 }
 
/ export default AppRouter;