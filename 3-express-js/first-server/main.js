const express = require("express");
const app = express();
PORT = 4242;
let popularCars = ["AudiS3", "A45", "tesla", "cupra", "avio", "clio4"];
let fast = ["lambo", "supra", "RS6", "fiesta", "maruti"];
let trucks = ["ram1500", "f150", "amarock", "tesla", "GMC"];

app.get("/", (req, res, next) => {
  res.send(`
        <p>welcome to our website, you are in ${req.url}</p>
        <a href="/about-us">About-us</a>
        <a href="/Popular">Popular</a>
        <a href="/fast">fast</a>
        <a href="/trucks">trucks</a>
        `);
});
app.get("/about-us", (req, res) => {
  res.send("this Website is off-service comeback later please");
});
app.get("/popular", (req, res) => {
  res.send(`this is the list of our popular cars ${popularCars.join(" > ")}`);
});
app.get("/fast", (req, res) => {
  res.send(`this is the list of our fast cars${fast.join(" , ")}`);
});
app.get("/trucks", (req, res) => {
  res.send(`this is the list of our trucks cars${trucks.join(" :) ")}`);
});
app.listen(PORT, () => {
  console.log(`server started on port${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
