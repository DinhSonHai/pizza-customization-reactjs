import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Customize from './components/Customize';
import Checkout from './components/Checkout';

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
            <Checkout ingredients={ingredients} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
