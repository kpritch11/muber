const express = require('express');

const app = express();

app.get('/api', (request, response) => {
    response.send({ hi: 'there' });
});

module.exports = app;
