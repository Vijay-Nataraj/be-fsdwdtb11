// import express module
const express = require("express");
const logger = require("./utils/logger");
const errorRoute = require("./utils/errorRoute");
//const morgan = require("morgan");

//create a express app
const app = express();

//use the logger middleware
app.use(logger);
//app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.json({ Message: "GET" });
});

app.post("/", (request, response) => {
  response.json({ Message: "POST" });
});

app.put("/", (request, response) => {
  response.json({ Message: "PUT" });
});

app.patch("/", (request, response) => {
  response.json({ Message: "PATCH" });
});

app.delete("/", (request, response) => {
  response.json({ Message: "DELETE" });
});

//use the notFound middleware
app.use(errorRoute);

// export the app
module.exports = app;
