import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';

const DataFetching = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [locationData, setLocationData] = useState([]);
  const [isLoading, setIsLoading] = useState(0);

  const handleChange = e => {
    let search = e.target.value;

    if (search.length !== 0) {
      let result = search.charAt(0).toUpperCase() + search.slice(1);

      setSearchLocation(result);
    }
  };

  const handleClearSearch = () => {
    setSearchLocation('');
  };

  useEffect(() => {
    let link = '';
    searchLocation && searchLocation.length > 2
      ? (link = `/get_data_GB/locations?q=${searchLocation}%`)
      : (link = `/get_data_GB/locations?q=${searchLocation}`);

    axios
      .get(link, setIsLoading(isLoading + 10))
      .then(res => {
        setLocationData(res.data.locations);
        setIsLoading(isLoading + 100);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(isLoading + 30);
      });
  }, [searchLocation]);

  return (
    <>
      <div>
        <LoadingBar
          color='lightseagreen'
          progress={isLoading}
          onLoaderFinished={() => setIsLoading(0)}
        />
      </div>
      <div style={{ padding: '20px' }}>
        <input
          type='text'
          name='searchTerm'
          value={searchLocation}
          onChange={handleChange}
          placeholder={'Search for Point of Interest'}
        />
        <div
          style={{
            margin: '10px',
          }}
        >
          <button onClick={handleClearSearch}>Clear Search</button>
        </div>
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
    </>
  );
};

export default DataFetching;
