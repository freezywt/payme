import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/PreLoader/index';
import Navbar from './components/NavBar/index';
import Home from './components/Home/Home';
import Footer from './components/Footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/Css/Components/Buttons.css';
import './style.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" />
          <Route path="/about"  />
          <Route path="/resume"  />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
