const server = require("./api/server");

const port = 3000;

server.listen(port, () => {
  console.log(`custom express http://localhost:${port}`);
});
