const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();

require("./config/database");

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("method-override")("_method"));

/*--- For use with personal DB. Uncomment when ready ---*/
// app.use("/api/yocal", require("./routes/api"));

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
