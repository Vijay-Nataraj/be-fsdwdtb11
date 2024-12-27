// import express module
const express = require("express");

//create a express app
const app = express();

//create a middleware
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

//use the logger middleware
app.use(logger);

app.get("/", (request, response) => {
  response.json({ Message: "GET" });
});

//middleware for handling 404 errors
const notFound = (request, respone, next) => {
  respone.json({ message: "Route not Found" });
};

//use the notFound middleware
app.use(notFound);

app.listen(3000, () => {
  console.log("Server is running on http://127.0.0.1:3000");
});

// //import http module to setup http server
// const server = http.createServer((request, response) => {
//   //set the response header and  the response body
//   //for plain text
//   // response.writeHead(200, { "content-type": "text/plain" });
//   // response.end("Hello world\n");
//   //for html
//   // response.writeHead(200, { "content-type": "text/html" });
//   // response.end("<h1>Hello World</h1>");
//   //for json
//   // response.writeHead(200, { "content-type": "Application/json" });
//   // response.end(JSON.stringify({ message: "Hello World" }));

//   response.writeHead(200, { "content-type": "Application/json" });
//   if (request.url === "/posts") {
//     //endpoints for posts
//     if (request.method === "GET") {
//       response.write(JSON.stringify({ Message: "GET POSTS" }));
//     } else if (request.method === "POST") {
//       response.write(JSON.stringify({ Message: "POST POSTS" }));
//     }
//   } else if (request.url === "/comments") {
//     //endpoints for comments
//     if (request.method === "GET") {
//       response.write(JSON.stringify({ Message: "Comments POSTS" }));
//     } else if (request.method === "POST") {
//       response.write(JSON.stringify({ Message: "Comments POSTS" }));
//     }
//     response.write(JSON.stringify({ Message: "Comments" }));
//   }
//   response.end();
// });

// // listen to the server on port 3000
// server.listen(3000, "127.0.0.1", () => {
//   console.log("Server is running on http://127.0.0.1:3000");
// });
