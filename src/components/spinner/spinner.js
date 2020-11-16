
import React from 'react';

import loader from '../../assets/loader.svg';

import './spinner.styles.scss';


const Spinner = () => (

  <div className="spinner"><img src={loader} alt="Spinner" /></div>
  
);


export default Spinner;
