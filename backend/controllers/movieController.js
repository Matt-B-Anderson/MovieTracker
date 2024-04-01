const fetch = require("node-fetch");

const getMovie = (req, res) => {
  const url = "https://api.themoviedb.org/3/movie/350/images";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk1ZjZmYTRkMzM0MWMwMTNjYWMzOGJlZDU4MTNlYyIsInN1YiI6IjY2MDk3OTQ3ZDUxOTFmMDE2NDMwZjZhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w_16c7kn7iktXw9Q463xYGyc1YdCZo85GLBIqAZGrsY",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err))
    .pipe(res);
};

module.exports = {
  getMovie,
};
