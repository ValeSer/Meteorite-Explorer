const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
  axios.get(`https://data.nasa.gov/resource/gh4g-9sfh.json?$where=lower(name) like lower('%25${req.query.searchTerm}%25')`)
    .then((response) => {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error.toJSON());
      res.sendStatus(500);
    });
});

app.listen(8080, () => {
  console.log('running');
})