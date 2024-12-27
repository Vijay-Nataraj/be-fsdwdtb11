// import http module to setup http server
const http = require("http");

//create a server object
const server = http.createServer((request, response) => {
  //set the response header and  the response body

  //for plain text
  // response.writeHead(200, { "content-type": "text/plain" });
  // response.end("Hello world\n");

  //for html
  // response.writeHead(200, { "content-type": "text/html" });
  // response.end("<h1>Hello World</h1>");

  //for json
  response.writeHead(200, { "content-type": "Application/json" });
  response.end(JSON.stringify({ message: "Hello World" }));
});

// listen to the server on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
