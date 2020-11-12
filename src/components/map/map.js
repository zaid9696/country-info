
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import mapboxgl from 'mapbox-gl';

// import geoCoun from 'osm-countries-geojson';
// import mapData from './map.data.js';
import data from '../../countries.geo.json';

import {createStructuredSelector} from 'reselect';
import {selectCardCountry} from '../../redux/card/card.selectors';
import {selectCardInfo} from '../../redux/card/card.selectors';

import './map.styles.scss';



const Map = ({country, cardInfo}) => {

  let lat, lng, countryPolygon;
if(country){

const alpha3Code = country.alpha3Code;
 countryPolygon = data.features.filter(item => item.id === alpha3Code);

  [lat,lng] = country.latlng;

}

// console.log();

  useEffect(() => {


    mapboxgl.accessToken = 'pk.eyJ1IjoiencyODMiLCJhIjoiY2p2Mnpwa2NuMHhoYTN5cDlrNHVmZ3p3dyJ9.UzRG4rXiLMXwg99oQ6UMRw';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: country ? [lng, lat] : [0, 0],
      zoom: country ? 4 : 1
    });

    map.on('load', function () {
      map.addSource('maine', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': country ? countryPolygon[0].geometry.type : 'Polygon',
            'coordinates': country ? countryPolygon[0].geometry.coordinates: []
          }
        }
      });
      map.addControl(new mapboxgl.NavigationControl());
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine',
        'layout': {},
        'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.8,
          'fill-outline-color': '#fff'
        }
      });
    });

  }, [country, lat, lng, countryPolygon])

  return (
    <div className="map-container">
      <div id="map"></div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  country: selectCardCountry,
  cardInfo: selectCardInfo
});

export default connect(mapStateToProps)(Map);
