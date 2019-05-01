/* eslint-disable no-tabs */
/* eslint-disable import/no-extraneous-dependencies */

import $ from 'jquery';
// import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/style.css';
import './css/media.css';

import './js/header';
import './js/responsiveNav';
import './js/itemModal';
import './js/confirmationModal';
import './js/counter';

import { getItems } from './js/displayItems';
import { addToCart } from './js/cart';
import { formValidation } from './js/formValidation';

AOS.init();

$(document).ready(() => {
    getItems(`all`);
    $(`.categories a`).click((e) => {
        $(`.categories a`).removeClass(`active`);
        getItems($(e.target).attr(`class`));
        $(e.target).addClass(`active`);
    });

    $(`#addToCartButton`).click(addToCart);
    $(`#contactForm`).submit(formValidation);

    const d = new Date();
    const dayOfWeek = d.getDay();
    const hour = d.getHours();
     $(`#workingHours`).attr(`title`, dayOfWeek !== 6 && dayOfWeek !== 0 && hour >= 9 && hour < 17 ? `Sada otvoreno!` : `Sada zatvoreno!`);
});
