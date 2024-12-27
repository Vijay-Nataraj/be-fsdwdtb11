//create a middleware for logging requests
const logger = (request, response, next) => {
  console.log(`Requeset URL: ${request.url}`);
  console.log(`Requeset method: ${request.method}`);
  console.log(`Requeset Header: ${JSON.stringify(request.headers)}`);
  console.log(`Requeset query: ${JSON.stringify(request.query)}`);
  console.log(`Requeset params: ${JSON.stringify(request.params)}`);
  console.log(`Requeset body: ${JSON.stringify(request.body)}`);
  console.log(`Requeset cookies: ${JSON.stringify(request.cookies)}`);
  console.log(`---------------------------`);

  next();
};

module.exports = logger;
