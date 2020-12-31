var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://milahn:Benjie2302@fingerprint-cluster.dt8fn.mongodb.net/players?retryWrites=true&w=majority";


function insertNew(){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("players");
    var myobj =  {};
  ;
    dbo.collection("players").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

function findP(){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("players");
    dbo.collection("players").findOne({"user":"KAREEM"}, function(err, result) {
      if (err) throw err;
      console.log(result.social_mediax1);
      db.close();
    });
  });
}


findP();