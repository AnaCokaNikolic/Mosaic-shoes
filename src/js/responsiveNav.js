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
