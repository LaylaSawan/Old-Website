const express = require('express');

const app = express(); 

var sql = require('mysql'); 
var cors = require('cors')

app.use(cors())

var con = sql.createConnection({
    host: "composting.chsfz35kckgj.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "Ilovedad100",
    port: "3306",
    database: "info"
})

con.connect();

app.get('/sensor', (request, response) =>{
    con.query("SELECT * " + 
              "FROM Sensor " +
              "ORDER BY recorded DESC " +
              "LIMIT 1", function (err, result) {
        if (err) throw err;
        console.log(result);
        response.send(result[0]);  
      });
})

app.listen(3000, function () { 
    console.log('The mini API is listening on port 3000'); 
}); 

