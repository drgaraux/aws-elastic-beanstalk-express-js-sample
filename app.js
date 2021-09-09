const express = require('express');
const app = express();
const port = 1010;

app.get('/', (req, res) => res.send('Message Sent!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
