const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event); //posts
  axios.post("http://localhost:4001/events", event); //coments
  axios.post("http://localhost:4002/events", event); //query service
  axios.post("http://localhost:4003/events", event); //moderation service

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("listening on port 4005");
});
