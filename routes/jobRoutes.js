// import express library
const express = require("express");
const jobController = require("../controllers/jobController");

//Create a express router
const jobRouter = express.Router();

jobRouter.get("/", jobController.getJobs);
jobRouter.post("/", jobController.createJob);
jobRouter.get("/:id", jobController.getJobByID);
jobRouter.get("/search", jobController.searchJobs);

module.exports = jobRouter;
