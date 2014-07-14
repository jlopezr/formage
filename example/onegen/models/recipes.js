var mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

var Level2 = {
    name : { type: String },
    temp: { type: Number },
    power: { type: Number },
    time: { type: Date },
};

var Level1 = {
    name : { type: String },
    items : [ Level2 ]
};

var schema = new mongoose.Schema({
    title: { type: String },
    date: { type: Date },
    items : [ Level1 ]
});

schema.methods.toString = function() {
    return this.title;
};

var pages = module.exports = mongoose.model('recipes', schema);
