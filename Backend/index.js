const express = require("express");

const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`); 
});

app.get("/", (req, res) => {
  res.send("<h1>This is meant to be used for react native, yah!!!!!!</h2>");
});

// const mysql = require("mysql");

// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "ABC123@ ",
//   //   database: "",
// });

// con.connect((err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("was successful");
//   }
// });
