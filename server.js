const express = require("express");
const connectDB =  require("./config/db");


const app = express();

app.get("/api",(req,res) =>{
    res.send('Hello guys!!!');
});



app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})