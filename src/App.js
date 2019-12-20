import React, { useState, useEffect } from 'react';
import openaq from 'openaq';
import lookup from 'country-code-lookup';
import MapGL, { GeolocateControl, Marker, LinearInterpolator, FlyToInterpolator } from 'react-map-gl';
import { easeCubic } from 'd3-ease';
import WebMercatorViewport from 'viewport-mercator-project';
import { AQIPM25 } from './util/aqi-calc';
import './Variables.css';
import './App.css';

const TOKEN = 'pk.eyJ1IjoiaWFtdmFza2l2IiwiYSI6ImNrNGFpb3hrYzA0NzUzbW56ZXQ0b2o3ZjAifQ.uTXaOhw647f2uTR2Z74yrQ';

const aq = new openaq;

function App() {
  const [cities, setCities] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [country, setCountry] = useState('');
  const [locations, setLocations] = useState([]);
  const [activeCity, setActiveCity] = useState(null);
  let markers = [];

  const searchIcon = (
    <svg 
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="search-icon"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M6.81342 0.888672C3.62244 0.888672 1.03564 3.47547 1.03564 6.66645C1.03564 9.85743 3.62244 12.4442 6.81342 12.4442C10.0044 12.4442 12.5912 9.85743 12.5912 6.66645C12.5912 3.47547 10.0044 0.888672 6.81342 0.888672ZM6.81342 1.79978C8.78221 1.79798 10.5581 2.98257 11.3128 4.80098C12.0675 6.61938 11.6522 8.71335 10.2607 10.1061C8.86918 11.4989 6.7756 11.9161 4.9565 11.1631C3.13741 10.4101 1.9512 8.63524 1.9512 6.66645C1.96335 3.98544 4.13243 1.81438 6.81342 1.79978ZM11.8356 11.0531L15.1112 14.3509C15.2231 14.4636 15.2664 14.6275 15.2248 14.7808C15.1831 14.9342 15.0628 15.0536 14.9092 15.0942C14.7556 15.1348 14.592 15.0903 14.4801 14.9776L11.2045 11.6798L11.8356 11.0531Z" fill="black"/>
    </svg>
  );

  
  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 2
  });

  function goBack() {
    setActiveCity(null);
  }


  function flyToLocation (bounds) {
    if (bounds.length < 1) return;

    if (bounds.length == 1) {
      const longitude = bounds[0][0];
      const latitude = bounds[0][1];
      const zoom = 10;

      const view = {
        width: "100%",
        height: "100%",
        longitude,
        latitude,
        zoom,
        transitionDuration: 5000,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubic
      };
  
      setViewPort(view);
      return;
    }

    const {longitude, latitude, zoom} = new WebMercatorViewport(viewport)
    .fitBounds(bounds, {
      padding: 160,
      offset: [-200, 0]
    });
 
    const view = {
      width: "100%",
      height: "100%",
      longitude,
      latitude,
      zoom,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    };

    setViewPort(view);
  }



  function loadData(e) {
    e.preventDefault();
    const c = lookup.byCountry(country);

    if (c == undefined) {
      alert(`Sorry "${country}" has no data.`);
      return;
    }

    aq
    .latest({parameter: 'pm25', limit: '10000', country: c.iso2})
    .then((res) => {
      // console.log(res);
      setCities(prepareData(res.results));

      setAllCities(res.results);
    });
  }

  function prepareData(res) {
    const citiesList = [];
    const rawCities = [];

    res.forEach((item) => {
      if (!citiesList.includes(item.city) && item.measurements[0].value !== 0) {
        rawCities.push(item);
        citiesList.push(item.city);
      } 
    });

    const cities = rawCities.map(city => {
      return {
        city: city.city,
        country: city.country,
        pm25: {
          value: city.measurements[0].value,
          unit: city.measurements[0].unit,
          lastUpdated: city.measurements[0].lastUpdated
        } 
      };
    });

    cities.sort(compare)

    return cities;
  }

  function compare(a, b) {
    if (a.pm25.value > b.pm25.value) return 1; 
    if (a.pm25.value == b.pm25.value) return 0;
    if (a.pm25.value < b.pm25.value) return -1; 
  }

  function compareLoc(a, b) {
    if (a.measurements[0].value > b.measurements[0].value) return 1; 
    if (a.measurements[0].value == b.measurements[0].value) return 0;
    if (a.measurements[0].value < b.measurements[0].value) return -1; 
  }

  function loadCity(activeCity) {
    setActiveCity(activeCity);

    const loc = allCities.filter(city => city.city === activeCity.city);
    setLocations(loc.sort(compareLoc));
    
    const bounds = loc.map(loc => [loc.coordinates.longitude, loc.coordinates.latitude]);
    flyToLocation(bounds);
  }

  function handleChange(e) {
    setCountry(e.target.value)
  }


  
