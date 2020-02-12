var http = require('http');
var express = require('express');
/* bodyParser - POST 파라이터 추출에 필요*/ 
var bodyParser = require('body-parser');
/*전통방식의 GET파라미터 분석에 필요*/
var url = require('url');
/*요청에 따라 html 페이지를 읽어서 서비스하기 위해 필요*/
var fs = require('fs');

var app = express();

/* bodyParser - POST 파라이터 추출에 필요 - Start */
//app.use(bodyParser()); // => (Info Error!) body-parser deprecated bodyParser: use individual json/urlencoded middlewares at express2.js
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* Express의 router 기능은 메소드 순서대로 적용된다. */

//GET 방식 처리 - CASE1
app.get('/api/:version', function(req, res) { //예 : http://localhost:8080/api/12.5
  res.send(req.params.version); // 결과 : 12.5
});

app.get('/getparam', function(req, res) {

	var parseObj = url.parse(req.url, true);
	var id = parseObj.query.id;
	var name = parseObj.query.name;
  
	console.log('id : "%s", name : "%s"', id, name);
    res.send('<h1>id:' + id + ', name:' + name + '</h1>');
});

//GET방식으로 로그인 페이지를 보여준다.
app.get('/login', function(req, res) {
	fs.readFile('login.html', function(error, data){
		res.send(data.toString());
	});
});

//로그인 페이지에서 POST방식으로 호출한다. 
//POST 처리방식 - CASE1
app.post('/login', function(req, res){
	//var login = req.param('userid'); <-- 사라진 문법
	var userid = req.body.userid;
	var passwd = req.body.passwd;
	
	console.log(userid, passwd);
	console.log(req.body);
	
	if( userid === 'hyoun1202' && passwd === 'hg741202'){
		res.send('<h1>Login Success</h1>');
	}else{
		res.redirect('/login');
	}
});

//GET, POST 방식 처리 - CASE2
app.use( function(req, res){
	var methodType = req.method;
	if( methodType == 'GET' ){
		//Exam1 - url 속성을 이용한 경로 구분
		var pathname = url.parse( req.url ).pathname;
		if( pathname == '/' ){
			fs.readFile('./index.html', function(error, data){
				res.status(200).send(data);
			});
		}else if( pathname == '/otherpage' ){
			fs.readFile('./otherpage.html', function(error, data){
				res.status(200).send(data);			
			});
		}else if( pathname == '/postpage' ){
			fs.readFile('./postpage.html', function(error, data){
				res.status(200).send(data);
			});
		}
	}else if( methodType == 'POST' ){
		/**
		 * POST 방식 파라미터 얻기
		 */
		var deptName = req.body.deptName;
		var empList = req.body.empList;
		console.log('deptName : "%s", empList : "%s"', deptName, empList);
		
		res.send('<h1>deptName:' + deptName + ', empList:' + empList + '</h1>');
	}
});

/*
app.all( '*', function(req, res){
	res.send(404, 'Error By Hwang');
});
*/

http.createServer(app).listen(8000, function(){
	console.log('Server Running at http://localhost:8000');
});