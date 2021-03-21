const server = require("./api/server");

const port = 4000;

server.listen(port, () => {
  console.log(`planet express http://localhost:${port}`);
});
