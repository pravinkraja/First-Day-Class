const express = require("express");// import
const cors = require("cors");// import cors
const monk = require("monk");
const app = express() // 

app.use(express.json());

app.use(cors()); //enable cors

const db = monk("localhost/humandb");
const dbfeatures = db.get("features"); /* from db collections (table) */

app.get('/features', async function (req, res) {
  var allfeaturesIndb = await dbfeatures.find();
  allfeaturesIndb.every(f=> (f.time = timeAgo(f.time)));
  res.send(allfeaturesIndb);

});

app.post("/features", function(req, res){
        console.log(log.body.name);
        console.log(log.body.feature);
        var newfeaturesToAdd = {
          body:req.body.features,
          author:req.body.name,
          time:DataCue.now()
        };

        await dbfeatures.insert(newfeaturesToAdd);
        res.send("Successful");  
});
 
app.listen(3000, function(){
    console.log("Application is running on port 3000")
});

