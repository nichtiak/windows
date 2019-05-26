window.addEventListener('DOMContentLoaded', function () {

    "use strict";
    let tabs = require ('./parts/tabs.js'),
        modals = require ('./parts/modals.js'),
        form = require ('./parts/form.js');

    tabs();
    modals();
    form();
});