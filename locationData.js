const axios = require('axios');

const baseUrl = 'http://localhost:5000/data_GB';

const getLocationData = location => {
  const link = `${baseUrl}/locations/?q=${location}`;
  return axios.get(link);
};

module.exports = {
  LocationData,
};
