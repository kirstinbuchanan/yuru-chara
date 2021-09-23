const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 4000;

const router = require('./router');

app.use(cors()).use(express.json()).use(router);

app.listen(PORT, () => {
  console.log(`Listening on PORT 4000`);
});
