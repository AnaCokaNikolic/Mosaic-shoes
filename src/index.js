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
import './js/counter';

import { getItems } from './js/displayItems';
import { addToCart } from './js/cart';
import { formValidation } from './js/formValidation';

AOS.init();

$(document).ready(() => {
    getItems();
    $(`#addToCartButton`).click(addToCart);
    $(`#sendButton`).click(formValidation);
});
