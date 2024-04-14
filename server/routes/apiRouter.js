const express = require("express");
const apiRouter = express.Router();

const token = process.env.TIMDB_TOKEN

apiRouter.get(`/person/:id/movies`, async (req, res) => {
  
  try {
    const apiResponse = await fetch(
      `https://api.themoviedb.org/3/person/${req.params.id}/movie_credits?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          AccessControlAllowOrigin: "*",
          AccessControlAllowCredentials: true,
          AccessControlAllowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
          AccessControlAllowHeaders: 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
          Authorization:
            token
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
      `https://api.themoviedb.org/3/search/person?query=${req.params.person}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          AccessControlAllowOrigin: "*",
          AccessControlAllowCredentials: true,
          AccessControlAllowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
          AccessControlAllowHeaders: 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json',
          Authorization:
            token
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
