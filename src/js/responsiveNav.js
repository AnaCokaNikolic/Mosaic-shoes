/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */

import $ from 'jquery';

$(`#burger`).click(() => {
    $(`.overlay`).toggleClass(`responsive`);
});

$(`.overlay-content a`).click(() => {
    $(`.overlay`).removeClass(`responsive`);
    $(`#burger`).prop(`checked`, false);
});

$(window).resize(() => {
    if (screen.width > 768) {
        $(`.overlay`).removeClass(`responsive`);
        $(`#burger`).prop(`checked`, false);
    }
});
