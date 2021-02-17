const express = require("express");

const app = express();

const port = 3030;

const data = [
  {
    name: "Monday",
    cases: 90,
  },
  {
    name: "Tuesday",
    cases: 80,
  },
  {
    name: "Wednesday",
    cases: 10,
  },
  {
    name: "Thursday",
    cases: 50,
  },
  {
    name: "Friday",
    cases: 70,
  },
];

app.get("/", (req, res) => {
  res.send(data);
});


app.listen(port, () => console.log(`server listening on port ${port}`));
