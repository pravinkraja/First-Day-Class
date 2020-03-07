const express = require("express");// import
const cors = require("cors");// import cors
const app = express() // 

app.use(cors()); //enable cors

app.get('/features', function (req, res) {
   var features = [
    {
      name : "features 1",
      author: "pravin",
      time : Date.now(),
      
    },
  
   {
      name : "features 2",
      author: "yathu",
      time : Date.now(),
      
    },

     {
      name : "features 3",
      author: "pavith",
      time : Date.now(),
    }
  ];
  res.send(features);
});

app.post("/features", function(req, res){
  //save data to the server//
})
 
app.listen(3000, function(){
    console.log("Application is running on port 3000")
});

