const express = require('express');// expess is used to create a mini api

const api = express();// this line cerates the api

var sql = require('mysql'); // grabbing the mysql library (functions and variables) and saving it into the variable sql 
var cors = require('cors');// its helps you filter and manipulate the data

api.use(cors())
//is preparing the sql connection
var con = sql.createConnection({
    host: "composting.chsfz35kckgj.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Ilovedad100",
    port: "3306",
    database: "info"
})

con.connect();

api.get('/sensor', (request, response) =>{  //it is creating an event; when im making a GET request on localhost:3000/sensor
    con.query("SELECT * " +// * means select all the columns 
              "FROM Sensor " + // this is from the table sensor
              "ORDER BY recorded DESC " + // it is ordering by the datetime DESC means that we should get the latest data
              "LIMIT 1", function (err, result) { // LIMIT 1 means that their should only be one reading
        if (err) throw err; // if their is an error, abort the code 
        console.log(result); // printing the result on the server side
        response.send(result[0]);// it is sending the result  
      });
})

api.listen(3000, function () { // it is starting the api on port 3000
    console.log('The mini API is listening on port 3000'); 
}); 

