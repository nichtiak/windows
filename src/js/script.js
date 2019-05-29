window.addEventListener('DOMContentLoaded', function () {

    "use strict";
    let tabs = require ('./parts/tabs.js'),
        modals = require ('./parts/modals.js'),
        timer = require ('./parts/timer.js'),
        images = require ('./parts/images.js'),
        calc = require ('./parts/calc.js'),
        form = require ('./parts/form.js');

    tabs();
    modals();
    form();
    timer();
    images();
    calc();
});