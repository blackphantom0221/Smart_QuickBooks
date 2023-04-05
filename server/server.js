const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

//Setup these environment variables!
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    app.get("/", (req, res) => {
      res.send("Error connecting to database");
    });
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/input", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const emailAddress = req.body.emailAddress;

  db.query(
    "INSERT INTO phonebook (firstName, lastName, phoneNumber , emailAddress) VALUES (?,?,?,?)",
    [firstName, lastName, phoneNumber, emailAddress],
    (err, result) => {
      if (err) console.log(err);
      else res.send("Values Inserted");
    }
  );
});

app.get("/view", (req, res) => {
  db.query("SELECT * FROM phonebook", (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error connecting to database.");
    } else res.send(result);
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phoneNumber = req.body.phoneNumber;
  const emailAddress = req.body.emailAddress;
  db.query(
    "UPDATE phonebook SET firstName = ? , lastName = ? , phoneNumber = ? , emailAddress = ? where id = ?",
    [firstName, lastName, phoneNumber, emailAddress, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error connecting to database.");
      } else res.send(result);
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM phonebook WHERE id = ?", id, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.delete("/deleteAll", (req, res) => {
  db.query("truncate phonebook", (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error connecting to database.");
    } else res.send(result);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
