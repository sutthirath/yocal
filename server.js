require("dotenv").config();
const express = require("express");
const path = require("path");
const bp = require("body-parser");
const mongoose = require("mongoose");
const expressJWT = require("express-jwt");
const auth = require("./routes/auth");
const locked = require("./routes/locked");
const chatHistory = require("./routes/chatHistory");
const RateLimit = require("express-rate-limit");
const favicon = require("serve-favicon");
const logger = require("morgan");
let socket = require("socket.io");

const app = express();

require("./config/database");
server = app.listen(8080, function() {
  console.log("server is running on port 8080");
});

// socket.io for real-time chat
io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/jwtAuth");

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require("method-override")("_method"));

// app.use("/api/yocal", require("./routes/api"));

var loginLimiter = new RateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5,
  delayMs: 0, // disabled
  message: "Maximum login attempts exceeded. Please try again later."
});

var signupLimiter = new RateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 5,
  delayMs: 0, // disabled
  message: "Maximum accounts created. Please try again later."
});

app.use("/auth/login", loginLimiter);
app.use("/auth/signup", signupLimiter);

app.use("/chat_history", chatHistory);

app.use("/auth", auth);
// This line uses the express-jwt node module to protect the routes
app.use(
  "/locked",
  expressJWT({ secret: process.env.JWT_SECRET }).unless({ method: "POST" }),
  locked
);

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
