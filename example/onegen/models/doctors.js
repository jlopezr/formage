var mongoose = require('mongoose'),
    Types = mongoose.Schema.Types;

var Address = {
    street: { type: String },
    zip: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String }
};

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    cif: { type: String, required: true }, //  match:/d{8}\w/, description: 'ex. 12345678p'}, //TODO description
    address: Address,
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    enabled: { type: Boolean, required: true, default: true }
});

schema.methods.toString = function() {
    return this.name + ' (' + this.cif + ')';
};

var doctors = module.exports = mongoose.model('doctors', schema);
doctors.formage = {
    section:'CMS',
};
