var express=require('express');
var app=express();
var bp=require('body-parser');
var shortid=require('shortid');
var admin=require('firebase-admin');
const serviceAccount=require('./serviceaccountkey.json');
const port=2104;
app.use(bp.json());
app.use(express.static("static"));

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
});
const db=admin.firestore();
app.post("/create",(req,res)=>{
    var data=req.body.data;
    var key=shortid.generate();
    console.log(key);
    res.send({result:key});
    db.collection('docs').doc(key).set(data).then(()=>{
        console.log('post successfull');
    });
});

app.listen(port,()=>{
    console.log("running at 2104");
});