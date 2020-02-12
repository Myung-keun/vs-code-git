var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var mysql = require('mysql')

var connection = mysql.createConnection({
    host : "103.244.111.127",
    port: 3306,
    user: "energyx_sql_test",
    password : "energyx1!",
    database: "testDB"
})

connection.connect();

app.post('/test', function (req, res) {
    var userID = req.body.id
    var userPW = req.body.pw

    if (userID && userPW) {
        connection.query("INSERT INTO test ( userID, userPW) VALUES('" + userID + "', '" + userPW + "')",
            function (error, result, fields) {
                if (error) {
                    res.send('err : ' + error)
                }
                else {
                    console.log(userID + ',' + userPW)
                    res.send('success create user name: ' + userID + ' pw: ' + userPW)
                }
            })
        }
})

app.listen(1234, function(){
    console.log("server starting with 1234");
})