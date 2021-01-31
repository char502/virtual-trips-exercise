import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayData from './DisplayData';

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
      <DisplayData
        searchLocation={searchLocation}
        locationData={locationData}
        handleChange={handleChange}
        handleClearSearch={handleClearSearch}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
};

export default DataFetching;
