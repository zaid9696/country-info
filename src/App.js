import React from 'react';

// import {getNames} from 'country-list';

import Header from './components/header/header';
import Home from './pages/home/home';
import Map from './components/map/map';
import Footer from './components/footer/footer';

import './App.scss';


function App() {


  return (
    <div className="main">
      <Header />
      <Home />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
