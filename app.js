// import express module
const express = require("express");
const logger = require("./utils/logger");
const errorRoute = require("./utils/errorRoute");

//create a express app
const app = express();

//use the logger middleware
app.use(logger);

app.get("/", (request, response) => {
  response.json({ Message: "GET" });
});

//use the notFound middleware
app.use(errorRoute);

// export the app
module.exports = app;
