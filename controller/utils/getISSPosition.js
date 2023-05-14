const axios = require("axios");

const getISSPosition = () =>
  axios
    .get("https://api.wheretheiss.at/v1/satellites/25544")
    .then(({ data }) => {
      const { longitude, latitude, altitude } = data;
      return { longitude, latitude, altitude: altitude * 1000 };
    });

module.exports = getISSPosition;
