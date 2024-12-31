const jobController = {
  getJobs: (request, response) => {
    response.json({ Message: "GET" });
  },
  createJob: (request, response) => {
    response.json({ Message: "POST" });
  },
  getJobByID: (request, response) => {
    console.log(request.params.id);
    response.json({ Message: "GET by ID" });
  },
  searchJobs: (request, response) => {
    response.json({ message: "GET by search" });
  },
};

module.exports = jobController;
