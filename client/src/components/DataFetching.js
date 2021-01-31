import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [locationData, setLocationData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  const handleChange = e => {
    let search = e.target.value;

    // let alphaOnly = /'^[a-zA-Z]*$'/;
    // if (alphaOnly.test(search)) {

    // }

    if (search.length) {
      let result = search.charAt(0).toUpperCase() + search.slice(1);

      setSearchLocation(result);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchLocation(searchLocation);

    // setSearchLocation('');

    // setLocationData(searchLocation);

    // setSearchLocation('');
  };

  const handleClearSearch = () => {
    setSearchLocation('');
  };

  // GET /locations?q=query
  // Where query will be a partial name of a location. For example
  // GET /locations?q=hastin

  useEffect(() => {
    let link = '';
    searchLocation
      ? (link = `/get_data_GB/locations?q=${searchLocation}%`)
      : (link = `/get_data_GB/locations?q=${searchLocation}`);

    axios
      .get(link)
      .then(res => {
        setLocationData(res.data.locations);
      })
      .catch(err => {
        console.log(err);
      });
  }, [searchLocation]);

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='searchTerm'
          value={searchLocation}
          onChange={handleChange}
          placeholder={'Search for Point of Interest'}
        />
        <button type='submit'>Search</button>
        <div>
          <button onClick={handleClearSearch}>Clear Search</button>
        </div>
      </form>

      <div
        style={{
          backgroundColor: 'lightBlue',
          maxWidth: '750px',
          margin: '0 auto',
        }}
      >
        {locationData.map(location => {
          return (
            <div key={location.geonameid}>
              <ul>
                <li style={{ listStyleType: 'none' }}>
                  <span style={{ fontWeight: 'bold' }}>NAME:</span>{' '}
                  {location.name}{' '}
                  <span>
                    <span style={{ fontWeight: 'bold' }}>LAT:</span>{' '}
                    {location.latitude}
                  </span>{' '}
                  <span>
                    <span style={{ fontWeight: 'bold' }}>LON:</span>{' '}
                    {location.longitude}
                  </span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataFetching;
