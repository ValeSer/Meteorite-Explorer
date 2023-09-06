const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
  axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then((response) => {
      res.send(response.data);
    })
});

app.listen(8080, () => {
  console.log('running');
})