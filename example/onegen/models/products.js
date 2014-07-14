var mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

var description = {
    language : { type: String },
    text : { type: Types.Html}
}

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    picture: { type: Types.Picture },
    descriptions : [ description ]
});

schema.methods.toString = function() {
    return this.name;
};

var products = module.exports = mongoose.model('products', schema);
products.formage = {section:'CMS'};
