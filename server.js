'use strict';

let url = "mongodb://3.142.150.255:27017";
/*
let MongoClient = require('mongodb').MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
*/
const express = require('express');

//mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb



// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

    //let url = "mongodb://3.143.224.212:27017/";
   

    var MongoClient = require('mongodb').MongoClient;
    

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("DataBase");
      dbo.collection("settings").findOne({}, function(err, result) {
        if (err) throw err;

        let valueFromMongo = result.StringValue;

        let displayString = valueFromMongo;
        res.send(displayString);

        db.close();
      });
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
