var db = require (__dirname + '/../lib/mysql');

exports.find = function(req,res,next){ //function to FIND ALL STUDENTS
    
    console.log(req.ip + "find()"); //requests the ip address of the request
    
    db.query("SELECT * FROM student", function (err,rows){ //
        if(err) return next(err); // skip all route handlers and return an error statement
        res.send(rows); //else, we'll send the rows in the query (ARRAY OF JSON ELEMENTS)
});
};


exports.findOne = function (req,res,next) {
    
    console.log(req.ip + "find()");

    db.query("SELECT * FROM student WHERE id=?", [req.params.id],
    function (err,rows){
        if(err) return next(err);
        if(rows.length===0){
            res.status(404).send('Student not found');
        } else {
        res.send(rows[0]);
        }
    });
};

exports.insert = function(req,res,next){


    console.log(req.body);

    db.query("INSERT INTO student(studno,name) VALUES(?,?)",
    [req.body.studno,req.body.name],
    function(err,rows){
        if (err) return next(err);
        res.send(rows);
    });
};


exports.update = function(req,res,next){
    
    console.log(req.ip + "find()");

    db.query("UPDATE student SET ? WHERE id=?",
    [req.body,req.params.id],
    function(err,rows){
        if (err) return next(err);
        res.send(rows);
    });
};
    
exports.remove = function(req,res,next){

    console.log(req.ip + "find()");

    db.query("DELETE FROM student WHERE id=?",
    [req.params.id],
    function(err,rows){
        if (err) return next(err);
        res.send(rows);
    });
};
    


/*exports.find = function(req,res){
       res.send('Hello World'); //callback function
};*/

