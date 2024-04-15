const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en https://first-server-dev-njrm.3.us-1.fl0.io/ puerto:${port}`);
});
