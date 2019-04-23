import $ from 'jquery';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3000`,
  });

async function displayItems(item) {
$(`#itemContainer`).append(` <div class="col-3 container-thumb" data-aos="zoom-in" data-aos-duration="1300">
                            <div class="item">
                                <img src="${item.img1Url}" class="proizvod-thumb" alt="${item.name}">
                                <figcaption class="mask">
                                <h4>${item.name} <span class="price"> ${item.price.toLocaleString(`sr-RS`)}</span></h4>
                                </figcaption>
                                <ul class="external">
                                <li class=""><a class="itemCart" data-id=${item.id}><i class="fas fa-shopping-cart fa-lg" data-id=${item.id}></i></a></li>
                                </ul>
                            </div>
                            </div>`);
}

async function getItems() {
    const response = await api.get(`/items`);
    const items = await response.data;
    for (const item of items) {
        displayItems(item);
    }
}
getItems();

function saveItemIdToSessionStorage(e) {
    if (e.target.classList.contains(`itemCart`) || e.target.classList.contains(`fa-shopping-cart`)) {
        const id = e.target.attributes[1].value;
        sessionStorage.setItem(`item id`, JSON.stringify(id));
        }
}

$(document).ready(() => {
    $(`#itemContainer`).click(saveItemIdToSessionStorage);
});
