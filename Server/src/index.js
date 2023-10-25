const http = require('http');
const PORT = 3001
const character = require("./utils/data");



http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const {url} = req;

if (url.includes("/rickandmorty/character")) {
  let urlArray = url.split("/")
  let id = Number(urlArray.pop())

  let foundCh = character.find((ch)=> ch.id === id)
  

  if (foundCh) {
  res.writeHead(200, {"Content-Type": "application/json"})
  res.end(JSON.stringify(foundCh))
  }else{
  res.writeHead(404, {"Content-Type": "application/json"})
  res.end(JSON.stringify({error: "error"}))
  }
}



})
.listen(PORT, "localhost");
  
 