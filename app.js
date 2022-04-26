const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const mysql = require('mysql')

const path = require('path');

const port = process.env.PORT || 3000;

const db_config = {
  host: "us-cdbr-east-05.cleardb.net",
  user: "bc778fd640b8ba",
  password: "78a7b63d",
  database: "heroku_f62ce51aa2ee177"
};

const db=mysql.createPool({ connectionLimit: 5, ...db_config})


app.use(express.static(path.join(__dirname, "/build")));


app.get("/api/getList", (req, res) => {
  const insertQ = "SELECT * FROM heroku_f62ce51aa2ee177.contactform;";
  db.query(insertQ, (err, result) => {
    res.send(result);
  });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/insert", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const message = req.body.message;

  const sqlInsert =
    "INSERT INTO heroku_f62ce51aa2ee177.contactform(firstName, lastName, email, phoneNumber, message) VALUES (?,?,?,?,?)";
  db.query(
    sqlInsert,
    [firstName, lastName, email, phoneNumber, message],
    (err, result) => {
      console.log(result);
    }
  );
});


app.listen(port, (err) =>{
    if (err) return console.log(err);
    console.log('Server running on port:', port)
})










// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const mysql = require("mysql");

// const path = require("path");

// const port = process.env.PORT || 3000;

// mysql://b33dec1088e7e0:6cf06160@us-cdbr-east-05.cleardb.net/heroku_6b8ae48b51df0de?

// const db_config = {
//   host: "us-cdbr-east-05.cleardb.net",
//   user: "b33dec1088e7e0",
//   password: "6cf06160",
//   database: "heroku_6b8ae48b51df0de",
// };

// const db = mysql.createPool({connectionLimit: 5, ...db_config});

// app.use(express.static(path.join(__dirname, "/build")));

// app.get("/api/productList", (req, res) => {
//   const insertQ = "SELECT * FROM heroku_6b8ae48b51df0de.product_info;";
//   db.query(insertQ, (err, result) => {
//     res.send(result);
//   });
// });

// // app.get("/api/formList", (req, res) => {
// //   const insertQ = "SELECT * FROM heroku_6b8ae48b51df0de.form_info;";
// //   db.query(insertQ, (err, result) => {
// //     res.send(result);
// //   });
// // });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/build/index.html"));
// });

// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));

// // app.post("/api/formInsert", (req, res) => {
// //   const firstName = req.body.firstName;
// //   const lastName = req.body.lastName;
// //   const email = req.body.email;
// //   const phoneNumber = req.body.phoneNumber;
// //   const message = req.body.message;

// //   const sqlInsert =
// //     "INSERT INTO heroku_6b8ae48b51df0de.form_info(firstName, lastName, email, phoneNumber, message) VALUES (?,?,?,?,?)";
// //   db.query(
// //     sqlInsert,
// //     [firstName, lastName, email, phoneNumber, message],
// //     (err, result) => {
// //       console.log(result);
// //     }
// //   );
// // });

// app.listen(port, (err) => {
//   if (err) return console.log(err);
//   console.log("Server running on port:", port);
// });
