var mongoose = require('mongoose'),
    Types = mongoose.Schema.Types,
    ObjectId = Types.ObjectId;

var schema = new mongoose.Schema({
    doctor: { type: ObjectId, ref: 'doctors', required: true},
    percentage: { type: Number, required: true },
});

schema.methods.toString = function() {
    return this.user; //TODO name
};

var commissions = module.exports = mongoose.model('commissions', schema);
commissions.formage = {section:'CMS'};
