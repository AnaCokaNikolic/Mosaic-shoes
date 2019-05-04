/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';

function closeItemModal() {
    $(`#itemModal`).fadeOut(500);
    $(`body`).prop(`style`, `overflow-y :auto; overflow-x: hidden;`);
    $(`#itemForm`)[0].reset();
}

$(`#itemContainer`).click((e) => {
    if (e.target.classList.contains(`itemCart`) || e.target.classList.contains(`fa-shopping-cart`)) {
        e.preventDefault();
        $(`#itemModal`).prop(`style`, `display: block;`);
        $(`body`).prop(`style`, `overflow: hidden;`);
    }
});

$(`.close`).click(closeItemModal);

$(window).click((e) => {
    if (e.target === $(`#itemModal`)[0]) {
        closeItemModal();
    }
});

$(`.demo`).click((e) => {
   $(`#expandedImg`)[0].src = e.target.src;
});

export { closeItemModal };
