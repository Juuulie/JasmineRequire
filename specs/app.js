(function () {

    'use strict',
    define([
        'jasmine',
        'jasmineHtml',
        'utils/simpleMath.spec',
    ], function (jasmine) {

        var initialize = function () {

            var jasmineEnv = jasmine.getEnv();
            jasmineEnv.updateInterval = 1000;

            var htmlReporter = new jasmine.TrivialReporter();

            jasmineEnv.addReporter(htmlReporter);

            jasmineEnv.specFilter = function (spec) {
                return htmlReporter.specFilter(spec);
            };

            var currentWindowOnload = window.onload;

            setTimeout(function () {

                if (currentWindowOnload) {
                    currentWindowOnload();
                }
                execJasmine();
            }, 1000);

            function execJasmine() {
                jasmineEnv.execute();
            }


        };
        return {
            start: initialize
        };
    })
})();