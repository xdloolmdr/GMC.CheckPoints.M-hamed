console.log("Hellow_Node");
const express =require('express');
const fs = require('fs')

const PORT = 3000;
const app = express()
app.listen(PORT,()=>{
    console.log(`the server is running on port${PORT}`);
    console.log(`server is running on http://localhost:${PORT}`);
})
app.get('/', (req, res) => {
    res.send('<h1>Hello Node!!!!</h1>')
});