const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/*", function (req, res) {
  res.sendFile("../client/build/index.html",
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  )
});

app.use("/api", require("./routes/apiRouter"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on local port ${PORT}`);
});
