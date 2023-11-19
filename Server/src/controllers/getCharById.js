
const axios = require('axios');
const URL = 'https://rym2.up.railway.app/api/character/';

async function getCharById(req, res) {
  const { id } = req.params;

  try {
    const response = await axios.get(`${URL}${id}`);
    const character = response.data;
    res.json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {getCharById};