/* eslint-disable import/no-extraneous-dependencies */

import $ from 'jquery';

$(`#shopButton`).click((e) => {
        e.preventDefault();
        const cartItems = $(`#cartItems`)[0].children;
        $(`#confirmationCartItems`).append($(cartItems).clone());
        $(`<span>RSD</span>`).replaceAll(`#confirmationCartItems .remove`);
        $(`#confirmationModal`).prop(`style`, `display: block;`);
        $(`body`).prop(`style`, `overflow: hidden;`);
});

$(`.close`).click(() => {
    $(`#confirmationModal`).prop(`style`, `display: none;`);
    $(`body`).prop(`style`, `overflow-y :auto;`);
    $(`#confirmationCartItems`)[0].innerHTML = ``;
});

$(window).click((e) => {
    if (e.target === $(`#confirmationModal`)[0]) {
        $(`#confirmationModal`).prop(`style`, `display: none;`);
        $(`body`).prop(`style`, `overflow-y :auto;`);
        $(`#confirmationForm`)[0].reset();
        $(`#confirmationCartItems`)[0].innerHTML = ``;
    }
});

$(`.radio`).change(() => {
    if ($(`#cash`).is(`:checked`)) {
        $(`.cardInfo`).prop(`disabled`, true);
    } else if ($(`#card`).is(`:checked`)) {
        $(`.cardInfo`).prop(`disabled`, false);
    }
});
