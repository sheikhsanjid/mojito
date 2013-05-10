

/*jslint node:true*/

'use strict';

var debug = require('debug')('app:yaml'),
    express = require('express'),
    mojito = require('../../'),
    app;

app = express();

// register custom middleware here
// app.use(require('./middleware/foo.js'));

// Registers Mojito's default
app.use(mojito.middleware());

/*
// By doing this, give users more control over which order middleware
// are registered.
// But the recommended way to register all default middleware is:
// `app.use(mojito.middleware());`
mojito.defaultMiddleware().forEach(function (mid) {
    debug('app.use(): ' + mid);
    app.use(mojito[mid]);
});
*/

// In addition to mojito `routes.json`, user can hook up additional 
// mounting points if necessary.
app.get('/status', function (req, res) {
    res.send('200 OK');
});

app.listen(app.get('port'), function () {
    debug('Server listening on port ' + app.get('port') + ' ' +
               'in ' + app.get('env') + ' mode');
});
