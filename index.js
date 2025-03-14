const express = require("express");
const app = express();
const port = 3000;

app.get("/thuc-hanh", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  return res.send("Hello TRUNG KIEN!");
});

// localhost:127.0.0.1

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
