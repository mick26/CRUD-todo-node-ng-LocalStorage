/*=========================================================
Michael Cullen
Todo CRUD - Express 4 / Angular / HTML5 Local Storage
server.js

May 2014
Working - (Tá se ag obair)
============================================================*/

/* ========================================================== 
External Modules/Packages Required
============================================================ */
var express  = require('express');						//Express v4.2 Web server
var logger   = require('morgan');						//logger middleware
var colours  = require('colors');						

/* ========================================================== 
Port the server will listen on
============================================================ */
var port = process.env.PORT || 3080; 					//set the port

/* ========================================================== 
Create a new application with Express
============================================================ */
var app = express(); 		


/* ========================================================== 
serve the static index.html from the public folder
============================================================ */
app.use(express.static(__dirname + '/public')); 

/* ========================================================== 
Use Middleware
============================================================ */
app.use(logger('dev')); 	//log every request to the console

/* ========================================================== 
Bind to a port and listen for connections on it 
============================================================ */
var server = app.listen(port, function() {
	console.log('Listening on port %d' .green, server.address().port);
});


