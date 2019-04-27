import axios from 'axios';
import $ from 'jquery';
import { CountUp } from 'countup.js';

const api = axios.create({
    baseURL: `http://localhost:3000`,
  });

let total = 0;
let removeId = 0;

function removeFadeOut(el, speed) {
    const seconds = speed / 1000;
    el.style.transition = `opacity ${seconds}s ease`;
    el.style.opacity = 0;
    setTimeout(() => {
        el.remove();
    }, speed);
}

function removeItem() {
    removeFadeOut(this.parentNode.parentNode, 1000);
    const price = this.parentNode.previousElementSibling.innerHTML;
    const options = {
        startVal: total,
        duration: 1,
    };
    total -= price;
    const countUpTotal = new CountUp(`total`, total, options);
    if (!countUpTotal.error) {
        countUpTotal.start();
    } else {
        console.error(countUpTotal.error);
    }
}

async function displayItemInCart(id, size) {
    const response = await api.get(`/items?id=${id}`);
    const item = await response.data;
    const {name} = item[0];
    const {price} = item[0];
    const {img1Url} = item[0];
    console.log(img1Url, name, size, price);
    $(`#cartItems`).append(`<tr>
                                <td id="cartItemImage">
                                    <img src="${img1Url}" >
                                </td>
                                <td id="cartItemName">${name} <br><span>Veličina: </span> ${size}</td>
                                <td id="cartItemPrice">${price}</td>
                                <td id="${removeId}"></td>
                            </tr>`);
    const remove = $(`<a></a>`, {
    }).html(`<i class="far fa-trash-alt" ></i>`).appendTo($(`#${removeId}`));
    remove.get(0).addEventListener(`click`, removeItem);
    const options = {
        startVal: total,
        duration: 1,
    };
    total += price;
    const countUpTotal = new CountUp(`total`, total, options);
    if (!countUpTotal.error) {
        countUpTotal.start();
    } else {
        console.error(countUpTotal.error);
    }
    removeId++;
}

function displayMessage() {
    $(`#shopItemMessage`).html(``);
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
        // sumTotal();
    } else {
        $(`#validationMessage`).html(``);
        $(`#shopItemMessage`).html(`<i class="fas fa-exclamation-circle"></i> Izaberite veličinu`).show().fadeOut(3500);
    }
  }


$(document).ready(() => {
    $(`#addToCartButton`).click(addToCart);
});
