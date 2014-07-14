var mongoose = require('mongoose'),
    Types = mongoose.Schema.Types,
    ObjectId = Types.ObjectId;

var Address = {
    street: { type: String },
    zip: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String, default: function() { return 'Spain' } }
};

var Line = {
    quantity: { type: Number, required: true, default: '1'},
    product: { type: ObjectId, ref: 'products' },
    unitPrice: { type: Number, required: true}, // TODO not editable!!
};

var schema = new mongoose.Schema({
    date: { type: Date, required: true, default: Date.now },
    client: { type: ObjectId, ref: 'clients' }, 
    doctor: { type: ObjectId, ref: 'doctors' },
    products: [ Line ], 
    address: Address, 
    payment: { type: String, required: true, enum: ['Transfer A','Transfer B','Credit Card'], default: 'Credit Card' },
    state: { type: String, required: true, enum: ['Waiting Payment','Paid','Sent','Finished'], default: 'Waiting Payment' },
});

schema.methods.toString = function() {
    return this.id;
};

var orders = module.exports = mongoose.model('orders', schema);
orders.formage = {
    section:'CMS',
    list_populate: ['client','doctor'],
    list: ['date','client','doctor','state'],
    filters: ['doctor','client'], //TODO Filter by enum (state)
    search: ['state'],
    // additional actions on this model on Edit
    actions: [
      {
           id: 'payment',
           label: 'DO Payment',
           func: function(user, ids, callback) {
                console.log('YOU TRIED TO PAY ORDERS '+ ids + ' WITH USER ' + user);
                throw "Santi he petao";
                return callback(null, 'HOLA SANTI');
           }
       }
    ],
};
