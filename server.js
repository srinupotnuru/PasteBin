var express = require("express");
var app = express();
var bp = require("body-parser");
var shortid = require("shortid");
var admin = require("firebase-admin");
const serviceAccount = require("./serviceaccountkey.json");
const port = 2104;
app.use(bp.json());
app.use(express.static("./static"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
app.post("/find", (req, res) => {
   // console.log(req.body.id);
  db.collection("docs")
    .doc(req.body.id)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        res.send(`404 error`);
      } else {
          console.log(doc.data());
        res.send({res:doc.data()});
      }
    })
    .catch((err) => {
      res.send(` <html>
                      <body>
                        <h1>404 error!<h1>
                     </body>global.
                   </html>`);
    });
});
app.post("/create", (req, res) => {
  var data = req.body.data;
  var key = shortid.generate();
  res.send({ result: key });
  db.collection("docs")
    .doc(key)
    .set(data)
    .then(() => {
      console.log("post successfull");
    });
});


app.post("/getdocs",(req,res)=>{
  db.collection('docs').get().then(querySnapshot =>{
    const docs=querySnapshot.docs.map(doc=>doc.data());
    console.log(docs);
    res.send({res:docs});
  })
});

app.listen(port, () => {
  console.log("running at 2104");
});
