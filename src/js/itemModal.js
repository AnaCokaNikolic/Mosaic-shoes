/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';

$(`#itemContainer`).click((e) => {
    if (e.target.classList.contains(`itemCart`) || e.target.classList.contains(`fa-shopping-cart`)) {
        e.preventDefault();
        $(`#itemModal`).prop(`style`, `display: block;`);
        $(`body`).prop(`style`, `overflow: hidden;`);
    }
});

$(`.close`).click(() => {
    $(`#itemModal`).prop(`style`, `display: none;`);
    $(`body`).prop(`style`, `overflow-y :auto;`);
    $(`#itemForm`)[0].reset();
});

$(window).click((e) => {
    if (e.target === $(`#itemModal`)[0]) {
        $(`#itemModal`).prop(`style`, `display: none;`);
        $(`body`).prop(`style`, `overflow-y :auto;`);
        $(`#itemForm`)[0].reset();
    }
});

$(`.demo`).click((e) => {
   $(`#expandedImg`)[0].src = e.target.src;
});
