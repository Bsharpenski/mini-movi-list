const express = require('express');
const app = express();
const port = 3001;

const knex = require('knex')(require('./knexfile.js')["development"])

const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('App is running!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

//---------------------------GETS---------------------------//
app.get('/movies', (req, res) => {
  knex('movies')
      .select('*')
      .then(data => res.json(data))
})