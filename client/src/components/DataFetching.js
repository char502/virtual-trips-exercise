import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [locationData, setLocationData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  //   const getLocationData = `${locationData}/locations?q=${searchTerm}`;
  //   const getLocationData = `${locationData}/locations?q=${searchLocation}`;
  //   console.log(getLocationData);

  const handleChange = e => {
    let search = e.target.value;

    if (search.length) {
      let result = search.charAt(0).toUpperCase() + search.slice(1);

      setSearchLocation(result);
    }
  };

  console.log(searchLocation);

  const handleSubmit = e => {
    e.preventDefault();

    // Change searchLocation to have an uppercase letter

    setSearchLocation(searchLocation);

    setSearchLocation('');
  };

  console.log(locationData);

  // GET /locations?q=query
  // Where query will be a partial name of a location. For example
  // GET /locations?q=hastin

  useEffect(() => {
    const link = `/get_data_GB/locations?q=${searchLocation}`;
    console.log(link);
    axios
      .get(link)
      //   .get('/get_data_GB')
      .then(res => {
        console.log(res.data.locations);

        // setLocationData(res.data.locations);
        setLocationData(res.data.locations);
        console.log(locationData);
        // console.log(res.data.locations);
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
