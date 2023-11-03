
const http = require('http');
const express = require('express');
const app = express();
const PORT = 3001;
const getCharById= require("./controllers/getCharById")

const server = http.createServer((req, res) => {
   if (req.url.includes('/rickandmorty/character')) {
   }

   app.get('/rickandmorty/character/:id', getCharById);
 });

app.listen(PORT, () => {
   console.log('Server is running on port ' + PORT);
});
