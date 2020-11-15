import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Footer from './components/footer/footer';

import './App.scss';


function App() {


  return (
    <div className="main">
      <Header />

      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
