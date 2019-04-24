/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';

$(`#usluge-link`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#usluge`).offset().top}, 1000);
});
$(`#proizvodi-link`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#proizvodi`).offset().top}, 1000);
});
$(`#o-nama-link`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#o-nama`).offset().top}, 1000);
});
$(`#tim-link`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#tim`).offset().top}, 1000);
});
$(`#kontakt-link`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#kontakt`).offset().top}, 1000);
});
$(`.logo .link`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#first-section`).offset().top}, 1000);
});
$(`#enter`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#proizvodi`).offset().top}, 1000);
});
$(`#goToTop`).on(`click`, (event) => {
    event.preventDefault();
    $(`html, body`).animate({scrollTop: $(`#first-section`).offset().top}, 1000);
});
$(`#cart-link`).on(`click`, (event) => {
    event.preventDefault();
    $(`.nav-shop li a`).toggleClass(`active`);
    $(`#cart`).toggleClass(`open`);
});

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: `#enter`})
                .setClassToggle(`#goToTop a`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#enter`})
                .setClassToggle(`.fixed-top`, `shrink`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#enter`})
                .setClassToggle(`.logo img`, `shrink`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#enter`})
                .setClassToggle(`.nav-right li`, `shrink`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#enter`})
                .setClassToggle(`.nav-shop li`, `shrink`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#usluge`, duration: `100%` })
                .setClassToggle(`#usluge-link`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#proizvodi`, duration: `100%`})
                .setClassToggle(`#proizvodi-link`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#o-nama`, duration: `150%`})
                .setClassToggle(`#o-nama-link`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#tim`, duration: `100%`})
                .setClassToggle(`#tim-link`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#kontakt`, duration: `100%`})
                .setClassToggle(`#kontakt-link`, `active`)
                .addTo(controller);
