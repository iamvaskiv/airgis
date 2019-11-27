import React, { useState } from 'react';
import openaq from 'openaq';
import lookup from 'country-code-lookup';
import { AQIPM25 } from './util/aqi-calc';
import './App.css';

const aq = new openaq;

function App() {
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState('United Kingdom');


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
      console.log(res);
      setCities(prepareData(res.results));
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

  function citiesList() {
    return cities.map(city => (
    <div className="city-box" key={city.city}>
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

  function handleChange(e) {
    setCountry(e.target.value)
  }


  return (
    <div className="App">
      <form onSubmit={loadData}>
        <input name="country" onChange={handleChange} value={country} />
        <button name="submit" type="submit">Load data</button>
      </form>
      <div className="city-list">
        {citiesList()}
      </div>
    </div>
  );
}

export default App;