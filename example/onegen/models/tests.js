var mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

var inner = {
    a: { type: String, required: true },
    b: { type: String, required: true },
}

var schema = new mongoose.Schema({
    a: { type: String, required: true },
    b: { type: String, required: true },
    item1 : [ inner ],
    item2 : inner
});

var tests = module.exports = mongoose.model('tests', schema);
tests.formage = {section:'CMS'};
