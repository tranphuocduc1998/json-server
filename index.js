const jsonServer = require('json-server');
const router = jsonServer.router('db.json');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
 
server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running')
});