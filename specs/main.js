(function () {

    'use strict';

    var jasmineDir = '../vendor/';


    require.config({
        urlArgs: 'buts=' + Math.random(), // pour ne pas avoir à vider le cache
        paths: {
            jasmine: jasmineDir + 'jasmine',
        },
        shim: {
            jasmine: {
                exports: 'jasmine'
            }
        }
    });

    require(['app'], function (app) {
        app.start;
    });
}());