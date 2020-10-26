import Header from './components/Header';
import Customize from './components/Customize';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Customize />
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
