import express from "express";

const app = express();
const port = 4000;

app.get("/test",(req,res)=> {
    return res.json("Server Api OK");
});

app.get("/profiles",(req,res)=> {
    let data = {
        name: "john",
    age: 20
    }
    return res.json(data);
});


app.listen(port, ()=> {
    console.log(`Server Running port : ${port}`)
})
