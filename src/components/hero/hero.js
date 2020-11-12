
import React ,{ useEffect, useState} from 'react';

import SearchDropdown from '../searchDropdown/searchDropdown';

import './hero.styles.scss';
import 'simplebar/dist/simplebar.min.css';

import heroBackground from '../../assets/heroBackground.svg';
import {ReactComponent as SearchIcon} from '../../assets/search.svg';

const Hero = () => {

  const [searchValue, setSearchValue] = useState('');
  const [showAndHideSearch, setShowAndHideSearch] = useState('');


  const onEventClick = (e) => {

    if(e.target.matches('.search') || e.target.matches('.searchIcon')) {
      // alert('search')
      setShowAndHideSearch(true);
    }else {
      console.log(e.target);
      setShowAndHideSearch(false);
    }

  }

  useEffect(() => {

    window.addEventListener('click', onEventClick);
    return () => {
      window.removeEventListener('click', onEventClick);
    };

  })

  return  (

    <div className="hero" style={{
      backgroundImage: `url(${heroBackground})`
    }} >

      <div className="content">
          <h1>Search any country's map, population, capital, flag, <br /> and much more.</h1>
          <div className="form">
            <input type="search" onChange={(e) => setSearchValue(e.target.value)} name="search" placeholder="Type country’s name here" className="search" autoComplete="off" />
            <SearchIcon className="searchIcon" />
           { showAndHideSearch ? <SearchDropdown searchValue={searchValue} /> : null}
          </div>
      </div>

    </div>

  );
}

export default Hero;
