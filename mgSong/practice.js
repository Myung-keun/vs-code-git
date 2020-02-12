var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

//db에 연결
var mySqlClient = mysql.createConnection({
    host : "103.244.111.127",
    port: 3306,
    user: "energyx_sql_test",
    password : "energyx1!",
    database: "testDB"
});
mySqlClient.connect((err) => {
    if (!err){console.log('DB connection success');}
    else{console.log('DB connection failed /n Error : ' + JSON.stringify(err, undefined, 2))}
})

//Express 웹서버 생성 및 실행
var app = express();
http.createServer(app).listen(3000,function(){
    console.log('Server running at http://localhost:3000');
});

//http://localhost:8000으로 접속하면 list.html을 보여줌
app.get('/',function(req, res) {
    fs.readFile('list.html','utf-8', function(error, data) {
        if(error){console.log('readFile Error')}
        else{
            mySqlClient.query('select * from Restaurant', function(error, results){
                if(error){console.log('error: ', error.message)}
                else
                {res.send(ejs.render(data, {
                    resList: results
                }))}
            })
        }
    })
})

//http://localhost:8000/delete/3 을 호출하면 id=3 인 row가 삭제
app.get('/delete/:id', function(req, res){
    mySqlClient.query('delete from testDB.Restaurant where id = ?', [req.params.id],
    function(error, result){
        if(error){console.log('delete Error');}
        else{
            console.log('delete id = %d', req.params.id);
            res.redirect('/'); //메인화면으로 이동 (삭제여부 확인)
    }
    });
});

//http://localhost:8000/insert 로 접속하면 insert.html을 보여줌.
app.get('/insert', function(req, res){
    fs.readFile('insert.html', 'utf8', function(error, data){
        if(error){console.log('readFile Error');}
        else{res.send(data);}
    });
});

//http://localhost:8000/edit/3 을 호출하면 id=3인 row에 대한 편집화면(edit.html)이 열린다
app.get('/edit/:id', function(req, res){
    fs.readFile('edit.html', 'utf-8', function(error, data){
        mySqlClient.query('select * from restaurant where id = ?', [req.params.id],
        function(error, result){
            if(error){console.log('readFile Error');}
            else{
                res.send(ejs.render(data, {
                    product: result[0]
                }));
            }
        });
    });
});

//POST 방식으로 전달되는 파라미터 처리를 위해 필요
app.use(bodyParser.urlencoded({extended: true}));

app.post('/insert', function(req, res){
    var body = req.body;

    mySqlClient.query('insert into restaurant(id, name, location, leadtime, menu) values(?,?,?,?,?)',
    [body.uuid, body.name, body.location, body.leadtime, body.menu],
    function(error, result){
        if(error){console.log('inisert error: ', error.message);}
        else{res.redirect('/');}
    });
});