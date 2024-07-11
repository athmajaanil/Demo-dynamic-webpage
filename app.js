const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.status(200).send('Landing page');
});
app.get("/about",(req,res)=>{
    res.status(200).send('About page');
});

const port=8000;
app.listen(port,()=>{
    console.log(`site is running on port http:127.0.0.1:${port}`)
       
});
