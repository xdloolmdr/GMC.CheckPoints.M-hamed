console.log("Hellow_Node");
const express = require("express");
const fs = require("fs");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const PORT = 3000;
const app = express();
app.listen(PORT, () => {
  console.log(`the server is running on port${PORT}`);
  console.log(`server is running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("<h1>Hello Node!!!!</h1>");
});
fs.open("welcome.txt", function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("Hello Node");
});
const generator = require("generate-password");

const password = generator.generate({
  length: 10,
  numbers: true,
});


console.log(password);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
const mailOptions = {
  from: process.env.EMAIL,
  to: "raid.mefti@hotmail.com",
  subject: "Sending Email using Node.js",
  text: "raid is a noob!",
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
