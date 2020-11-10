
import React from 'react';

import contentBackground from '../../assets/contentBackground.svg';


import CardMain from '../cardMain/cardMain';

import './content.styles.scss';


const Content = () => (

    <div className="content"
      style={{
        backgroundImage: `url(${contentBackground})`
      }}
    >

    {<CardMain />}

    </div>

)


export default Content ;
