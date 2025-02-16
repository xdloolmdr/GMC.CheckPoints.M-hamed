const express = require("express");
const app = express('');
const PORT = 3000;
app.get("/Home", (req, res) => {
    res.send(`
          <p>welcome to our website</p>
          <a href="/ContactUS">Contact-Us</a>
          <a href="/Home">Home</a>
          <a href="/aboutUS">aboutUS</a>
          `);
  });
 
    app.get("/ContactUS", (req, res) => {
    res.send("for now no contacts on this server");
  });
  app.get("/aboutUS", (req, res) => {
	res.send("<h1>just a checkpoint of express</h2>");
});
  app.get("*", (req, res) => {
	res.send("not - found");
});
app.listen(PORT,()=>{
    console.log(`server is running on PORT${PORT}`);
    console.log(`http://localhost:${PORT}`);
})
