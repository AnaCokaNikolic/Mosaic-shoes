import axios from 'axios';
import $ from 'jquery';
import Swal from 'sweetalert2';
import { CountUp } from 'countup.js';
import { closeItemModal } from "./itemModal";


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
function animateTotal(newTotal) {
    const options = {
        startVal: total,
        duration: 1,
        separator: ``,
    };
    const countUpTotal1 = new CountUp(`total`, newTotal, options);
    countUpTotal1.start();
    $(`#confirmationTotal`)[0].innerHTML = newTotal + 400;
}

function subtractTotal(price) {
    total = Number($(`#total`)[0].innerHTML);
    const newTotal = total - price;
    animateTotal(newTotal);
}

function addTotal(price) {
    total = Number($(`#total`)[0].innerHTML);
    const newTotal = total + price;
    animateTotal(newTotal);
}

function getItemInfo() {
    let itemInfo;
    if (itemCount === 0) {
        sessionStorage.clear();
    }
    if (sessionStorage.getItem(`itemInfo`) === null) {
        itemInfo = [];
    } else {
        itemInfo = JSON.parse(sessionStorage.getItem(`itemInfo`));
    }
    return itemInfo;
}

function removeItemFromCart(event) {
    const row = event.currentTarget.parentNode.parentNode;
    row.style.transition = `all 1s ease`;
    row.style.height = 0;
    row.style.opacity = 0;
    setTimeout(() => {
        row.remove();
    }, 1000);

    const price = event.currentTarget.parentNode.previousElementSibling.innerHTML;
    subtractTotal(price);
    itemCount = Number($(`#itemCount`)[0].innerHTML) - 1;
    displayItemCount(itemCount);
}

function removeItemFromStorage(id, size) {
    const items = getItemInfo();
    items.forEach((item, index) => {
        if (item.itemId === id && item.size === size) {
            items.splice(index, 1);
        }
        sessionStorage.clear();
        sessionStorage.setItem(`itemInfo`, JSON.stringify(items));
    });
}

function renderItems(id, img1Url, name, size, price) {
    $(`#cartItems`).append(`<tr>
        <td class="cartItemImage">
            <img src="${img1Url}" alt="${name}">
        </td>
        <td class"cartItemName">${name} <br><span>Broj: </span> ${size}</td>
        <td class"cartItemPrice">${price}</td>
        <td class="${removeId}"></td>
        </tr>`);
    const remove = $(`<a class="remove"></a>`).html(`<i class="far fa-trash-alt" ></i>`).appendTo($(`.${removeId}`));
    $(remove.get(0)).one(`click`, (event) => {
        removeItemFromCart(event);
        removeItemFromStorage(id, size);
    });
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
    renderItems(id, img1Url, name, size, price);
}

function saveInfoToSessionStorage(id, selectedSize) {
    const itemInfo = getItemInfo();
    const item = {itemId: id, size: selectedSize};
    itemInfo.push(item);
    sessionStorage.setItem(`itemInfo`, JSON.stringify(itemInfo));
    displayItemInCart(id, selectedSize);
}

function checkItems(id, selectedSize) {
    const items = getItemInfo();
    let status = true;
    if (items[0] === undefined) {
        status = true;
    }
    if (items[0] !== undefined) {
        items.forEach((item) => {
            if (item.itemId === id && item.size === selectedSize) {
                status = false;
            }
       });
    }
    return status;
}

function addToCart(e) {
    e.preventDefault();
    if ($(`.sizeContainer input`).is(`:checked`)) {
        const id = e.target.attributes[2].value;
        const selectedSize = $(`.sizeContainer input:checked`).val();
        if (checkItems(id, selectedSize)) {
            Swal.fire({
                type: `success`,
                title: `Proizvod je dodat u korpu`,
              }).then(() => {
                closeItemModal();
              });
            saveInfoToSessionStorage(id, selectedSize);
        } else {
            Swal.fire({
                type: `error`,
                title: `Ovaj proizvod u veličini ${selectedSize} se već nalazi u korpi`,
              }).then(() => {
                closeItemModal();
              });
        }
    } else {
        $(`#shopItemMessage`).html(`<i class="fas fa-exclamation-circle"></i> Izaberite veličinu`).show().fadeOut(3000);
    }
}

export { addToCart };
