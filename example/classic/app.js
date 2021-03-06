'use strict';
require('asynctrace');
var Path = require('path');
global.MONGOOSE_DRIVER_PATH = Path.dirname(require.resolve('grist/driver'));
var MONGOOSE_TEST_URI = 'grist://' + __dirname + "/data";

var express = require('express'),
    mongoose = require('mongoose'),
    formage = require('../..'),
    nodestrum = require('nodestrum');

//noinspection JSUnresolvedVariable
var title = process.env.ADMIN_TITLE;

var app = exports.app = express();
var PORT = process.env.PORT || 8080;
var MONGO_URL = process.env.MONGOLAB_URI || MONGOOSE_TEST_URI;
mongoose.connect(MONGO_URL);

app.configure('development', function() {
    app.use(nodestrum.ConnectionCloser);
});

// A nice feature so that we server the admin statics before the logger
formage.serve_static(app, express);

app.configure('development', function() {
    app.locals('pretty', true);
    app.use(express.logger('dev'));
    app.use(app.router);
    app.use(express.errorHandler());
});



//mongoose.set('debug', true);
var admin = formage.init(app, express, require('./models'), {
    title: title || 'Formage Example',
    default_section: 'Main',
    admin_users_gui: true
});

admin.app.locals.global_head = "<script>\n" + "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','//www.google-analytics.com/analytics.js','ga');\nga('create', 'UA-15378843-16', 'www.formage.io');\nga('send', 'pageview');" + "\n</script>";

app.get('/', function(req, res) {
    res.redirect('/admin');
});

var server = app.listen(PORT, function () {
    server.setTimeout(1000);
    console.log('Express server listening on port ', server.address().port);
});

