(function () {

    'use strict';

    var jasmineDir = '../vendor/';


    require.config({
        urlArgs: 'buts=' + Math.random(), // pour ne pas avoir à vider le cache
        paths: {
            jasmine             : jasmineDir + 'jasmine',
            jasmineHtml         : jasmineDir + 'jasmine-html',

        },
        shim: {
            jasmine: {
                exports: 'jasmine'
            },
            jasmineHtml : {
                deps    : ['jasmine'],
            }
        }
    });

    require([
        'app'
    ], function (app) {
        app.start();
    });
}());