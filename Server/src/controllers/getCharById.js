const axios = require('axios');
const characters = require('../utils/data'); 

const getCharById = (res, id) => {
  axios
    .get(`https://rym2.up.railway.app/api/character/${id}?key={tuApiKey}`)
    .then((response) => {
      const character = {
        id,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        origin: response.data.origin,
        image: response.data.image,
        status: response.data.status,
      };
      res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).send('Error: ' + error.message);
    });
};

module.exports = getCharById;
