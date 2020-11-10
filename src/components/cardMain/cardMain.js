
import React from 'react';
import {connect} from 'react-redux';
import {getName} from 'country-list';
import getCountryISO2 from 'country-iso-3-to-2';

import {createStructuredSelector} from 'reselect';
import {selectCardCountry} from '../../redux/card/card.selectors';

import cardBackground from '../../assets/cardBackground.svg';
// import flagI from '../../assets/sau.svg';
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
      timezones
      } = country;
    console.log(country);


    if(country.length === 0) return null;

  const numbersWithCommas = (x) => {
      if(x === null) return null;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
                       if(i !== 0) return item;
                       return null;
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
                <p>{borders.map(item => {
                      const countryCode = getCountryISO2(item);
                      const country = getName(countryCode);
                      return country;
                  }).join(', ')}</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${populationI}`} alt="icon" />
              <h4>POPULATION</h4>
            </div>
            <div className="cardListCont">
                <p>{numbersWithCommas(population)}</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${areaI}`} alt="icon" />
              <h4>AREA</h4>
            </div>
            <div className="cardListCont">
                <p>{numbersWithCommas(area)}km<sup>2</sup></p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${regionI}`} alt="icon" />
              <h4>REGION</h4>
            </div>
            <div className="cardListCont">
                <p>{region}</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${demonymI}`} alt="icon" />
              <h4>DEMONYM</h4>
            </div>
            <div className="cardListCont">
                <p>{demonym}</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${languagesI}`} alt="icon" />
              <h4>LANGUAGES</h4>
            </div>
            <div className="cardListCont">
                <p>{languages.map(item => item.name).join(', ')}</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${callingCodeI}`} alt="icon" />
              <h4>CALLING CODES</h4>
            </div>
            <div className="cardListCont">
                <p>+{callingCodes}</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${currencyI}`} alt="icon" />
              <h4>CURRENCY</h4>
            </div>
            <div className="cardListCont">
                <p>{currencies[0].name}({currencies[0].symbol})</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${regionalblocsI}`} alt="icon" />
              <h4>REGIONAL BLOCS</h4>
            </div>
            <div className="cardListCont">
                <p>{regionalBlocs.map(item => {
                    return  `${item.name}(${item.acronym})`;
                  }).join(', ')}</p>
            </div>
        </div>
        <div className="cardList">
            <div className="cardListInfo">
              <img src={`${timezoneI}`} alt="icon" />
              <h4>TIME ZONE</h4>
            </div>
            <div className="cardListCont">
                <p>{timezones.join(', ')}</p>
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
