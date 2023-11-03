const axios = require('axios');

const URL = 'https://rym2.up.railway.app/api/character/';

async function getCharById(req, res) {
  try {
    const id = req.params.id;
    const response = await axios.get(`${URL}${id}?key={tuApiKey}`);
    const data = response.data;
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin,
      image: data.image,
      status: data.status,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = getCharById;
