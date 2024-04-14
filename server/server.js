const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")

const __dirname = path.dirname("");
const buildPath = path.join(__dirname, "../client/build")

app.use(express.json(buildPath));
app.use(cors());

app.get("/*", function (req, res) {
  res.sendFile(
    path.join(__dirname, "../client/build/index.html"),
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
