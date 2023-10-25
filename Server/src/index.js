const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

  });
  
  server.listen(3001, () => {
    console.log('Servidor en ejecución en el puerto 3001');
  });
  
