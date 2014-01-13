//
///**
// * Module dependencies.
// */
//
//var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
//var http = require('http');
//var path = require('path');
//var first = require('./xgq/first');
//var read = require('./xgq/read');
//var mysql = require('mysql'); //数据库
//var os = require('os'); //系统相关
//var coffee = require('coffee-script'); //系统相关
//
//var app = express();
//
//// all environments
//app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');//设置引擎类型 还能设置 html
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(express.cookieParser('your secret here'));
//app.use(express.session());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));
//
//// development only
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}
//
//app.get('/', routes.index);
//app.get('/users', user.list);
//
//app.get('/xgq/sayHello', first.sayHello);
//app.get('/xgq/firstPage', first.firstPage);
//app.get('/xgq/read', read.read);
//
//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});
//
//var conn = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'root',
//    database:'runsn',
//    port: 3306
//});
//conn.connect();
//conn.query('SELECT * FROM productclass', function(err, rows, fields) {
//    if (err) throw err;
//    console.log('The solution is: ', rows[0].className);
//    console.log('The solution is: ', os.cpus().length); //输出系统的CPU的核心数
//});
//conn.end();

require('coffee-script');
require('./app.coffee');
