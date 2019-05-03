/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';

const links = {
    uslugeLink: `usluge`,
    proizvodiLink: `proizvodi`,
    oNamaLink: `o-nama`,
    timLink: `tim`,
    kontaktLink: `kontakt`,
    logoLink: `first-section`,
    enter: `proizvodi`,
    goToTop: `first-section`,
};
const entries = Object.entries(links);
for (const [link, section] of entries) {
    $(`#${link}`).on(`click`, (event) => {
      event.preventDefault();
      $(`html, body`).animate({scrollTop: $(`#${section}`).offset().top}, 1000);
    });
  }

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
new ScrollMagic.Scene({triggerElement: `#enter`})
                .setClassToggle(`#cart`, `shrink`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#usluge`, duration: `100%` })
                .setClassToggle(`#uslugeLink`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#proizvodi`, duration: `100%`})
                .setClassToggle(`#proizvodiLink`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#o-nama`, duration: `100%`})
                .setClassToggle(`#oNamaLink`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#tim`, duration: `100%`})
                .setClassToggle(`#timLink`, `active`)
                .addTo(controller);
new ScrollMagic.Scene({triggerElement: `#kontakt`, duration: `100%`})
                .setClassToggle(`#kontaktLink`, `active`)
                .addTo(controller);
