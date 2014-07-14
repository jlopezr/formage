var mongoose = require('mongoose'),
    Types = mongoose.Schema.Types,
    ObjectId = Types.ObjectId;

var schema = new mongoose.Schema({
    client: { type: ObjectId, ref: 'clients', required: true},
    percentage: { type: Number, required: true },
    products: [
        { product: {type: ObjectId, ref: 'products', required: true},
          percentage: {type: Number, required: true}
        }
    ]
});

schema.methods.toString = function() {
    return this.user; //TODO name
};

var discounts= module.exports = mongoose.model('discounts', schema);
discounts.formage = {
    section:'CMS',
    filters:['user']
};
