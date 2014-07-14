//noinspection JSUnresolvedVariable
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    SchemaTypes = Schema.Types,
    ObjectId = SchemaTypes.ObjectId;
    fWidgets = require('../../../').widgets;

module.exports = new Schema({
    title: { type: String },
    contact: {
        text: { en: SchemaTypes.Html , he: SchemaTypes.Html }
    },
    ref: [{ type: SchemaTypes.ObjectId, ref: 'pages' }]
});
module.exports.methods.toString = function () {return this.text};

module.exports.formage = {
    filters: ['ref'],
    list: ['title', 'ref', 'image'],
    subCollections: [{label: 'Sub Tests', model: 'pages', field:'ref'}],
    list_populate: ['ref']
};
