const express = require('express');
const router = express.Router();
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');

router.post('/login', login);
router.post('/postFav', postFav);
router.delete('/deleteFav/:id', deleteFav);
router.get('/rickandmorty/character', (req, res) => {
    const characters = getData(); 
    res.json(characters);
  });
 
  router.get('/hola' , ()=> {console.log('hola')})




module.exports = router;
