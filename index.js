//a file or a server that listens to the request of the client.

var express = require('express'); //require==require module (in this case, express module)
var app = express(); //app --- instance of the express

/*app.get('/',function(req,res){
       res.send('Hello World!');
});

app.get('/students',function(req,res){ //can be accessed in localhost:5000/students
       res.send('Hello Pizza!');
});*/



app.use(require('body-parser')()); //used to accept inputs from the USER
app.use(require('method-override')()); //enables the HTTP Methods: PUT and DELETE methods
app.use(require(__dirname+'/config/router')(express.Router())); //__dirname -- denotes the location of the app you're running
app.use(express.static(__dirname+'/public')); //connect to HTML5


var server = app.listen(5000,function(){ //listen method -- listens to the local host with port number 5000
       var host = server.address().address;
       var port = server.address().port;
       console.log('Example app listening at http://%s:%s',host,port); //
});   