import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Container/Home/home';
import Begin from './Container/main-App/main-App';
import About from './Container/About/About';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className='App'>
          <div className='Navbar'>
            <Navbar />
          </div>
          <div className='mainBody'>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/start' exact component={Begin} />
              <Route path='/about' exact component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
