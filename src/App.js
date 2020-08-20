import React from 'react';
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import {
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component= { Home } />
        <Route exact path="/portfolio" component={ Portfolio } />
        <Route exact path="/contact" component={ Contact } />
      </Switch>
    </div>
  );
}

export default App;
