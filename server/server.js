const express = require ("express");
const app = express();

app.get("/api",(req,res) =>{
    res.json({
        "hello world" : ["i am smita"]
    });
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})