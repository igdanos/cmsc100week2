var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports=function(router){ //module.exports -- for this function to be used outside
       router.route('/students')
              .get(student.find)//THIS SHOULD BE the callback function
                                 //moves the callback function to student.js
                                 //student.find --> var student
                                 //.find is an object to be created
              
              .post(student.insert); // CREATE

        router.route('/students/:id') //another ROUTE HANDLER for finding a SPECIFIC ELEMENT
                .get(student.findOne) //findONE --> another FUNCTION
                .put(student.update) //UPDATE
                .delete(student.remove); //DELETE
               
                
                                        
       router.route('/teacher')
              .get(teacher.find)
              .post(teacher.add);
              
                        
              
              return router;
};

