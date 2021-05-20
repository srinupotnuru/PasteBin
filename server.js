var express=require('express');
var app=express();
var bp=require('body-parser');
var shortid=require('shortid');
const port=2104;
app.use(bp.json());
app.use(express.static("static"));



app.post("/create",(req,res)=>{
    console.log(req.body.data);
});

app.listen(port,()=>{
    console.log("running at 2104");
});