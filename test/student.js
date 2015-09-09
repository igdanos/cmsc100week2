var should = require('should-http'),
	request = require('supertest');


describe('student',function(){
	
	var url = "http://localhost:5000";

	var studrec = {'name':'Betel', 'studno':'2007-12345'};

	describe("find()",function(){
		it('should retrieve all student record',function(done){
			request(url)
			.get('/students') //
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		});
	});


	describe("findOne()",function(){
		it('should retrieve a specific student record',function(done){
			request(url)
			.get('/students/3')
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				done();
			});
		});
	});


	describe("insert()",function(){
		it('should put a specific student record',function(done){
			request(url)
			.post('/students')
			.send(studrec)
			.end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				res.body.should.have.property('name'); //UNSURE IF SYNTAX CORRECT
				res.body.name.should.be.a.Number; //UNSURE IF SYNTAX CORRECT
				done();
			});
		});
	});


});