//   0:
// location: "Reading New Town"
// city: "Reading"
// country: "GB"
// distance: 7414948.777544675
// measurements: Array(1)
// 0:
// parameter: "pm25"
// value: 2
// lastUpdated: "2019-12-20T16:00:00.000Z"
// unit: "µg/m³"
// sourceName: "DEFRA"
// averagingPeriod: {value: 24, unit: "hours"}
// __proto__: Object
// length: 1
// __proto__: Array(0)
// coordinates: {latitude: 51.45309, longitude: -0.944067}
// __proto__: Object
// length: 1
// __proto__: Array(0)



  function showLocations () {
    markers = locations.map(loc => (
      <Marker key={loc.location} longitude={loc.coordinates.longitude} latitude={loc.coordinates.latitude}>
        <div className="marker city-box location">
          <h2>{loc.location.replace(loc.city, '')}</h2>
          <div className="city-values">
            <div className="value-box">
              <span className="unit">AQI: </span><span className="value">{AQIPM25(loc.measurements[0].value)}</span>
            </div>
            <div className="value-box">
              <span className="unit">PM2.5: </span><span className="value">{loc.measurements[0].value} {loc.measurements[0].unit}</span>
            </div>
          </div>
        </div>
      </Marker>
    ));


    return locations.map(loc => (
      <div className="city-box location"  key={loc.location}>
    <h2>{loc.location.replace(loc.city, '')}</h2>
    <div className="city-values">
      <div className="value-box">
        <span className="unit">AQI: </span><span className="value">{AQIPM25(loc.measurements[0].value)}</span>
      </div>
      <div className="value-box">
        <span className="unit">PM2.5: </span><span className="value">{loc.measurements[0].value} {loc.measurements[0].unit}</span>
      </div>
    </div>
  </div>
    ));
  }

  function showCities () {
    return cities.map(city => (
      <div className="city-box" onClick={loadCity.bind(this, city)} key={city.city}>
        <h2>{city.city}</h2>
        <div className="city-values">
          <div className="value-box">
            <span className="unit">AQI: </span><span className="value">{AQIPM25(city.pm25.value)}</span>
          </div>
          <div className="value-box">
            <span className="unit">PM2.5: </span><span className="value">{city.pm25.value} {city.pm25.unit}</span>
          </div>
        </div>
      </div>));
  }

  function showList() {
    if (cities.length == 0 && activeCity == null) {
      return (
        <div className="empty-state">Щоб почати користуватись цією ГІС – введіть назву країни дані якої вас цікавлять в поле зверху</div>
      )
    }

    if (!!activeCity) {
      return showLocations();
    }

    return showCities();
  }

  function cityControl () {
    if (!activeCity) return null;

    return (
      <div className="controls">
        <div className="back-btn" onClick={goBack}>Назад</div>
        <div className="active-city">
          <div className="name">
            {activeCity.city}
          </div>
          <div className="average-aqi">Найвище значення AQI: {AQIPM25(activeCity.pm25.value)}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="sidebar">
        <form onSubmit={loadData}>
          {searchIcon}
          <input placeholder="Введіть назву країни" name="country" onChange={handleChange} value={country} />
          <button name="submit" type="submit">Load data</button>
        </form>
        {cityControl()}
        <div className="city-list">
          {showList()}
        </div>
      </div>
      <div className="map">
        <MapGL
          {...viewport}
          onViewportChange={setViewPort}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {markers}
        </MapGL>
      </div>
    </div>
  );
}

export default App;



