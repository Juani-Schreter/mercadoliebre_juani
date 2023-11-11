const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/views/login.html", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/views/register.html", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
