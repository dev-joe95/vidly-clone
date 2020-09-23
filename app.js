const winston = require("winston");
const logError = require("./middleware/error");
const express = require("express");
const app = express();
require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/prod")(app);

app.use(express.json());
app.use(logError);
app.use(express.static("/public"));
app.disable("x-powered-by");

const port = process.env.PORT || "3030";
const server = app.listen(3030, () => {
    winston.info(`Your app is running on http://localhost:${port}`);
});

module.exports = server