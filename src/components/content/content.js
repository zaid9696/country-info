
import React from 'react';

import contentBackground from '../../assets/contentBackground.svg';
import cardBackground from '../../assets/cardBackground.svg';
import flag from '../../assets/sau.svg';
import altName from '../../assets/ALTERNATIVENAMES.svg';
import capital from '../../assets/CAPITAL.svg';
import neighboring from '../../assets/NEIGHBORING.svg';
import population from '../../assets/POPULATION.svg';
import area from '../../assets/AREA.svg';
import region from '../../assets/REGION.svg';
import demonym from '../../assets/DEMONYM.svg';
import languages from '../../assets/LANGUAGES.svg';
import callingCode from '../../assets/CALLINGCODES.svg';
import currency from '../../assets/currency.svg';
import regionalblocs from '../../assets/REGIONALBLOCS.svg';

import './content.styles.scss';


const Content = () => (

    <div className="content"
      style={{
        backgroundImage: `url(${contentBackground})`
      }}
    >

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
                    <img src={`${altName}`} alt="icon" />
                    <h4>ALTERNATIVE NAMES</h4>
                  </div>
                  <div className="cardListCont">
                      <p>Kingdom Of Saudi Arabia, Al-Mamlakah Al-‘Arabiyyah As-Su‘ūdiyyah</p>
                  </div>
              </div>
          <div className="cardList">
                  <div className="cardListInfo">
                    <img src={`${capital}`} alt="icon" />
                    <h4>CAPITAL</h4>
                  </div>
                  <div className="cardListCont">
                      <p>Riyadh</p>
                  </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${neighboring}`} alt="icon" />
                <h4>NEIGHBORING COUNTRIES</h4>
              </div>
              <div className="cardListCont">
                  <p>Iraq, Jordan, Kuwait, Oman, Qatar, United Arab Emirates, Yemen</p>
              </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${population}`} alt="icon" />
                <h4>POPULATION</h4>
              </div>
              <div className="cardListCont">
                  <p>32,248,200</p>
              </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${area}`} alt="icon" />
                <h4>AREA</h4>
              </div>
              <div className="cardListCont">
                  <p>2,149,690km2</p>
              </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${region}`} alt="icon" />
                <h4>REGION</h4>
              </div>
              <div className="cardListCont">
                  <p>Asia</p>
              </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${demonym}`} alt="icon" />
                <h4>DEMONYM</h4>
              </div>
              <div className="cardListCont">
                  <p>Saudi Arabian</p>
              </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${languages}`} alt="icon" />
                <h4>LANGUAGES</h4>
              </div>
              <div className="cardListCont">
                  <p>Arabic</p>
              </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${callingCode}`} alt="icon" />
                <h4>CALLING CODES</h4>
              </div>
              <div className="cardListCont">
                  <p>+966</p>
              </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${currency}`} alt="icon" />
                <h4>CURRENCY</h4>
              </div>
              <div className="cardListCont">
                  <p>Saudi Riyal(ر.س)</p>
              </div>
          </div>
          <div className="cardList">
              <div className="cardListInfo">
                <img src={`${regionalblocs}`} alt="icon" />
                <h4>REGIONAL BLOCS</h4>
              </div>
              <div className="cardListCont">
                  <p>Arab League(AL)</p>
              </div>
          </div>

          </div>
      </div>

    </div>

)


export default Content ;
