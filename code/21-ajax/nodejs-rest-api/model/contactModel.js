var mongoose = require('mongoose');
var contactSchema = new mongoose.Schema({
    name: {type: String, required:true},
    message: {type: String},
    email: {type: String},
    createAt: {type: Date},
    updatedAt: {type: Date, default: Date.now }
});

module.exports = mongoose.model('contact', contactSchema);