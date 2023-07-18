const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting Down...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" }); // load the config.env file first

const app = require("./app");

/*
    Start the Server
*/
const port = process.env.PORT || 8000;
const server = app.listen(port, function () {
  console.log("Server started on port: " + port);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLER REJECTION! Shutting Down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
