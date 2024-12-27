//middleware for handling 404 errors
const errorRoute = (request, respone, next) => {
  respone.json({ message: "Route not Found" });

  next();
};

module.exports = errorRoute;
