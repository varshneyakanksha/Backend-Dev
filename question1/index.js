const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "Akanksha" },
  { id: 2, name: "Abhay" },
  { id: 3, name: "Riya" },
  { id: 4, name: "Shreya" }
];

app.get("/users", (req, res) => {
  const name = req.query.name;

  if (name) {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    return res.json(filteredUsers);
  }

  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});