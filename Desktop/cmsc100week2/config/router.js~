var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports=function(router){ //module.exports -- for this function to be used outside
       router.route('/students')
              .get(student.find);//THIS SHOULD BE the callback function
                                 //moves the callback function to student.js
                                 //student.find --> var student
                                 //.find is an object to be created
                                 
       router.route('/teacher')
              .get(teacher.find)
              .post(teacher.add);
              
                        
              
              return router;
};

