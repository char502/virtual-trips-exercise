import React from 'react';
import LoadingBar from 'react-top-loading-bar';

const DisplayData = ({
  searchLocation,
  locationData,
  handleChange,
  handleClearSearch,
  isLoading,
  setIsLoading,
}) => {
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

export default DisplayData;
