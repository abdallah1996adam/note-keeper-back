const Server = (http, middleWares, routes) => {
  const app = http();
  const initializeMiddlewares = (middleWares) => {
    for (const key in middleWares) {
      const mware = middleWares[key];
      app.use(mware);
    }
  };
  const initializeAppRouter = (routes) => {
    app.use(routes);
  };
  initializeAppRouter(routes);
  initializeMiddlewares(middleWares);
  return {
    listen: (port) => {
      app.listen(port, async () => {
        console.log(`server is running on port ${port}`);
      });
    },
  };
};

module.exports = Server;
