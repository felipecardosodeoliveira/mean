var express = require('express');
var load = require('express-load');

module.exports = function () {
    var app = express();

    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(express.json());
    app.use(require('method-override')());

    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

    app.set('port', 3000);

    return app;
}