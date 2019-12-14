const routes = {
};

module.exports = app => Object.keys(routes).forEach(route => {
  app.use(`/api/${route}`, routes[route]);
});
