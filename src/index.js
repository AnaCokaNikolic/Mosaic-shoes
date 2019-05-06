import $ from 'jquery';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './css/style.css';
import './css/media.css';

import './images/favicon.png';

import './js/header';
import './js/responsiveNav';
import './js/itemModal';
import './js/confirmationModal';
import './js/counter';
import './js/workingHours';

import { getItems } from './js/displayItems';
import { addToCart } from './js/cart';
import { formValidation, confirmationFormValidation } from './js/formValidation';

AOS.init();

$(document).ready(() => {
    getItems(`all`);
    $(`.categories a`).click((e) => {
        $(`.categories a`).removeClass(`active`);
        getItems($(e.target).attr(`class`));
        $(e.target).addClass(`active`);
    });

    $(`#addToCartButton`).click(addToCart);
    $(`#sendButton`).click(formValidation);
    $(`#confirmationButton`).click(confirmationFormValidation);
});
