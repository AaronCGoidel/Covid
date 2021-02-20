const bodyParser = require("body-parser");
const express = require("express");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// Id: [Name, Postal code]
const users = {
  1: ["Michael", "L3M5M1"],
  2: ["Rehmat", "L2M5M1"],
  3: ["Ethan", "L3M5E1"],
  4: ["Aaron", "L3M5H1"],
};

// Id, Name, Address, Postal Code, Image Path
const centres = {
  1: [
    "75 Centennial Parkway North - Shoppers Drug Mart",
    "75 Centennial Parkway North",
    "L8E 2P2",
    "Images/shoppers.png",
  ],
  2: [
    "St. Joseph's Healthcare Hamilton - East End",
    "2757 King Street East",
    "L8G 5E4",
    "Images/joseph.png",
  ],
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  response.status(200).json(users[id]);
};

const getTestingCentreById = (request, response) => {
  const id = parseInt(request.params.id);

  response.status(200).json(centres[id]);
};

const createUser = (request, response) => {
  console.log("The request body is", request.body);
  const { name, code, id } = request.body;

  users[id] = [name, code];
  response.status(201).send(`User added with ID: ${id}`);
};

const getUsers = (request, response) => {
  response.status(201).json(users);
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, code } = request.body;

  users[id] = [name, code];
  response.status(200).send(`User modified with ID: ${id}`);
};

const getNews = (request, response) => {
  const code = request.params.code;
  const SerpApi = require('google-search-results-nodejs');
  const search = new SerpApi.GoogleSearch("2267c522ba5c5fb8221ae97d08e017fe62df21ee1fc3370baec9bbb4bd846bf3");
  
  const params = {
    q: "COVID " + code, 
    tbm: "nws",
    location: "Canada"
  }

  const callback = function(data) {
    response.status(200).send(data['news_results']);
  }

  search.json(params, callback);

}

app.get("/cases/:radius", (req, res) => {
  res.send(data);
});

app.get("/centres/:id", getTestingCentreById);
app.get("/users/:id", getUserById);
app.post("/users/", createUser);
app.get("/users", getUsers);
app.put("/users/:id", updateUser);
app.get("/news/", getNews);
app.listen(port, () => console.log(`server listening on port ${port}`));
