import React, { useState } from 'react';

import Header from './components/Header';
import Customize from './components/Customize';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [ingredients, setIngredients] = useState({
    cheese: false,
    olive: false,
    pineapple: false,
    mushroom: false,
    basil: false,
    tomato: false,
  });
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize ingredients={ingredients} setIngredients={setIngredients}/>
          </Route>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
