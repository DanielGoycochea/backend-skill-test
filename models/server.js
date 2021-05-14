const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.middleware()
    this.routers()
  }

  middleware() {
    this.app.use(express.static('public'))
  }

  routers() {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on port", this.port);
    });
  }
}

module.exports = Server;