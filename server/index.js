const express = require("express");

const app = express();

const port = 3030;

app.get("/", (req, res) => {
  res.send("Foo Bar");
});

app.listen(port, () => console.log(`server listening on port ${port}`));
