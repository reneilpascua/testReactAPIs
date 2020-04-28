import React from 'react';
import './App.css';
import Planets from "./components/Planets";
import NiceClasses from "./components/NiceClasses";
import ClioContacts from "./components/ClioContacts";
import Counter from "./components/Counter";
import TestPage from "./pages/TestPage"
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';

import {
	BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';




function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header style={{fontWeight:'bold'}}>
        <p>this is the header</p>
      </header>

      <Router>
        <Switch>
          <Route path="/nice" component={NiceClasses} />
          <Route path="/clio" component={ClioContacts} />
          <Route path="/counter" component={Counter} />
          <Route path="/testpage" component={TestPage} />
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
