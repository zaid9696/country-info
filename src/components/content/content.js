
import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCardLoading} from '../../redux/card/card.selectors';

import Spinner from '../spinner/spinner';
import contentBackground from '../../assets/contentBackground.svg';


import CardMain from '../cardMain/cardMain';

import './content.styles.scss';


const Content = ({loading}) => (

    <div className="content"
      style={{
        backgroundImage: `url(${contentBackground})`
      }}
    >

    {loading ? <Spinner /> : <CardMain />}
    </div>

)

const mapStateToProps = createStructuredSelector({
  loading: selectCardLoading
});

export default connect(mapStateToProps)(Content);
