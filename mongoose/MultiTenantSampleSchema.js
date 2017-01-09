// Reference Url: https://www.npmjs.com/package/mongoose-class-wrapper
// http://mongoosejs.com/docs/schematypes.html
var mongoose = require('mongoose');
require('mongoose-multitenant');

var fooSchema = new mongoose.Schema({
  data: {type: mongoose.Schema.Types.Mixed}
, created: {type: Date, default: Date.now}
});

// Compile a 'MobiAdzData' model using the fbData as the structure.
// Mongoose also creates a MongoDB collection called 'MobiAdzData' for these documents.
// Export mongoose model 
// module.exports = mongoose.model('MobiAdzData', mobileDataSchema);

// This returns a new Foo model for tenant "tenant1" 
module.exports = mongoose.mtModel('Foo', fooSchema);