
const express = require('express');
const app = express();
const PORT = 3001;
const router = require("./routes/index")

const cors = require('cors')
const bodyParser = require('body-parser')
const { conn } = require('./DB_connection');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()); 
app.use(cors())
app.use('/',router)


app.listen(PORT, () => {
   console.log('Server is running on port ' + PORT);
});