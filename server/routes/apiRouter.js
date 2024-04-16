const express = require("express");
const apiRouter = express.Router();

const apiKey = "f395f6fa4d3341c013cac38bed5813ec";

apiRouter.get(`/person/:id/movies`, async (req, res) => {
  
  try {
    const apiResponse = await fetch(
      `https://api.themoviedb.org/3/person/${req.params.id}/movie_credits?language=en-US&api_key=${apiKey}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          AccessControlAllowOrigin: "*",
          AccessControlAllowCredentials: true,
          AccessControlAllowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
          AccessControlAllowHeaders: 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
        },
      }
    );
    const apiResponseJson = await apiResponse.json();
    res.send(apiResponseJson);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

apiRouter.get(`/person/:person`, async (req, res) => {
  try {
    const apiResponse = await fetch(
      `https://api.themoviedb.org/3/search/person?query=${req.params.person}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          AccessControlAllowOrigin: "*",
          AccessControlAllowCredentials: true,
          AccessControlAllowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
          AccessControlAllowHeaders: 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
        },
      }
    );
    const apiResponseJson = await apiResponse.json();
    console.log(apiResponseJson);
    res.send(apiResponseJson);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});



module.exports = apiRouter;
