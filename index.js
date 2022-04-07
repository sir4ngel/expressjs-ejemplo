const PORT = 3000;
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.status = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('¡Hola mundo!');
// });

// server.listen(PORT, () => {
//     console.log('Servidor iniciado en el puerto: ' + PORT);
// });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola mundo!');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado en el puerto: ' + PORT);
});