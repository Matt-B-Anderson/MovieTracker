const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const _dirname = path.dirname("")
const buildpath = path.join(_dirname, "../client/build")

app.use(express.static(buildpath));
app.use(cors({origin: "https://whispering-river-63219-930143222181.herokuapp.com/", credentials: true}));

app.use("/api", require("./routes/apiRouter"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  )
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on local port ${PORT}`);
});
