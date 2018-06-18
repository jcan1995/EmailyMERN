//Import using CommonJS modules, NOT ES2015 modules.
const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
