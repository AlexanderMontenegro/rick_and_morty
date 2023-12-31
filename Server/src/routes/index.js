
const express = require('express');
const router = express.Router(); 


const postUser = require('../controllers/postUser');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const { getCharById } = require('../controllers/getCharById'); 


router.get('/login', login); 
router.post('/login', login); 
router.post('/fav', postFav); 
router.delete('/fav/:id', deleteFav); 
router.get('/getCharById', getCharById); 

module.exports = router;
