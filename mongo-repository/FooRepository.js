const Schema = require('../mongoose/MultiTenantSampleSchema.js');

class FooRepository {

	constructor(isMongoConnected) {
		this.isMongoConnected = isMongoConnected;
	}

	setMongoConnected(isMongoConnected) {
		this.isMongoConnected = isMongoConnected;
		if(this.isMongoConnected) {
			// This returns a new Foo model for tenant "tenant1" 
			var fooConstructor = mongoose.mtModel('tenant1.Foo');
			var myFoo = new fooConstructor({
    			title:'My Foo',
    			date:new Date()
			});
 
			myFoo.save(function(err, result) {
		    	// This saved it to the collection named "tenant1__foos" 
		    	if (err) return console.error(err);
  				console.info(result);
			});
		}
	}

	getMongoConnected() {
		return this.isMongoConnected;
	}

	save(data, callback) {
		var dummyData = new Schema({
			data: data
		});

		if (this.isMongoConnected) {
			dummyData.save(function(err, dummyData) {
				callback(err, dummyData);
  				// if (err) return console.error(err);
  				// console.dir(dummyData);
			});
		} else {
			callback("Mongo Connection Error :(", null);
		}
	}

	findOne(fbData, callback) {
		// fbData = { recepientId: 'Dhruv' };
		if (this.isMongoConnected) {
			Schema.findOne(fbData, function(err, data) {
				callback(err, data);
				// if (err) return console.error(err);
  				// console.info(data);
			});
		} else {
			callback("Mongo Connection Error :(", null);
		}
	}

	findAll(callback) {
		if (this.isMongoConnected) {
			Schema.find(function(err, dataList) {
				callback(err, dataList);
	  			// if (err) return console.error(err);
  				// console.info(dataList);
			});
		} else {
			callback("Mongo Connection Error :(", null);
		}
	}

	update(data, callback) {
		if (this.isMongoConnected) {
			data.save(function(err, dataList) {
				callback(err, dataList);
	  			// if (err) return console.error(err);
  				// console.info(dataList);
			});
		} else {
			callback("Mongo Connection Error :(", null);
		}
	}
}

var fooRepository = new FooRepository(false);

module.exports = fooRepository;