let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
}, {
    collection: "contacts"
});

module.exports = mongoose.model('contact', contactModel);