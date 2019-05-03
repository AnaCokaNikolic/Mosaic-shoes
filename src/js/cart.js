/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */

import axios from 'axios';
import $ from 'jquery';
import { CountUp } from 'countup.js';

const api = axios.create({
    baseURL: `http://localhost:3000`,
  });

let removeId = 0;
let total = Number($(`#total`)[0].innerHTML);
let itemCount = Number($(`#itemCount`)[0].innerHTML);

function displayItemCount(count) {
    $(`#itemCount`).text(`${count}`);
    if (count === 0) {
        $(`#shopButton`).prop(`disabled`, true);
        $(`#itemCount`).hide();
    } else {
        $(`#shopButton`).prop(`disabled`, false);
        $(`#itemCount`).show();
    }
}

function subtractTotal(price) {
    total = Number($(`#total`)[0].innerHTML);
    const options = {
        startVal: total,
        duration: 1,
        separator: ``,
    };
    total -= price;
    const countUpTotal1 = new CountUp(`total`, total, options);
    countUpTotal1.start();
    $(`#confirmationTotal`)[0].innerHTML = total.toLocaleString(`sr-RS`);
}

function addTotal(price) {
    total = Number($(`#total`)[0].innerHTML);
    const options = {
        startVal: total,
        duration: 1,
        separator: ``,
    };
    total += price;
    const countUpTotal2 = new CountUp(`total`, total, options);
    countUpTotal2.start();
    $(`#confirmationTotal`)[0].innerHTML = total.toLocaleString(`sr-RS`);
}

function removeItem() {
    const row = this.parentNode.parentNode;
    row.style.transition = `all 1s ease`;
    row.style.height = 0;
    row.style.opacity = 0;
    setTimeout(() => {
        row.remove();
    }, 1000);

    const price = this.parentNode.previousElementSibling.innerHTML;
    subtractTotal(price);
    itemCount = Number($(`#itemCount`)[0].innerHTML) - 1;
    displayItemCount(itemCount);
}

function renderItems(img1Url, name, size, price) {
    $(`#cartItems`).append(`<tr>
        <td class="cartItemImage">
            <img src="${img1Url}" alt="${name}">
        </td>
        <td class"cartItemName">${name} <br><span>Broj: </span> ${size}</td>
        <td class"cartItemPrice">${price}</td>
        <td class="${removeId}"></td>
        </tr>`);
    const remove = $(`<a class="remove"></a>`).html(`<i class="far fa-trash-alt" ></i>`).appendTo($(`.${removeId}`));
    $(remove.get(0)).one(`click`, removeItem);
    removeId++;
    addTotal(price);
    itemCount = Number($(`#itemCount`)[0].innerHTML) + 1;
    displayItemCount(itemCount);
}

async function displayItemInCart(id, size) {
    const response = await api.get(`/items?id=${id}`);
    const item = await response.data;
    const {name} = item[0];
    const {price} = item[0];
    const {img1Url} = item[0];
    renderItems(img1Url, name, size, price);
}

function displayMessage() {
    $.when($(`#shopItemMessage`).html(`<i class="fas fa-check-circle"></i> Proizvod je dodat u korpu. Hvala!`).show().fadeOut(2000))
      .then(() => {
        $(`#itemModal`).fadeOut(500);
        $(`body`).prop(`style`, `overflow-y :auto; overflow-x: hidden;`);
        $(`#itemForm`)[0].reset();
      });
}

function saveInfoToLocalStorage(e) {
    const id = e.target.attributes[2].value;
    const selectedSize = $(`.sizeContainer input:checked`).val();
    const itemInfo = {itemId: id, size: selectedSize};
    localStorage.setItem(`itemInfo`, JSON.stringify(itemInfo));
}

function getItemInfo() {
    const itemInfo = JSON.parse(localStorage.getItem(`itemInfo`));
    const {itemId} = itemInfo;
    const {size} = itemInfo;
    displayItemInCart(itemId, size);
}

function addToCart(e) {
    e.preventDefault();
    if ($(`.sizeContainer input`).is(`:checked`)) {
        displayMessage();
        saveInfoToLocalStorage(e);
        getItemInfo();
    } else {
        $(`#shopItemMessage`).html(`<i class="fas fa-exclamation-circle"></i> Izaberite veličinu`).show().fadeOut(3000);
    }
}

export { addToCart };
