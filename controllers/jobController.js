const jobController = {
  getJobs: (request, response) => {
    response.json({ Message: "GET" });
  },
  createJob: (request, response) => {
    response.json({ Message: "POST" });
  },
};

module.exports = jobController;
