import express from "express";

const app = express();
const PORT = 8080;
console.log("debug port");

app.get("/", (req, res) => {
  res.send("This is Home Page");
});

app.get("/product", (req, res) => {
  res.send("This is Product Page");
});

app.get("/order", (req, res) => {
  res.send("This is order Page");
});

