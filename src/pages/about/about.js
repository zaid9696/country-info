
import React from 'react';

import aboutpage from '../../assets/aboutpage.png';

import './about.styles.scss';

const About = () => (

  <div className="about" style={{
    backgroundImage: `url(${aboutpage})`
  }}>
      <h1>About Page</h1>
      <p>A react app that allows you to search about<br/> country's information, facts and where it locates</p>

  </div>
);

export default About;
