const express = require("express");
const apiRouter = express.Router();

const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk1ZjZmYTRkMzM0MWMwMTNjYWMzOGJlZDU4MTNlYyIsInN1YiI6IjY2MDk3OTQ3ZDUxOTFmMDE2NDMwZjZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w_16c7kn7iktXw9Q463xYGyc1YdCZo85GLBIqAZGrsY";

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
