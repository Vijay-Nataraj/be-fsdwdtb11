// import express module
const express = require("express");
const logger = require("./utils/logger");
const errorRoute = require("./utils/errorRoute");
const jobRouter = require("./routes/jobRoutes");
//const morgan = require("morgan");

//create a express app
const app = express();

//use the express json middleware
app.use(express.json());

//use the logger middleware
app.use(logger);
//app.use(morgan("dev"));

// Mount the router after middleware
app.use("/jobs", jobRouter);

//use the notFound middleware
app.use(errorRoute);

// export the app
module.exports = app;
