const express = require('express');
const cors = require('cors');
const popsController = require('./controllers/pops.controller');

const app = express();
app.use(cors());

app.route('/pops')
  .get(popsController.getPops);

const port = 4000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
