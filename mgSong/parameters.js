var http = require('http');
var express = require('express');
/* bodyParser - POST �Ķ����� ���⿡ �ʿ�*/ 
var bodyParser = require('body-parser');
/*�������� GET�Ķ���� �м��� �ʿ�*/
var url = require('url');
/*��û�� ���� html �������� �о �����ϱ� ���� �ʿ�*/
var fs = require('fs');

var app = express();

/* bodyParser - POST �Ķ����� ���⿡ �ʿ� - Start */
//app.use(bodyParser()); // => (Info Error!) body-parser deprecated bodyParser: use individual json/urlencoded middlewares at express2.js
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* Express�� router ����� �޼ҵ� ������� ����ȴ�. */

//GET ��� ó�� - CASE1
app.get('/api/:version', function(req, res) { //�� : http://localhost:8080/api/12.5
  res.send(req.params.version); // ��� : 12.5
});

app.get('/getparam', function(req, res) {

	var parseObj = url.parse(req.url, true);
	var id = parseObj.query.id;
	var name = parseObj.query.name;
  
	console.log('id : "%s", name : "%s"', id, name);
    res.send('<h1>id:' + id + ', name:' + name + '</h1>');
});

//GET������� �α��� �������� �����ش�.
app.get('/login', function(req, res) {
	fs.readFile('login.html', function(error, data){
		res.send(data.toString());
	});
});

//�α��� ���������� POST������� ȣ���Ѵ�. 
//POST ó����� - CASE1
app.post('/login', function(req, res){
	//var login = req.param('userid'); <-- ����� ����
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

//GET, POST ��� ó�� - CASE2
app.use( function(req, res){
	var methodType = req.method;
	if( methodType == 'GET' ){
		//Exam1 - url �Ӽ��� �̿��� ��� ����
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
		 * POST ��� �Ķ���� ���
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