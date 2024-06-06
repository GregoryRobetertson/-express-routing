"use strict";

const express = require("express");
const app = express();
const PORT = 3001;
const router = require("./routes");
const usersRouter = require("./routes/users");

app.use(router);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("App listening on port ${PORT}");
});
