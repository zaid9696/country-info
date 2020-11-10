
import React from 'react';
import {connect} from 'react-redux';
import {getName} from 'country-list';
import getCountryISO2 from 'country-iso-3-to-2';

import {createStructuredSelector} from 'reselect';
import {selectCardCountry} from '../../redux/card/card.selectors';

import cardBackground from '../../assets/cardBackground.svg';
import flagI from '../../assets/sau.svg';
import altNameI from '../../assets/ALTERNATIVENAMES.svg';
import capitalI from '../../assets/CAPITAL.svg';
import neighboringI from '../../assets/NEIGHBORING.svg';
import populationI from '../../assets/POPULATION.svg';
import areaI from '../../assets/AREA.svg';
import regionI from '../../assets/REGION.svg';
import demonymI from '../../assets/DEMONYM.svg';
import languagesI from '../../assets/LANGUAGES.svg';
import callingCodeI from '../../assets/CALLINGCODES.svg';
import currencyI from '../../assets/currency.svg';
import regionalblocsI from '../../assets/REGIONALBLOCS.svg';
import timezoneI from '../../assets/timezone.svg';


const CardMain = ({country}) => {

    const {
      name,
      altSpellings,
      area,
      borders,
      callingCodes,
      capital,
      currencies,
      demonym,
      flag,
      languages,
      population,
      region,
      regionalBlocs,

      } = country;
    console.log(borders);
    console.log(getName('SO'));

  return (
    <div className="infoCard">
        <div className="cardHeader" style={{
          backgroundImage: `url(${cardBackground})`
        }}>
          <div className="imgeContainer">
            <img src={`${flag}`} alt="flag" />
        </div>
        </div>
        <div className="cardMain">
            <div className="cardList">
                <div className="cardListInfo">
                  <img src={`${altNameI}`} alt="icon" />
                  <h4>ALTERNATIVE NAMES</h4>
                </div>
                <div className="cardListCont">
                    <p>{altSpellings.filter((item , i) => {
                       if(i !== 0) return item
                    } ).join(', ')}</p>
                </div>
            </div>
        <div className="cardList">
                <div className="cardListInfo">
                  <img src={`${capitalI}`} alt="icon" />
                  <h4>CAPITAL</h4>
                </div>
                <div className="cardListCont">
                    <p>{capital}</p>
                </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${neighboringI}`} alt="icon" />
              <h4>NEIGHBORING COUNTRIES</h4>
            </div>
            <div className="cardListCont">
                <p>{borders.map(item => getName(item)).join(',')}</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${populationI}`} alt="icon" />
              <h4>POPULATION</h4>
            </div>
            <div className="cardListCont">
                <p>32,248,200</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${areaI}`} alt="icon" />
              <h4>AREA</h4>
            </div>
            <div className="cardListCont">
                <p>2,149,690km2</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${regionI}`} alt="icon" />
              <h4>REGION</h4>
            </div>
            <div className="cardListCont">
                <p>Asia</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${demonymI}`} alt="icon" />
              <h4>DEMONYM</h4>
            </div>
            <div className="cardListCont">
                <p>Saudi Arabian</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${languagesI}`} alt="icon" />
              <h4>LANGUAGES</h4>
            </div>
            <div className="cardListCont">
                <p>Arabic</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${callingCodeI}`} alt="icon" />
              <h4>CALLING CODES</h4>
            </div>
            <div className="cardListCont">
                <p>+966</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${currencyI}`} alt="icon" />
              <h4>CURRENCY</h4>
            </div>
            <div className="cardListCont">
                <p>Saudi Riyal(ر.س)</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${regionalblocsI}`} alt="icon" />
              <h4>REGIONAL BLOCS</h4>
            </div>
            <div className="cardListCont">
                <p>Arab League(AL)</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${timezoneI}`} alt="icon" />
              <h4>TIME ZONE</h4>
            </div>
            <div className="cardListCont">
                <p>UTC+03:00</p>
            </div>
        </div>

        </div>
    </div>

  );
}


const mapStateToProps = createStructuredSelector({
  country: selectCardCountry
})

export default connect(mapStateToProps)(CardMain);
